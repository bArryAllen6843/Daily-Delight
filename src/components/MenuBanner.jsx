export default function MenuBanner() {
  return (
    <section id="about" className="bg-cream-50 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="relative mx-auto inline-block rounded-3xl bg-forest-900 px-8 py-8 shadow-xl sm:px-16 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-cream-100/70">
            New &amp; Fresh
          </p>
          <p className="font-script mt-2 text-4xl text-cream-50 sm:text-6xl">Menu Everyday!</p>
          <div className="mx-auto mt-4 h-px w-24 bg-gold-500/60" />
        </div>

        <h2 className="font-display mt-10 text-2xl italic text-forest-900 sm:text-3xl">
          Because good food shouldn't be boring!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-forest-800/80">
          We bring you a new and fresh menu every day, with exciting dishes, wholesome meals and
          homemade flavours you'll love — made with the same care as a home-cooked meal.
        </p>
      </div>
    </section>
  )
}
