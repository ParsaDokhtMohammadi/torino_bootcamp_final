import Image from "next/image"
import banner from "@/assets/images/banner.svg"
import HomePageTemplate from "@/templates/HomePageTemplate"
import { getTours } from "@/services/tours"

export const revalidate = 60 * 60 * 2

export default async function Home() {
  const tours = await getTours()

  return (
    <div className="flex flex-1 flex-col items-center bg-white font-sans">
      <Image src={banner} alt="banner" priority className="w-full" />



      <main className="mx-auto flex w-full max-w-300 flex-1 flex-col px-4 py-8">
        <HomePageTemplate tours={tours} />
      </main>
    </div>
  )
}
