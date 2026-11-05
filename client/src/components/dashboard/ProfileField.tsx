import type { ReactNode } from "react"

type ProfileFieldProps = {
  label: string
  value?: string
  emphasized?: boolean
  action?: ReactNode
  className?: string
}

const ProfileField = ({ label, value, emphasized = false, action, className = "" }: ProfileFieldProps) => {
  return (
    <div className={`flex items-center gap-4 text-sm ${className}`}>
      <dt className="text-zinc-600 md:w-28 md:shrink-0">{label}</dt>
      <dd className={`ms-auto md:ms-0 ${emphasized ? "font-bold" : ""}`}>{value ?? "—"}</dd>
      {action ? <div className="ms-16 md:ms-auto">{action}</div> : null}
    </div>
  )
}

export default ProfileField
