export const BUSINESS = {
  name: "Daily Delight",
  tagline: "by Soni",
  slogan: "Meals That Feel Like Home",
  instagram: "@dailydelight_bysoni",
  instagramUrl: "https://instagram.com/dailydelight_bysoni",
  // TODO: replace with the real WhatsApp business number, format: country code + number, no symbols
  whatsappNumber: "911234567890",
}

export const whatsappLink = (message) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`
