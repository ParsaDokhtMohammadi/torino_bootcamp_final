import TourCard from "@/components/tours/TourCard"
import type { Tour } from "@/types/tour"

type TourListProps = {
  tours: Tour[]
}

const TourList = ({ tours }: TourListProps) => {
  return (
    <section className="flex w-full flex-col gap-6">
      <h2 className="text-2xl text-text sm:text-[32px]">همه تور ها</h2>
      {tours.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <li key={tour.id}>
              <TourCard tour={tour} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-12 text-center text-zinc-500">توری با این مشخصات پیدا نشد</p>
      )}
    </section>
  )
}

export default TourList
