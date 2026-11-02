import Image from "next/image"
import Link from "next/link"
import { pathNames } from "@/constants/paths"
import { formatPrice, getTourImageUrl, getTourSummary } from "@/utils/tours"
import type { Tour } from "@/types/tour"

type TourCardProps = {
  tour: Tour
}

const TourCard = ({ tour }: TourCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <Link href={pathNames.tour(tour.id)} className="relative aspect-278/159 w-full">
        <Image
          src={getTourImageUrl(tour)}
          alt={tour.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-col gap-1 px-3 py-2">
        <h3 className="text-xl text-text">{tour.title}</h3>
        <p className="truncate text-sm text-zinc-500">{getTourSummary(tour)}</p>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-zinc-200 px-3 py-2">
        <Link
          href={pathNames.tour(tour.id)}
          className="rounded-md bg-primary px-6 py-1 text-sm text-white transition hover:bg-primary/90"
        >
          رزرو
        </Link>
        <p className="text-xs text-zinc-500">
          <span className="text-base text-complementry">{formatPrice(tour.price)}</span> تومان
        </p>
      </div>
    </article>
  )
}

export default TourCard
