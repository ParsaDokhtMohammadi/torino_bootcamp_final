import myToursIcon from "@/assets/icons/myTours.svg"
import { toPersianCity } from "@/constants/cities"
import { getVehicleTravelLabel, renderVehicleIcon } from "@/constants/vehicles"
import { formatPrice } from "@/utils/tours"
import { toShortId } from "@/utils/digits"
import { formatWeekdayDate, getTourStatus, tourStatusStyles } from "@/utils/myTours"
import type { Tour } from "@/types/tour"

type MyTourCardProps = {
  tour: Tour
}

const MyTourCard = ({ tour }: MyTourCardProps) => {
  const status = tourStatusStyles[getTourStatus(tour)]

  return (
    <article className="relative rounded-[10px] border border-zinc-300 text-text">
      <div className="flex flex-col gap-5 px-2 pt-6 pb-5 md:gap-7 md:px-4 md:pt-5">
        <span className={`absolute inset-e-2 top-1.5 rounded-full px-2 py-0.5 text-[8px] md:inset-e-5 md:top-5 md:px-3 md:text-xs ${status.className}`}>
          {status.label}
        </span>

        <div className="flex items-center gap-5 text-xs md:gap-24 md:text-sm">
          <p className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="size-5 shrink-0 bg-current"
              style={{ maskImage: `url(${myToursIcon.src})` }}
            />
            {tour.title}
          </p>
          <p className="flex items-center gap-1.5">
            {renderVehicleIcon(tour.fleetVehicle, "size-5 shrink-0")}
            {getVehicleTravelLabel(tour.fleetVehicle)}
          </p>
        </div>

        <div className="flex flex-col gap-6 text-xs text-zinc-600 md:flex-row md:gap-10 md:text-sm">
          <p className="flex items-center gap-2">
            <span className="text-base font-bold text-text md:text-sm">
              {toPersianCity(tour.origin.name)} به {toPersianCity(tour.destination.name)}
            </span>
            <span aria-hidden="true">•</span>
            {formatWeekdayDate(tour.startDate)}
          </p>
          <p className="flex items-center gap-2">
            <span className="text-base font-bold text-text md:text-sm">تاریخ برگشت</span>
            <span aria-hidden="true">•</span>
            {formatWeekdayDate(tour.endDate)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-zinc-300 px-2 py-3 text-[10px] text-zinc-500 md:gap-6 md:px-4 md:py-4 md:text-sm">
        <p className="flex items-center gap-3 border-e border-zinc-300 pe-3 md:pe-6">
          شماره تور
          <span className="text-sm font-bold text-text">{toShortId(tour.id)}</span>
        </p>
        <p className="flex items-center gap-3">
          مبلغ پرداخت شده
          <span className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-text">{formatPrice(tour.price)}</span>
            <span className="text-[8px] md:text-[10px]">تومان</span>
          </span>
        </p>
      </div>
    </article>
  )
}

export default MyTourCard
