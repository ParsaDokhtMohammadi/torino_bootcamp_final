import type { Tour } from "@/types/tour"

const weekdayDateFormatter = new Intl.DateTimeFormat("fa-IR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Tehran",
})

export type TourStatus = "finished" | "ongoing" | "upcoming"

export const tourStatusStyles: Record<TourStatus, { label: string, className: string }> = {
  finished: { label: "به اتمام رسیده", className: "bg-primary/25 text-primary" },
  ongoing: { label: "در حال برگزاری", className: "bg-yellow-300/40 text-yellow-600" },
  upcoming: { label: "در انتظار برگزاری", className: "bg-complementry/20 text-complementry" },
}

export function getTourStatus(tour: Tour, now = new Date()): TourStatus {
  if (new Date(tour.endDate) < now) return "finished"
  if (new Date(tour.startDate) <= now) return "ongoing"
  return "upcoming"
}

export function formatWeekdayDate(date: string) {
  const parts = weekdayDateFormatter.formatToParts(new Date(date))
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? ""
  return `${get("weekday")} ${get("day")} ${get("month")} ${get("year")}`
}
