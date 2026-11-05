"use client"

import Image from "next/image"
import { Controller, useForm } from "react-hook-form"
import type { DefaultValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiChevronDown } from "react-icons/fi"
import { toast } from "react-toastify"
import { DatePicker } from "zaman"
import calendar from "@/assets/icons/calendar.svg"
import FormActions from "@/components/dashboard/edit-profile/FormActions"
import FormCard from "@/components/dashboard/edit-profile/FormCard"
import FieldError from "@/components/ui/FieldError"
import TextField from "@/components/ui/TextField"
import { inputClassName } from "@/constants/styles"
import { useUpdateProfile } from "@/services/profile"
import { personalInfoSchema } from "@/validations/profile"
import type { PersonalInfoInput, PersonalInfoOutput } from "@/validations/profile"
import { getFullName, splitFullName, toDate } from "@/utils/profile"
import { getErrorMessage } from "@/utils/errors"
import type { Profile } from "@/types/profile"

type PersonalInfoFormProps = {
  profile: Profile
}

function getDefaultValues(profile: Profile): DefaultValues<PersonalInfoInput> {
  return {
    fullName: getFullName(profile) ?? "",
    nationalCode: profile.nationalCode ?? "",
    birthDate: toDate(profile.birthDate),
    gender: profile.gender ?? "",
  }
}

const PersonalInfoForm = ({ profile }: PersonalInfoFormProps) => {
  const { mutate, isPending } = useUpdateProfile()
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonalInfoInput, unknown, PersonalInfoOutput>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: getDefaultValues(profile),
  })

  const onSubmit = handleSubmit(({ fullName, birthDate, ...values }) => {
    if (isPending) return
    mutate(
      { ...values, ...splitFullName(fullName), birthDate: birthDate?.toISOString() ?? "" },
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
    <FormCard title="اطلاعات شخصی" editPrefix>
      <form onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 gap-x-7 gap-y-2 px-5 pt-8 pb-3 md:grid-cols-3 md:px-6 md:pt-6 md:pb-4">
          <TextField
            type="text"
            autoComplete="name"
            placeholder="نام و نام خانوادگی"
            error={errors.fullName?.message}
            {...register("fullName")}
          />

          <TextField
            type="text"
            inputMode="numeric"
            maxLength={10}
            placeholder="کدملی"
            error={errors.nationalCode?.message}
            {...register("nationalCode")}
          />

          <div className="md:order-last">
            <div className="relative">
              <span className="pointer-events-none absolute inset-s-3 -top-2 z-10 hidden bg-white px-1 text-[10px] text-zinc-500 md:block">
                جنسیت
              </span>
              <select
                aria-label="جنسیت"
                aria-invalid={errors.gender ? "true" : "false"}
                {...register("gender")}
                className={`${inputClassName} appearance-none`}
              >
                <option value="">انتخاب جنسیت</option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
              <FiChevronDown aria-hidden="true" className="pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            </div>
            <FieldError message={errors.gender?.message} />
          </div>

          <div>
            <div className="relative">
              <Image src={calendar} alt="" aria-hidden="true" className="pointer-events-none absolute inset-s-2 top-1/2 z-10 size-4 -translate-y-1/2 opacity-60" />
              <Controller
                control={control}
                name="birthDate"
                render={({ field }) => (
                  <DatePicker
                    round="x2"
                    accentColor="#28A745"
                    position="center"
                    className="w-full"
                    defaultValue={field.value}
                    onChange={({ value }) => field.onChange(value)}
                    inputClass={`${inputClassName} cursor-pointer ps-8`}
                    inputAttributes={{
                      placeholder: "تاریخ تولد",
                      "aria-label": "تاریخ تولد",
                      "aria-invalid": errors.birthDate ? "true" : "false",
                      readOnly: true,
                    }}
                  />
                )}
              />
            </div>
            <FieldError message={errors.birthDate?.message} />
          </div>
        </div>

        <FormActions isPending={isPending} />
      </form>
    </FormCard>
  )
}

export default PersonalInfoForm
