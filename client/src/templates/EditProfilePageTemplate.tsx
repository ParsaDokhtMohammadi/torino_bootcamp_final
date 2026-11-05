"use client"

import AccountInfoForm from "@/components/dashboard/edit-profile/AccountInfoForm"
import BankInfoForm from "@/components/dashboard/edit-profile/BankInfoForm"
import PersonalInfoForm from "@/components/dashboard/edit-profile/PersonalInfoForm"
import { useProfile } from "@/services/profile"
import type { Profile } from "@/types/profile"

type EditProfilePageTemplateProps = {
  profile: Profile
}

const EditProfilePageTemplate = ({ profile: initialProfile }: EditProfilePageTemplateProps) => {
  const { data: profile } = useProfile(initialProfile)

  return (
    <div className="flex flex-col gap-6">
      <AccountInfoForm profile={profile} />
      <PersonalInfoForm profile={profile} />
      <BankInfoForm profile={profile} />
    </div>
  )
}

export default EditProfilePageTemplate
