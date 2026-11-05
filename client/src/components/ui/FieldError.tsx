type FieldErrorProps = {
  message?: string
}

const FieldError = ({ message }: FieldErrorProps) => (
  <p role={message ? "alert" : undefined} className="mt-1 min-h-4 text-xs text-red-500">{message}</p>
)

export default FieldError
