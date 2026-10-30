import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import { useSendOtp } from "@/services/auth"
import { getErrorMessage } from "@/utils/errors"
import { mobileSchema } from "@/validations/auth"

type MobileStepProps = {
  defaultMobile: string
  onSent: (mobile: string) => void
}

const MobileStep = ({ defaultMobile, onSent }: MobileStepProps) => {
  const sendOtp = useSendOtp()
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mobileSchema),
    defaultValues: { mobile: defaultMobile },
  })

  useEffect(() => {
    setFocus("mobile")
  }, [setFocus])

  const onSubmit = handleSubmit(({ mobile }) => {
    sendOtp.mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data.message)
          onSent(mobile)
        },
        onError: (error) => toast.error(getErrorMessage(error)),
      },
    )
  })

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col">
      <h2 className="mb-10 text-center text-2xl font-semibold text-text sm:text-3xl">
        ورود به تورینو
      </h2>

      <label htmlFor="mobile" className="mb-3 text-sm text-text">
        شماره موبایل خود را وارد کنید
      </label>

      <input
        id="mobile"
        type="tel"
        inputMode="numeric"
        maxLength={11}
        autoComplete="tel"
        placeholder="۰۹۱۲***۴۲۵۳"
        aria-invalid={errors.mobile ? "true" : "false"}
        aria-describedby={errors.mobile ? "mobile-error" : undefined}
        {...register("mobile")}
        className="h-13 rounded-md border border-zinc-300 px-3 text-text outline-none placeholder:text-zinc-400 focus:border-primary aria-invalid:border-red-500"
      />

      <p  role="alert" className="mt-2 min-h-5 text-sm text-red-500">
        {errors.mobile?.message}
      </p>

      <button
        type="submit"
        disabled={sendOtp.isPending}
        className="mt-6 h-13 rounded-md bg-primary text-lg text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {sendOtp.isPending ? "در حال ارسال…" : "ارسال کد تایید"}
      </button>
    </form>
  )
}

export default MobileStep
