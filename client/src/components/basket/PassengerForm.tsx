import Image from "next/image"
import { Controller, useFormContext, useFormState } from "react-hook-form"
import { FaUser } from "react-icons/fa6"
import { FiChevronDown } from "react-icons/fi"
import { DatePicker } from "zaman"
import calendar from "@/assets/icons/calendar.svg"
import type { PassengerFormInput } from "@/validations/passenger"

const inputClassName =
  "h-12 w-full rounded-[5px] border border-zinc-400 bg-white px-2 text-sm text-text outline-none placeholder:text-zinc-500 focus:border-primary aria-invalid:border-red-500"

const FieldError = ({ message }: { message?: string }) => (
  <p  className="mt-1 min-h-4 text-xs text-red-500">{message}</p>
)

const PassengerForm = () => {
  const { register, control } = useFormContext<PassengerFormInput>()
  const { errors } = useFormState({ control })

  return (
    <section className="flex flex-1 flex-col gap-5 rounded-[10px] border border-zinc-300 bg-white p-4 sm:p-5">
      <h2 className="flex items-center gap-2 text-2xl text-text">
        <FaUser className="size-5" aria-hidden="true" />
        مشخصات مسافر
      </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            {...register("fullName")}
            className={inputClassName}
          />
          <FieldError message={errors.fullName?.message} />
        </div>

        <div>
          <input
            type="text"
            inputMode="numeric"
            maxLength={10}
            placeholder="کدملی"
            {...register("nationalCode")}
            className={inputClassName}
          />
          <FieldError message={errors.nationalCode?.message} />
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

        <div>
          <div className="relative">
            <select
              defaultValue=""
              {...register("gender")}
              className={`${inputClassName} appearance-none`}
            >
              <option value="" disabled>جنسیت</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute inset-e-2 top-1/2 size-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
          </div>
          <FieldError message={errors.gender?.message} />
        </div>
      </div>
    </section>
  )
}

export default PassengerForm
