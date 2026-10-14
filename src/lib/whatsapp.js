import { site } from '../data/siteConfig.js'

export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const enquiryLink = (what) =>
  waLink(`Hello ${site.name}, I'd like to enquire about: ${what}.`)