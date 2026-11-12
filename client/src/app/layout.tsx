import type { Metadata } from "next"
import "./globals.css"
import { byekan, geistSans } from "@/utils/fonts/fonts"
import Header from "@/components/Header"
import Footer from "@/components/Footer/Footer"
import Providers from "./providers"

export const metadata: Metadata = {
  title: "تورینو",
  description: "تورینو، برگزار کننده بهترین تور های داخلی و خارجی",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa" dir="rtl"
      className={`${byekan.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          <Header />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
