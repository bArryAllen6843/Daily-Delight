export default function AdvanceOrder() {
  return (
    <section className="bg-cream-50 px-6 pb-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 rounded-2xl bg-gold-400/25 px-8 py-8 text-center sm:flex-row sm:gap-6 sm:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-forest-900 text-3xl">
          📅
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-forest-900">
            Take advance orders
          </p>
          <p className="font-display text-2xl italic text-forest-900 sm:text-3xl">One Day Prior</p>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-forest-800/80">
            to enjoy the freshest meals!
          </p>
        </div>
      </div>
    </section>
  )
}
