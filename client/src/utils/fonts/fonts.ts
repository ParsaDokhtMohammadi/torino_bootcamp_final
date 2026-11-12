import { Geist } from "next/font/google"
import localFont from "next/font/local"

export const byekan = localFont({
  src: [
    {
      path: "../../assets/fonts/BYekan.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/BYekanBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-byekan",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Tahoma", "system-ui", "sans-serif"],
})

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
