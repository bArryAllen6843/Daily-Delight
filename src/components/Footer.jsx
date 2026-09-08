import { BUSINESS, whatsappLink } from "../config"

export default function Footer() {
  return (
    <footer id="contact" className="bg-forest-950 py-14 text-cream-100/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <span className="font-script text-3xl text-gold-400">{BUSINESS.name}</span>
        <p className="font-display italic text-cream-100/70">Fresh Menus · Happy Meals · Every Day</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold-400/40 px-5 py-2 text-sm font-medium transition hover:border-gold-400 hover:text-gold-400"
          >
            📷 {BUSINESS.instagram}
          </a>
          <a
            href={whatsappLink("Hi! I'd like to know more about Daily Delight.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-forest-950 transition hover:bg-gold-400"
          >
            Chat on WhatsApp
          </a>
        </div>

        <p className="mt-4 text-xs text-cream-100/50">
          &copy; {new Date().getFullYear()} {BUSINESS.name} {BUSINESS.tagline}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
