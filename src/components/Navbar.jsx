import { useEffect, useState } from "react"
import { BUSINESS, ORDER_URL } from "../config"

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#menu", label: "Menu" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-forest-900/95 backdrop-blur shadow-lg shadow-forest-950/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-script text-2xl text-gold-400 sm:text-3xl">{BUSINESS.name}</span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-cream-100/80 sm:inline">
            {BUSINESS.tagline}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-cream-100/90 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-forest-950 shadow-md transition hover:bg-gold-400"
          >
            Order Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-cream-100 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream-100 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-cream-100 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold-500/20 bg-forest-900 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-cream-100/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-forest-950"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
