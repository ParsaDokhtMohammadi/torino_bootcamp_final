import { z } from "zod"
import { toEnglishDigits } from "@/utils/digits"

export const mobileSchema = z.object({
  mobile: z
    .string()
    .trim()
    .transform(toEnglishDigits)
    .pipe(z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست")),
})
