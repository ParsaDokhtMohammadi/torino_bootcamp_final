import type { Metadata } from "next"
import MyToursPageTemplate from "@/templates/MyToursPageTemplate"
import { getUserTours } from "@/services/user"

export const metadata: Metadata = {
  title: "تور های من | تورینو",
  description: "مشاهده تور های رزرو شدها",
}

export default async function MyToursPage() {
  const tours = await getUserTours()

  return <MyToursPageTemplate tours={tours} />
}
