import { z } from "zod"
import { toEnglishDigits } from "@/utils/digits"
import { birthDateSchema, fullNameSchema, genderSchema, nationalCodeSchema } from "@/validations/common"

const digits = z.string().transform(toEnglishDigits)

export const accountInfoSchema = z.object({
  email: z.literal("").or(z.email("آدرس ایمیل معتبر نیست")),
})

export const personalInfoSchema = z.object({
  fullName: z.literal("").or(
    fullNameSchema.refine((value) => value.split(/\s+/).length >= 2, "نام و نام خانوادگی را کامل وارد کنید"),
  ),
  nationalCode: z.literal("").or(nationalCodeSchema),
  birthDate: birthDateSchema.optional(),
  
  gender: z.literal("").or(genderSchema),
})

export const bankInfoSchema = z.object({
  debitCard_code: z.literal("").or(digits.pipe(z.string().regex(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد"))),
  accountIdentifier: z.literal("").or(digits.pipe(z.string().regex(/^\d{6,20}$/, "شماره حساب معتبر نیست"))),
  shaba_code: z.literal("").or(digits.pipe(z.string().regex(/^(IR)?\d{24}$/i, "شماره شبا معتبر نیست"))),
})

export type PersonalInfoInput = z.input<typeof personalInfoSchema>
export type PersonalInfoOutput = z.output<typeof personalInfoSchema>
