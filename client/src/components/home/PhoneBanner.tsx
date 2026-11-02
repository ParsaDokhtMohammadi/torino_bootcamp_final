import Image from "next/image"
import Link from "next/link"
import { HiPhone } from "react-icons/hi"
import phoneSupport from "@/assets/images/phoneSupport.svg"
import { pathNames } from "@/constants/paths"

const PhoneBanner = () => {
  return (
    <section className="mt-10 flex flex-col rounded-xl border border-zinc-300 sm:mt-0 sm:flex-row">
      <div className="flex items-end justify-between gap-2 rounded-t-xl bg-primary ps-4 sm:flex-1 sm:rounded-e-none sm:rounded-s-xl sm:ps-14">
        <div className="flex flex-col gap-3 self-center py-4 text-white sm:gap-6">
          <h2 className="text-2xl font-bold sm:text-5xl">
            خرید تلفنی از <span className="text-secondary">تورینو</span>
          </h2>
          <p className="text-lg sm:text-3xl">به هرکجا که میخواهید!</p>
        </div>
        <Image src={phoneSupport} alt="" className="-mt-10 h-auto w-50 shrink-0 sm:mt-0 sm:w-80" />
      </div>

      <div className="flex items-center justify-between gap-4 p-4 sm:w-90 sm:flex-col sm:justify-center sm:gap-8">
        <a href="tel:0211840" className="flex items-center gap-2 text-2xl font-bold text-text sm:text-3xl">
          <span dir="ltr">۰۲۱-۱۸۴۰</span>
          <HiPhone className="size-6 sm:size-7" />
        </a>
        <Link
          href={pathNames.contact}
          className="rounded-xl bg-secondary px-8 py-2.5 text-base text-white transition hover:bg-secondary/90 sm:px-12"
        >
          اطلاعات بیشتر
        </Link>
      </div>
    </section>
  )
}

export default PhoneBanner
