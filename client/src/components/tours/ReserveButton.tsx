"use client"

import { toast } from "react-toastify"
import { useAddToBasket } from "@/services/basket"
import { useRequireAuth } from "@/utils/hooks/useRequireAuth"
import { getErrorMessage } from "@/utils/errors"

type ReserveButtonProps = {
  tourId: string
}

const ReserveButton = ({ tourId }: ReserveButtonProps) => {
  const requireAuth = useRequireAuth()
  const { mutate, isPending } = useAddToBasket()

  const addToBasket = () =>
    mutate(tourId, {
      onSuccess: (data) => toast.success(data.message),
      onError: (error) => toast.error(getErrorMessage(error)),
    })

  return (
    <button
      type="button"
      onClick={() => requireAuth(addToBasket)}
      disabled={isPending}
      className="h-11 w-38.5 rounded-[10px] bg-primary text-xl text-white transition hover:bg-primary/90 disabled:opacity-60 sm:h-14 sm:w-51 sm:text-2xl"
    >
      رزرو و خرید
    </button>
  )
}

export default ReserveButton
