import type { Metadata } from "next"
import EditProfilePageTemplate from "@/templates/EditProfilePageTemplate"
import { getProfile } from "@/services/user"

export const metadata: Metadata = {
  title: "ویرایش پروفایل | تورینو",
  description: "ویرایش اطلاعات حساب  کاربری، شخصی و بانکی"
  
}

export default async function EditProfilePage() {
  const profile = await getProfile()

  return <EditProfilePageTemplate profile={profile} />
}
