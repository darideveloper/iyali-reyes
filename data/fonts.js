import localFont from 'next/font/local'
import { Ubuntu } from 'next/font/google'

export const fontTitle = localFont({
  src: '../public/fonts/tan-pearl.woff2',
  display: 'swap',
})

export const fontBody = Ubuntu({ weight: ["400", "700"], subsets: ['latin'] })