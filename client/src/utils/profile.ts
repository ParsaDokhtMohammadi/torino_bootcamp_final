import { toPersianDigits } from "@/utils/digits"
import type { Gender, Profile } from "@/types/profile"

const birthDateFormatter = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "Asia/Tehran",
})

const genderLabels: Record<Gender, string> = {
  male: "مرد",
  female: "زن",
}

export function formatDigits(value?: string) {
  return value ? toPersianDigits(value) : undefined
}

export function formatBirthDate(date?: string) {
  if (!date) return undefined
  const value = new Date(date)
  return Number.isNaN(value.getTime()) ? undefined : birthDateFormatter.format(value)
}

export function getGenderLabel(gender?: Gender | "") {
  return gender ? genderLabels[gender] : undefined
}

export function getFullName({ firstName, lastName }: Profile) {
  const fullName = [firstName, lastName].filter(Boolean).join(" ")
  return fullName || undefined
}

export function splitFullName(fullName: string) {
  const [firstName, ...rest] = fullName.trim().split(/\s+/)
  return { firstName, lastName: rest.join(" ") }
}

export function toDate(date?: string) {
  if (!date) return undefined
  const value = new Date(date)
  return Number.isNaN(value.getTime()) ? undefined : value
}
