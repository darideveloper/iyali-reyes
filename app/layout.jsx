import './globals.sass'

import Footer from "@/sections/Footer"
import Header from "@/sections/Header"

import { fontBody } from "@/data/fonts"


// Global metadata
export const metadata = {
  title: {
    template: '%s | Iyali Reyes',
    default: 'Iyali Reyes | Imagen Personal Consciente'
  },
  siteName: 'Iyali Reyes',
  description: 'Iyali Reyes, Asesor de Imagen Personal Consciente, te ayuda a alinear tu imagen externa con tu esencia y metas personales. Ofrece servicios como Colorimetría Emocional, Closet Detox, y Personal Shopper.',
  keywords: [
    "Coach de Imagen",
    "Imagen Personal Consciente",
    "Colorimetría Emocional",
    "Closet Detox",
    "Personal Shopper",
    "Iyali Reyes",
    "Moda",
    "Estilismo",
    "Coaching"
  ],
  authors: [
    {
      name: 'Dari Developer',
      url: 'mailto:darideveloper@gmail.com'
    }
  ],
  locale: 'es_MX',
  type: 'website',
  images: [
    {
      url: "https://iyali-reyes.vercel.app/images/experience.webp",
      width: 1366,
      height: 768,
    }
  ],
  videos: [
    {
      url: 'https://iyali-reyes.vercel.app/videos/video.mp4',
      width: 1280,
      height: 720,
    },
  ],
  icons: {
    favicon: '/favicon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={fontBody.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
