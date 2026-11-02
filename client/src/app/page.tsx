import Image from "next/image"
import banner from "@/assets/images/banner.svg"
import HomePageTemplate from "@/templates/HomePageTemplate"
import { getTours } from "@/services/tours"

export const revalidate = 60

export default async function Home() {
  const tours = await getTours()

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <Image src={banner} alt="banner" className="w-full"></Image>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between p-16 bg-white  sm:items-start">
        <HomePageTemplate tours={tours} />
      </main>
    </div>
  )
}
