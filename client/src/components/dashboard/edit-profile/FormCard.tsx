import type { ReactNode } from "react"

type FormCardProps = {
  title: string
  editPrefix?: boolean
  children: ReactNode
}

const FormCard = ({ title, editPrefix = false, children }: FormCardProps) => {
  return (
    <section className="rounded-[10px] border border-zinc-300 bg-white text-text">
      <h2 className="px-5 pt-5 text-base md:px-3 md:pt-3">
        {editPrefix ? <span className="md:hidden">ویرایش </span> : null}
        {title}
      </h2>
      {children}
    </section>
  )
}

export default FormCard
