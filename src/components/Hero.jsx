import { BUSINESS, ORDER_URL } from "../config"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest-900 bg-leaf-pattern pt-32 pb-24 text-cream-50 sm:pt-40 sm:pb-32"
    >
      <div className="pointer-events-none absolute -left-16 top-24 text-8xl opacity-20 sm:text-9xl">🌿</div>
      <div className="pointer-events-none absolute -right-10 bottom-10 text-8xl opacity-20 sm:text-9xl">🌿</div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="mb-6 text-5xl">🏡</div>
        <span className="font-script text-5xl text-gold-400 sm:text-7xl">{BUSINESS.name}</span>
        <span className="mt-2 text-sm uppercase tracking-[0.4em] text-cream-100/70">{BUSINESS.tagline}</span>

        <h1 className="font-display mt-8 text-3xl italic leading-snug text-cream-50 sm:text-5xl">
          {BUSINESS.slogan}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
          Freshly cooked, homemade meals delivered to your workplace — with an exciting new menu
          every single day. Good food, the way home food should taste.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#menu"
            className="rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-forest-950 shadow-lg transition hover:bg-gold-400"
          >
            See Today's Menu
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold-400/60 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cream-50 transition hover:border-gold-400 hover:bg-gold-400/10"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
