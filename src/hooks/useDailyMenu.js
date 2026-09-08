import { useEffect, useState } from "react"
import Papa from "papaparse"
import { MENU_SHEET_CSV_URL } from "../config"

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

// Picks the nearest upcoming date in the sheet (>= today); if every date has
// already passed, falls back to the most recent one so the page never shows nothing.
function pickMenuForNextDate(rows) {
  const byDate = new Map()
  for (const row of rows) {
    const date = (row.Date || "").trim()
    const item = (row.Item || "").trim()
    if (!date || !item) continue
    if (!byDate.has(date)) byDate.set(date, [])
    byDate.get(date).push({ item, emoji: (row.Emoji || "🍽️").trim() })
  }

  const dates = [...byDate.keys()].sort()
  if (dates.length === 0) return null

  const today = todayISO()
  const nextDate = dates.find((d) => d >= today) ?? dates[dates.length - 1]
  return { date: nextDate, items: byDate.get(nextDate) }
}

export function useDailyMenu() {
  const [state, setState] = useState({ status: "idle", date: null, items: [] })

  useEffect(() => {
    if (!MENU_SHEET_CSV_URL) {
      setState({ status: "unconfigured", date: null, items: [] })
      return
    }

    let cancelled = false
    setState((s) => ({ ...s, status: "loading" }))

    fetch(MENU_SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`)
        return res.text()
      })
      .then((csv) => {
        if (cancelled) return
        const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true })
        const menu = pickMenuForNextDate(data)
        if (!menu) {
          setState({ status: "empty", date: null, items: [] })
        } else {
          setState({ status: "ready", date: menu.date, items: menu.items })
        }
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", date: null, items: [] })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
