import type { ReactNode } from "react"

type ProfileSectionProps = {
  title: string
  action?: ReactNode
  children: ReactNode
}

const ProfileSection = ({ title, action, children }: ProfileSectionProps) => {
  return (
    <section className="rounded-[10px] border border-zinc-300 px-5 pt-5 pb-6 text-text md:px-4 md:pt-3 md:pb-8">
      <header className="flex items-center justify-between gap-4">
        <h2 className="text-base">{title}</h2>
        {action}
      </header>
      <dl className="mt-8 grid gap-y-6 md:mt-9 md:grid-cols-2 md:gap-x-8 md:gap-y-7">{children}</dl>
    </section>
  )
}

export default ProfileSection
