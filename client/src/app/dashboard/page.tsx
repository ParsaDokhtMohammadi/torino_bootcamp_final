import type { Metadata } from "next"
import ProfilePageTemplate from "@/templates/ProfilePageTemplate"
import { getProfile } from "@/services/user"

export const metadata: Metadata = {
  title: "پروفایل | تورینو",
  description: "مشاهده اطلاعات حساب کاربری  ",
}

export default async function ProfilePage() {
  const profile = await getProfile()

  return <ProfilePageTemplate profile={profile} />
}
