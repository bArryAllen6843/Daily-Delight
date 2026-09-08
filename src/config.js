export const BUSINESS = {
  name: "Daily Delight",
  tagline: "by Soni",
  slogan: "Meals That Feel Like Home",
  instagram: "@dailydelight_bysoni",
  instagramUrl: "https://instagram.com/dailydelight_bysoni",
  // TODO: paste your WhatsApp group invite link here, e.g. "https://chat.whatsapp.com/XXXXXXXXXXXXXXXXXXXXXX"
  // Get it from: open the group in WhatsApp -> group name -> Invite via link -> copy.
  whatsappGroupUrl: "",
}

// Falls back to the Instagram profile until the WhatsApp group link above is filled in.
export const ORDER_URL = BUSINESS.whatsappGroupUrl || BUSINESS.instagramUrl

// TODO: paste the "Publish to web" CSV link for the daily menu Google Sheet.
// Google Sheet -> File -> Share -> Publish to web -> select the menu tab -> CSV -> Publish -> copy the link.
// Expected columns (first row = header): Date, Item, Emoji
//   Date   -> YYYY-MM-DD, the day the dish is being served
//   Item   -> dish name, e.g. "Paneer Butter Masala"
//   Emoji  -> optional single emoji shown on the card, e.g. "🍛"
export const MENU_SHEET_CSV_URL = ""
