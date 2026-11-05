import Link from "next/link"
import { FiEdit3 } from "react-icons/fi"
import { pathNames } from "@/constants/paths"

type EditButtonProps = {
  label: string
}

const EditButton = ({ label }: EditButtonProps) => {
  return (
    <Link
      href={pathNames.editProfile}
      className="flex shrink-0 items-center gap-2 text-xs text-complementry transition-opacity hover:opacity-80 md:text-sm"
    >
      <FiEdit3 aria-hidden="true" className="size-4" />
      {label}
    </Link>
  )
}

export default EditButton
