import { FiEdit3 } from "react-icons/fi"

type EditButtonProps = {
  label: string
}

const EditButton = ({ label }: EditButtonProps) => {
  return (
    <button
      type="button"
      className="flex shrink-0 items-center gap-2 text-xs text-complementry transition-opacity hover:opacity-80 md:text-sm"
    >
      <FiEdit3 aria-hidden="true" className="size-4" />
      {label}
    </button>
  )
}

export default EditButton
