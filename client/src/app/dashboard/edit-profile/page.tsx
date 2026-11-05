import type { Metadata } from "next"
import EditProfilePageTemplate from "@/templates/EditProfilePageTemplate"
import { getProfile } from "@/services/user"

export const metadata: Metadata = {
  title: "ویرایش پروفایل",
}

export default async function EditProfilePage() {
  const profile = await getProfile()

  return <EditProfilePageTemplate profile={profile} />
}
