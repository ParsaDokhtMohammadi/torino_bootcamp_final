import type { ComponentProps } from "react"
import FieldError from "@/components/ui/FieldError"
import { inputClassName } from "@/constants/styles"

type TextFieldProps = ComponentProps<"input"> & {
  error?: string
  wrapperClassName?: string
}

const TextField = ({ error, wrapperClassName = "", ...props }: TextFieldProps) => {
  return (
    <div className={wrapperClassName}>
      <input
        aria-label={props.placeholder}
        aria-invalid={error ? "true" : "false"}
        {...props}
        className={inputClassName}
      />
      <FieldError message={error} />
    </div>
  )
}

export default TextField
