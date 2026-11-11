import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import OtpInput from "react18-input-otp"
import { useCheckOtp, useSendOtp } from "@/services/auth"
import { useAuth } from "@/context/AuthContext"
import { getErrorMessage } from "@/utils/errors"
import { toEnglishDigits, toPersianDigits } from "@/utils/digits"
import { useCountdown } from "@/utils/hooks/useCountdown"
import { otpSchema } from "@/validations/auth"

const RESEND_SECONDS = 120

type CodeStepProps = {
  mobile: string
  onSuccess: () => void
}

const CodeStep = ({ mobile, onSuccess }: CodeStepProps) => {
  const checkOtp = useCheckOtp()
  const sendOtp = useSendOtp()
  const { login } = useAuth()
  const { remaining, restart } = useCountdown(RESEND_SECONDS)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { code: "" },
  })

  const onSubmit = handleSubmit(({ code }) => {
    checkOtp.mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          login(data)
          toast.success("با موفقیت وارد شدید")
          onSuccess()
        },
        onError: (error) => toast.error(getErrorMessage(error)),
      },
    )
  })

  const resend = () => {
    sendOtp.mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data.message)
          restart()
        },
        onError: (error) => toast.error(getErrorMessage(error)),
      },
    )
  }

  const minutes = Math.floor(remaining / 60)
  const seconds = String(remaining % 60).padStart(2, "0")

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col items-center">
      <h2 className="mb-4 text-center text-2xl font-semibold text-text sm:text-3xl">
        کد تایید را وارد کنید.
      </h2>

      <p className="mb-8 text-center text-text">
        کد تایید به شماره {toPersianDigits(mobile)} ارسال شد
      </p>

      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <div dir="ltr">
            <OtpInput
              numInputs={6}
              value={toPersianDigits(field.value)}
              onChange={(otp: string) => field.onChange(toEnglishDigits(otp).replace(/\D/g, ""))}
              shouldAutoFocus
              autoComplete="one-time-code"
              inputProps={{ inputMode: "numeric" }}
              hasErrored={Boolean(errors.code)}
              containerStyle="flex justify-center gap-2 sm:gap-3"
              inputStyle="size-12! sm:size-14! rounded-md border border-zinc-300 text-xl text-text outline-none"
              focusStyle="border-primary!"
              errorStyle="border-red-500!"
            />
          </div>
        )}
      />

      <p className="mt-2 min-h-5 text-sm text-red-500">
        {errors.code?.message}
      </p>

      {remaining > 0 ? (
        <p className="text-sm text-zinc-500">
          {toPersianDigits(`${minutes}:${seconds}`)} تا ارسال مجدد کد
        </p>
      ) : (
        <button
          type="button"
          onClick={resend}
          disabled={sendOtp.isPending}
          className="text-sm text-primary disabled:opacity-60"
        >
          {sendOtp.isPending ? "در حال ارسال" : "ارسال مجدد کد"}
        </button>
      )}

      <button
        type="submit"
        disabled={checkOtp.isPending}
        className="mt-6 h-13 w-full rounded-md bg-primary text-lg text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {checkOtp.isPending ? "در حال بررسی" : "ورود به تورینو"}
      </button>
    </form>
  )
}

export default CodeStep
