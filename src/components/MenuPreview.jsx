import { ORDER_URL } from "../config"
import { useDailyMenu } from "../hooks/useDailyMenu"

// Shown until the Google Sheet menu source is configured, or if it fails to load.
const SAMPLE_TRAY = [
  { emoji: "🍚", item: "Steamed Rice" },
  { emoji: "🍛", item: "Paneer Curry" },
  { emoji: "🥗", item: "Fresh Salad" },
  { emoji: "🫓", item: "Roti" },
  { emoji: "🥣", item: "Raita" },
  { emoji: "🍫", item: "Sweet Treat" },
]

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })
}

export default function MenuPreview() {
  const { status, date, items } = useDailyMenu()

  const showLive = status === "ready" && items.length > 0
  const tray = showLive ? items : SAMPLE_TRAY.map((d) => ({ item: d.item, emoji: d.emoji }))

  return (
    <section id="menu" className="bg-forest-900 py-20 text-cream-50">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-gold-400">
          {showLive ? "Coming Up Next" : "A Peek Into Our Tray"}
        </p>
        <h2 className="font-display mt-3 text-3xl italic sm:text-4xl">
          {showLive ? `Menu for ${formatDate(date)}` : "What a Daily Delight Meal Looks Like"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-cream-100/80">
          {showLive
            ? "Order before the day begins to make sure your meal is reserved."
            : "Our full menu changes every day and is shared with corporate teams the evening before, so you can place your order in time for the freshest meal at lunch."}
        </p>

        {status === "loading" && (
          <p className="mt-8 text-sm text-cream-100/60">Loading today's menu…</p>
        )}

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {tray.map((dish) => (
            <div
              key={dish.item}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gold-400/20 bg-cream-50/5 px-4 py-8 transition hover:border-gold-400/50 hover:bg-cream-50/10"
            >
              <span className="text-4xl">{dish.emoji}</span>
              <span className="text-sm font-medium text-cream-100/90">{dish.item}</span>
            </div>
          ))}
        </div>

        <a
          href={ORDER_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-block rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-forest-950 shadow-lg transition hover:bg-gold-400"
        >
          {showLive ? "Order This Menu on WhatsApp" : "Get Tomorrow's Menu on WhatsApp"}
        </a>
      </div>
    </section>
  )
}
