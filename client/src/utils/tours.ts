import { toPersianVehicle } from "@/constants/vehicles"
import { toPersianDigits } from "@/utils/digits"
import type { Tour, TourFilters } from "@/types/tour"

const DAY_MS = 24 * 60 * 60 * 1000

const monthFormatter = new Intl.DateTimeFormat("fa-IR", { month: "long" })

function startOfDay(date: Date) {
  const copy = new Date(date)
  copy.setHours(0, 0, 0, 0)
  return copy
}

function endOfDay(date: Date) {
  const copy = new Date(date)
  copy.setHours(23, 59, 59, 999)
  return copy
}

export function filterTours(tours: Tour[], { originId, destinationId, range }: TourFilters) {
  return tours.filter((tour) => {
    if (originId && tour.origin.id !== originId) return false
    if (destinationId && tour.destination.id !== destinationId) return false
    if (range) {
      if (new Date(tour.startDate) < startOfDay(range.from)) return false
      if (new Date(tour.endDate) > endOfDay(range.to)) return false
    }
    return true
  })
}

export function getTourDays(tour: Tour) {
  return Math.round((new Date(tour.endDate).getTime() - new Date(tour.startDate).getTime()) / DAY_MS)
}

export function getTourSummary(tour: Tour) {
  const month = monthFormatter.format(new Date(tour.startDate))
  const days = toPersianDigits(getTourDays(tour))
  return [`${month} ماه . ${days} روزه`, toPersianVehicle(tour.fleetVehicle), ...tour.options].join(" - ")
}

export function formatPrice(price: number) {
  return toPersianDigits(price.toLocaleString("en-US"))
}

export function getTourImageUrl(tour: Tour) {
  return new URL(tour.image, process.env.NEXT_PUBLIC_API_URL).href
}
