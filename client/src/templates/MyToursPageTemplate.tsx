import MyTourCard from "@/components/dashboard/MyTourCard"
import type { Tour } from "@/types/tour"

type MyToursPageTemplateProps = {
  tours: Tour[]
}

const MyToursPageTemplate = ({ tours }: MyToursPageTemplateProps) => {
  if (tours.length === 0) {
    return <p className="py-16 text-center text-lg text-text">هنوز توری رزرو نکرده اید</p>
  }

  return (
    <div className="flex flex-col gap-4 md:rounded-[10px] md:border md:border-zinc-300 md:p-5">
      {tours.map((tour, index) => (
        <MyTourCard key={`${tour.id}-${index}`} tour={tour} />
      ))}
    </div>
  )
}

export default MyToursPageTemplate
