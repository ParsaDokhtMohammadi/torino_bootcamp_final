import { z } from "zod"
import { toEnglishDigits } from "@/utils/digits"

function isValidNationalCode(code: string) {
  if (!/^\d{10}$/.test(code) || /^(\d)\1{9}$/.test(code)) return false

  const digits = code.split("").map(Number)
  const sum = digits.slice(0, 9).reduce((total, digit, index) => total + digit * (10 - index), 0)
  const remainder = sum % 11
  const check = digits[9]

  return remainder < 2 ? check === remainder : check === 11 - remainder
}

export const fullNameSchema = z.string().trim().min(3, "نام و نام خانوادگی را وارد کنید")

export const nationalCodeSchema = z
  .string()
  .trim()
  .transform(toEnglishDigits)
  .pipe(
    z
      .string()
      .regex(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
      .refine(isValidNationalCode, "کد ملی معتبر نیست"),
  )

export const birthDateSchema = z
  .date({ error: "تاریخ تولد را انتخاب کنید" })
  .refine((date) => date <= new Date(), "تاریخ تولد معتبر نیست")

export const genderSchema = z.enum(["male", "female"], { error: "جنسیت را انتخاب کنید" })
