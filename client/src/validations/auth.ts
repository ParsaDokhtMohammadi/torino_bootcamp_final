import { z } from "zod"
import { toEnglishDigits } from "@/utils/digits"

export const mobileSchema = z.object({
  mobile: z
    .string()
    .trim()
    .transform(toEnglishDigits)
    .pipe(z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست")),
})

export const otpSchema = z.object({
  code: z
    .string()
    .transform(toEnglishDigits)
    .pipe(z.string().regex(/^\d{6}$/, "کد تایید باید ۶ رقم باشد")),
})
