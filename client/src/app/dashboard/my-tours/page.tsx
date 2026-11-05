import type { Metadata } from "next"
import MyToursPageTemplate from "@/templates/MyToursPageTemplate"
import { getUserTours } from "@/services/user"

export const metadata: Metadata = {
  title: "تور های من",
}

export default async function MyToursPage() {
  const tours = await getUserTours()

  return <MyToursPageTemplate tours={tours} />
}
