import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import errorTv from "@/assets/images/ErrorTV.svg"
import { pathNames } from "@/constants/paths"

export const metadata: Metadata = {
  title: "صفحه یافت نشد | تورینو",
}

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16 md:flex-row-reverse md:gap-16">
      <Image
        src={errorTv}
        alt=""
        priority
        className="h-auto w-64 md:w-md"
      />

      <div className="flex flex-col items-center gap-8 md:items-start">
        <h1 className="text-2xl font-semibold text-text md:text-4xl">
          صفحه مورد نظر یافت نشد!
        </h1>

        <Link
          href={pathNames.home}
          className="rounded-2xl bg-primary/20 px-6 py-4 text-lg text-primary transition-colors hover:bg-primary/30 md:text-xl"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </main>
  )
}
