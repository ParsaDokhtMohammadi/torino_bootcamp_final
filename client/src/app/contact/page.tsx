import type { Metadata } from "next"
import ContactPageTemplate from "@/templates/ContactPageTemplate"

export const dynamic = "error"

export const metadata: Metadata = {
  title: "تماس با ما | تورینو",
  description: "راه‌های ارتباط با پشتیبانی تورینو",
}

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-300 flex-1 flex-col px-4 py-8">
      <ContactPageTemplate />
    </main>
  )
}
