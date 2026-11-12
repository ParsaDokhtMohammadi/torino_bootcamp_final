"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import FormCard from "@/components/dashboard/edit-profile/FormCard"
import TextField from "@/components/ui/TextField"
import { useUpdateProfile } from "@/services/profile"
import { accountInfoSchema } from "@/validations/profile"
import { formatDigits } from "@/utils/profile"
import { getErrorMessage } from "@/utils/errors"
import type { Profile } from "@/types/profile"

type AccountInfoFormProps = {
  profile: Profile
}

const AccountInfoForm = ({ profile }: AccountInfoFormProps) => {
  "use no memo"
  const { mutate, isPending } = useUpdateProfile()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: { email: profile.email ?? "" },
  })

  const onSubmit = handleSubmit((values) => {
    if (isPending) return
    mutate(values, {
      onSuccess: (data) => {
        toast.success(data.message)
        reset({ email: data.user.email ?? "" })
      },
      onError: (error) => toast.error(getErrorMessage(error)),
    })
  })

  return (
    <FormCard title="اطلاعات حساب کاربری">
      <div className="flex flex-col gap-6 px-5 pt-8 pb-4 md:flex-row md:items-start md:justify-between md:px-6 md:pt-5 md:pb-5">
        <dl className="flex items-center justify-between gap-8 text-sm md:ms-4 md:mt-3">
          <dt className="text-zinc-600">شماره موبایل</dt>
          <dd className="font-bold">{formatDigits(profile.mobile)}</dd>
        </dl>

        <form onSubmit={onSubmit} noValidate className="flex items-start gap-3">
          <TextField
            type="email"
            placeholder="آدرس ایمیل"
            error={errors.email?.message}
            wrapperClassName="flex-1 md:w-64 md:flex-none"
            {...register("email")}
          />
          <button
            type="submit"
            disabled={isPending}
            className="h-12 w-24 shrink-0 rounded-[5px] bg-primary text-base font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60 md:w-30"
          >
            تایید
          </button>
        </form>
      </div>
    </FormCard>
  )
}

export default AccountInfoForm
