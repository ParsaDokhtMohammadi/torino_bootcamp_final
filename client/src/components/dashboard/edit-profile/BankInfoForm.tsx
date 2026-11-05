"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import FormActions from "@/components/dashboard/edit-profile/FormActions"
import FormCard from "@/components/dashboard/edit-profile/FormCard"
import TextField from "@/components/ui/TextField"
import { useUpdateProfile } from "@/services/profile"
import { bankInfoSchema } from "@/validations/profile"
import { getErrorMessage } from "@/utils/errors"
import type { Profile } from "@/types/profile"

type BankInfoFormProps = {
  profile: Profile
}

function getDefaultValues({ payment }: Profile) {
  return {
    debitCard_code: payment?.debitCard_code ?? "",
    accountIdentifier: payment?.accountIdentifier ?? "",
    shaba_code: payment?.shaba_code ?? "",
  }
}

const BankInfoForm = ({ profile }: BankInfoFormProps) => {
  const { mutate, isPending } = useUpdateProfile()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bankInfoSchema),
    defaultValues: getDefaultValues(profile),
  })

  const onSubmit = handleSubmit((payment) => {
    if (isPending) return
    mutate(
      { payment },
      {
        onSuccess: (data) => {
          toast.success(data.message)
          reset(getDefaultValues(data.user))
        },
        onError: (error) => toast.error(getErrorMessage(error)),
      },
    )
  })

  return (
    <FormCard title="اطلاعات حساب بانکی" editPrefix>
      <form onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 gap-x-7 gap-y-2 px-5 pt-8 pb-3 md:grid-cols-3 md:px-6 md:pt-6 md:pb-4">
          <TextField
            type="text"
            inputMode="numeric"
            maxLength={19}
            autoComplete="cc-number"
            placeholder="شماره کارت"
            error={errors.debitCard_code?.message}
            {...register("debitCard_code")}
          />
          <TextField
            type="text"
            inputMode="numeric"
            maxLength={20}
            placeholder="شماره حساب"
            error={errors.accountIdentifier?.message}
            {...register("accountIdentifier")}
          />
          <TextField
            type="text"
            maxLength={26}
            placeholder="شماره شبا"
            error={errors.shaba_code?.message}
            {...register("shaba_code")}
          />
        </div>

        <FormActions isPending={isPending} />
      </form>
    </FormCard>
  )
}

export default BankInfoForm
