"use client"

import Image from "next/image"
import networkIssue from "@/assets/images/networkIssue.png"

export default function Error() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16 md:flex-row-reverse md:gap-16">
      <Image
        src={networkIssue}
        alt=""
        priority
        className="h-auto w-64 md:w-md"
      />

      <div className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="text-2xl font-semibold text-text md:text-4xl">
          اتصال با سرور برقرار نیست!
        </h1>
        <p className="text-base text-text/70 md:text-xl">
          لطفا بعدا دوباره امتحان کنید.
        </p>
      </div>
    </main>
  )
}
