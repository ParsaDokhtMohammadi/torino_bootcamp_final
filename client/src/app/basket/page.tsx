import type { Metadata } from "next"
import BasketPageTemplate from "@/templates/BasketPageTemplate"

export const metadata: Metadata = {
  title: "سبد خرید | تورینو"}
export default function BasketPage() {
  return (
    <main className="flex-1 bg-zinc-100 px-4 pt-6 pb-8 sm:pt-9 sm:pb-24">
      <div className="mx-auto w-full max-w-300">
        <BasketPageTemplate />
      </div>
    </main>
  )
}
