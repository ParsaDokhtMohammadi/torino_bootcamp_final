import Image from "next/image"
import userTick from "@/assets/icons/user-tick.svg"
import map from "@/assets/icons/map.svg"
import medalStar from "@/assets/icons/medal-star.svg"
import routing from "@/assets/icons/routing.svg"
import calendar from "@/assets/icons/calendar.svg"
import profile2User from "@/assets/icons/profile-2user.svg"
import security from "@/assets/icons/security.svg"
import bus from "@/assets/icons/bus.svg"
import ReserveButton from "@/components/tours/ReserveButton"
import { toPersianCity } from "@/constants/cities"
import { toPersianVehicle } from "@/constants/vehicles"
import { toPersianDigits } from "@/utils/digits"
import { formatPrice, formatTourDate, getTourDuration, getTourImageUrl } from "@/utils/tours"
import type { Tour } from "@/types/tour"

type TourDetailsTemplateProps = {
  tour: Tour
}

type InfoItem = {
  icon: string
  label: string
  value: string
  showOnMobile: boolean
}

const features = [
  { icon: userTick, label: "تورلیدر از مبدا" },
  { icon: map, label: "برنامه سفر" },
  { icon: medalStar, label: "تضمین کیفیت" },
]

const InfoIcon = ({ src }: { src: string }) => (
  <Image src={src} alt="" aria-hidden="true" className="size-4 sm:size-5" />
)

function getInfoItems(tour: Tour): InfoItem[] {
  return [
    { icon: routing, label: "مبدا", value: toPersianCity(tour.origin.name), showOnMobile: false },
    { icon: calendar, label: "تاریخ رفت", value: formatTourDate(tour.startDate), showOnMobile: false },
    { icon: calendar, label: "تاریخ برگشت", value: formatTourDate(tour.endDate), showOnMobile: false },
    { icon: bus, label: "حمل و نقل", value: toPersianVehicle(tour.fleetVehicle), showOnMobile: true },
    { icon: profile2User, label: "ظرفیت", value: `حداکثر ${toPersianDigits(tour.capacity)} نفر`, showOnMobile: true },
    { icon: security, label: "بیمه", value: tour.insurance ? "بیمه ۵۰ هزار دیناری" : "ندارد", showOnMobile: true },
  ]
}

const TourDetailsTemplate = ({ tour }: TourDetailsTemplateProps) => {
  return (
    <section className="grid grid-cols-1 gap-y-6 sm:grid-cols-[2fr_3fr] sm:gap-x-6 sm:rounded-[10px] sm:border sm:border-zinc-300 sm:bg-white sm:px-5 sm:pt-7 sm:pb-5 lg:grid-cols-[397px_1fr]">
      <div className="relative aspect-397/265 w-full overflow-hidden rounded-xl sm:col-start-1 sm:row-span-2 sm:row-start-1">
        <Image
          src={getTourImageUrl(tour)}
          alt={tour.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 sm:col-start-2 sm:row-start-1 sm:gap-6">
        <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-6">
          <h1 className="text-2xl font-bold text-text sm:text-[32px]">{tour.title}</h1>
          <p className="text-[15px] text-text sm:text-xl">{getTourDuration(tour)}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-zinc-500 sm:gap-x-10 sm:text-xl">
          {features.map(({ icon, label }) => (
            <li key={label} className="flex items-center gap-1.5">
              <Image src={icon} alt="icon" className="size-4 sm:size-6" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <dl className="grid grid-cols-3 gap-y-4 sm:col-span-2 sm:row-start-3 sm:mt-2 lg:grid-cols-6">
        {getInfoItems(tour).map(({ icon, label, value, showOnMobile }) => (
          <div
            key={label}
            className={`flex flex-col gap-3 sm:items-center lg:border-s lg:border-zinc-300 lg:py-2 lg:first:border-s-0 ${showOnMobile ? "" : "not-sm:hidden"}`}
          >
            <dt className="flex items-center gap-1.5 text-base text-text sm:text-lg sm:text-zinc-600">
              <InfoIcon src={icon} />
              {label}
            </dt>
            <dd className="text-sm font-medium text-text sm:text-base">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-row-reverse items-center justify-between sm:col-start-2 sm:row-start-2 sm:flex-row sm:self-end">
        <p className="text-[10px] text-zinc-600 sm:text-sm">
          <span className="text-2xl text-complementry sm:text-[28px]">{formatPrice(tour.price)}</span> تومان
        </p>
        <ReserveButton tourId={tour.id} />
      </div>
    </section>
  )
}

export default TourDetailsTemplate
