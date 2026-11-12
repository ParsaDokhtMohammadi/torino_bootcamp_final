import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTourById, getTours } from "@/services/tours"
import TourDetailsTemplate from "@/templates/TourDetailsTemplate"

export const revalidate = 7200

export async function generateStaticParams() {
  const tours = await getTours()
  return tours.map((tour) => ({ tourId: tour.id }))
}

export async function generateMetadata({ params }: PageProps<"/tours/[tourId]">): Promise<Metadata> {
  const { tourId } = await params
  const tour = await getTourById(tourId)

  if (!tour) return { title: "تور یافت نشد | تورینو" }

  return {

    title: `${tour.title} | تورینو`}
}

export default async function TourDetailsPage({params}: PageProps<"/tours/[tourId]">) {
  const { tourId } = await params
  const tour = await getTourById(tourId)

  if (!tour) notFound()

  return (
    <main className="flex-1 bg-white px-4 pt-6 pb-8 sm:bg-zinc-100 sm:pt-9 sm:pb-24">
      <div className="mx-auto w-full max-w-300">
        <TourDetailsTemplate tour={tour} />
      </div>
    </main>
  )
}
