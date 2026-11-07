import type { Metadata } from "next"
import AboutPageTemplate from "@/templates/AboutPageTemplate"

export const dynamic = "error"

export const metadata: Metadata = {
  title: "درباره ما | تورینو",
  description: "آشنایی با تورینو، برگزار کننده تورهای داخلی و خارجی",
}

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-300 flex-1 flex-col px-4 py-8">
      <AboutPageTemplate />
    </main>
  )
}
