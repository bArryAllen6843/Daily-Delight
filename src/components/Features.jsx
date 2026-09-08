const FEATURES = [
  { icon: "🌿", label: "Freshly Cooked" },
  { icon: "❤️", label: "High Quality Ingredients" },
  { icon: "🍽️", label: "Delicious Homemade Food" },
  { icon: "₹", label: "Great Food at Affordable Prices" },
]

export default function Features() {
  return (
    <section id="why-us" className="bg-cream-50 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 sm:gap-4">
        {FEATURES.map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-200 text-2xl text-forest-900">
              {f.icon}
            </div>
            <p className="text-sm font-semibold leading-tight text-forest-900">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
