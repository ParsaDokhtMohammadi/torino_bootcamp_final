"use client"

import Link from "next/link"
import { toast } from "react-toastify"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { passengerSchema } from "@/validations/passenger"
import PassengerForm from "@/components/basket/PassengerForm"
import CheckoutSummary from "@/components/basket/CheckoutSummary"
import { pathNames } from "@/constants/paths"
import { useBasket } from "@/services/basket"
import { useCreateOrder } from "@/services/order"
import { getErrorMessage } from "@/utils/errors"

const BasketPageTemplate = () => {
  const { data: tour, isPending, isError } = useBasket()
  const { mutate: createOrder, isPending: isOrdering } = useCreateOrder()
  const form = useForm({ resolver: zodResolver(passengerSchema) })

  const onSubmit = form.handleSubmit((values) => {
    if (isOrdering) return
    createOrder(
      { ...values, birthDate: values.birthDate.toISOString() },
      {
        onSuccess: (data) => {
          toast.success(data.message)
          form.reset()
        },
        onError: (error) => toast.error(getErrorMessage(error)),
      },
    )
  })

  if (isPending) return <div className="h-64 animate-pulse rounded-[10px] bg-white" />

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

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <PassengerForm />
        <CheckoutSummary tour={tour} isSubmitting={isOrdering} />
      </form>
    </FormProvider>
  )
}

export default BasketPageTemplate
