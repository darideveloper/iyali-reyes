const phone = "55 8560 38 63"
const email = "manosalamodamx@gmail.com"
const phoneClean = phone.replaceAll(" ", "")

export const contactData = [
  {
    "name": "email",
    "link":  `mailto:${email}`,
    "title": email,
  },
  {
    "name": "whatsapp",
    "link":  `https://api.whatsapp.com/send?phone=521${phoneClean}`,
    "title": "whatsapp",
  },
  {
    "name": "phone",
    "link":  `tel:${phoneClean}`,
    "title": phone,
  },
]