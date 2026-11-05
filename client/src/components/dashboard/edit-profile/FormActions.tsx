import Link from "next/link"
import { pathNames } from "@/constants/paths"

type FormActionsProps = {
  isPending: boolean
}

const FormActions = ({ isPending }: FormActionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 px-5 pb-4 md:flex md:justify-end md:border-t md:border-zinc-300 md:px-7 md:py-2">
      <button
        type="submit"
        disabled={isPending}
        className="h-10 rounded-[5px] bg-primary text-base font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60 md:w-36"
      >
        {isPending ? "در حال ذخیره..." : "تایید"}
      </button>
      <Link
        href={pathNames.profile}
        className="flex h-10 items-center justify-center rounded-[5px] border-2 border-primary text-base font-bold text-primary transition-colors hover:bg-primary/10 md:w-36"
      >
        انصراف
      </Link>
    </div>
  )
}

export default FormActions
