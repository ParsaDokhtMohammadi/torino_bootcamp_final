import EditButton from "@/components/dashboard/EditButton"
import ProfileField from "@/components/dashboard/ProfileField"
import ProfileSection from "@/components/dashboard/ProfileSection"
import { formatBirthDate, formatDigits, getFullName, getGenderLabel } from "@/utils/profile"
import type { Profile } from "@/types/profile"

type ProfilePageTemplateProps = {
  profile: Profile
}

const ProfilePageTemplate = ({ profile }: ProfilePageTemplateProps) => {
  const { payment } = profile

  return (
    <div className="flex flex-col gap-6">
      <ProfileSection title="اطلاعات حساب کاربری">
        <ProfileField label="شماره موبایل" value={formatDigits(profile.mobile)} />
        <ProfileField
          label="ایمیل"
          value={profile.email}
          action={<EditButton label={profile.email ? "ویرایش" : "افزودن"} />}
        />
      </ProfileSection>

      <ProfileSection title="اطلاعات شخصی" action={<EditButton label="ویرایش اطلاعات" />}>
        <ProfileField label="نام و نام خانوادگی" value={getFullName(profile)} emphasized />
        <ProfileField label="کدملی" value={formatDigits(profile.nationalCode)} />
        <ProfileField label="جنسیت" value={getGenderLabel(profile.gender)} emphasized />
        <ProfileField label="تاریخ تولد" value={formatBirthDate(profile.birthDate)} />
      </ProfileSection>

      <ProfileSection title="اطلاعات حساب بانکی" action={<EditButton label="ویرایش اطلاعات" />}>
        <ProfileField label="شماره شبا" value={formatDigits(payment?.shaba_code)} />
        <ProfileField
          label="شماره کارت"
          value={formatDigits(payment?.debitCard_code)}
          className="order-first md:order-0"
        />
        <ProfileField label="شماره حساب" value={formatDigits(payment?.accountIdentifier)} />
      </ProfileSection>
    </div>
  )
}

export default ProfilePageTemplate
