import { z } from "zod"
import { toEnglishDigits } from "@/utils/digits"

export const passengerSchema = z.object({
  fullName: z.string().trim().min(3, "نام و نام خانوادگی را وارد کنید"),
  nationalCode: z
    .string()
    .trim()
    .transform(toEnglishDigits)
    .pipe(z.string().regex(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")),
  birthDate: z.date({ error: "تاریخ تولد را انتخاب کنید" }),
  gender: z.enum(["male", "female"], { error: "جنسیت را انتخاب کنید" }),
})

export type PassengerFormValues = z.infer<typeof passengerSchema>
