"use client"

import Link from "next/link"
import CheckoutForm from "@/components/basket/CheckoutForm"
import { pathNames } from "@/constants/paths"
import { useBasket } from "@/services/basket"
import { useProfileQuery } from "@/services/profile"

const BasketPageTemplate = () => {
  const { data: tour, isPending, isError } = useBasket()
  const { data: profile, isPending: isProfilePending } = useProfileQuery()

  if (isPending || isProfilePending) return <div className="h-64 animate-pulse rounded-[10px] bg-white" />

  if (isError) return <p className="py-16 text-center text-lg text-red-600">خطا در دریافت سبد خرید</p>

  if (!tour) {
    return (
      <div className="flex flex-col items-center gap-6 py-16">
        <p className="text-xl text-text">سبد خرید شما خالی است</p>
        <Link href={pathNames.home} className="rounded-[10px] bg-primary px-6 py-3 text-white">
          مشاهده تورها
        </Link>
      </div>
    )
  }

  return <CheckoutForm tour={tour} profile={profile} />
}

export default BasketPageTemplate
