import { z } from "zod"
import { toEnglishDigits } from "@/utils/digits"
import { birthDateSchema, fullNameSchema, genderSchema, nationalCodeSchema } from "@/validations/common"

function normalizeDigits(value: string) {
  return toEnglishDigits(value).replace(/[\s-]/g, "")
}

function isValidCardNumber(card: string) {
  const sum = card
    .split("")
    .map(Number)
    .reduce((total, digit, index) => {
      const doubled = index % 2 === 0 ? digit * 2 : digit
      return total + (doubled > 9 ? doubled - 9 : doubled)
    }, 0)
  return sum % 10 === 0
}

function optionalText<T extends z.ZodType<unknown, string>>(schema: T, normalize = (value: string) => value.trim()) {
  return z
    .string()
    .transform((value) => normalize(value) || undefined)
    .pipe(schema.optional())
    .transform((value) => value ?? "")
}

export const accountInfoSchema = z.object({
  email: optionalText(z.email("آدرس ایمیل معتبر نیست")),
})

export const personalInfoSchema = z.object({
  fullName: optionalText(
    fullNameSchema.refine((value) => value.split(/\s+/).length >= 2, "نام و نام خانوادگی را کامل وارد کنید"),
  ),
  nationalCode: optionalText(nationalCodeSchema),
  birthDate: birthDateSchema.optional(),
  gender: z.union([genderSchema, z.literal("")]),
})

export const bankInfoSchema = z.object({
  debitCard_code: optionalText(
    z
      .string()
      .regex(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد")
      .refine(isValidCardNumber, "شماره کارت معتبر نیست"),
    normalizeDigits,
  ),
  accountIdentifier: optionalText(
    z.string().regex(/^\d{6,20}$/, "شماره حساب معتبر نیست"),
    normalizeDigits,
  ),
  shaba_code: optionalText(
    z
      .string()
      .regex(/^\d{24}$/, "شماره شبا باید ۲۴ رقم باشد")
      .transform((value) => `IR${value}`),
    (value) => normalizeDigits(value).toUpperCase().replace(/^IR/, ""),
  ),
})

export type PersonalInfoInput = z.input<typeof personalInfoSchema>
export type PersonalInfoOutput = z.output<typeof personalInfoSchema>
