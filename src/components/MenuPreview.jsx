import { whatsappLink } from "../config"

// Sample layout — swap labels/emoji for the real dish of the day once menus are finalised.
const SAMPLE_TRAY = [
  { icon: "🍚", label: "Steamed Rice" },
  { icon: "🍛", label: "Paneer Curry" },
  { icon: "🥗", label: "Fresh Salad" },
  { icon: "🫓", label: "Roti" },
  { icon: "🥣", label: "Raita" },
  { icon: "🍫", label: "Sweet Treat" },
]

export default function MenuPreview() {
  return (
    <section id="menu" className="bg-forest-900 py-20 text-cream-50">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-gold-400">
          A Peek Into Our Tray
        </p>
        <h2 className="font-display mt-3 text-3xl italic sm:text-4xl">What a Daily Delight Meal Looks Like</h2>
        <p className="mx-auto mt-4 max-w-2xl text-cream-100/80">
          Our full menu changes every day and is shared with corporate teams the evening before, so
          you can place your order in time for the freshest meal at lunch.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {SAMPLE_TRAY.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gold-400/20 bg-cream-50/5 px-4 py-8 transition hover:border-gold-400/50 hover:bg-cream-50/10"
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="text-sm font-medium text-cream-100/90">{item.label}</span>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink("Hi! Could you share tomorrow's Daily Delight menu?")}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-block rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-forest-950 shadow-lg transition hover:bg-gold-400"
        >
          Get Tomorrow's Menu on WhatsApp
        </a>
      </div>
    </section>
  )
}
