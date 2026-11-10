"use client"

import { toast } from "react-toastify"
import { FormProvider, useForm } from "react-hook-form"
import type { DefaultValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import PassengerForm from "@/components/basket/PassengerForm"
import CheckoutSummary from "@/components/basket/CheckoutSummary"
import { useCreateOrder } from "@/services/order"
import { passengerSchema } from "@/validations/passenger"
import type { PassengerFormInput, PassengerFormValues } from "@/validations/passenger"
import { getFullName, toDate } from "@/utils/profile"
import { getErrorMessage } from "@/utils/errors"
import type { Profile } from "@/types/profile"
import type { Tour } from "@/types/tour"

type CheckoutFormProps = {
  tour: Tour
  profile?: Profile
}

function getDefaultValues(profile?: Profile): DefaultValues<PassengerFormInput> {
  if (!profile) return {}
  return {
    fullName: getFullName(profile) ?? "",
    nationalCode: profile.nationalCode ?? "",
    birthDate: toDate(profile.birthDate),
    gender: profile.gender || undefined,
  }
}

const CheckoutForm = ({ tour, profile }: CheckoutFormProps) => {
  const { mutate: createOrder, isPending: isOrdering } = useCreateOrder()
  const form = useForm<PassengerFormInput, unknown, PassengerFormValues>({
    resolver: zodResolver(passengerSchema),
    defaultValues: getDefaultValues(profile),
  })

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

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <PassengerForm />
        <CheckoutSummary tour={tour} isSubmitting={isOrdering} />
      </form>
    </FormProvider>
  )
}

export default CheckoutForm
