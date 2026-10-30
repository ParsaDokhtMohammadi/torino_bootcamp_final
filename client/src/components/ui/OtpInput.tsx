"use client"

import { useRef } from "react"
import { toEnglishDigits, toPersianDigits } from "@/utils/digits"

type OtpInputProps = {
  value: string
  onChange: (value: string) => void
  length?: number
  invalid?: boolean
}

const OtpInput = ({ value, onChange, length = 6, invalid = false }: OtpInputProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const digits = Array.from({ length }, (_, index) => value[index] ?? "")

  const focusBox = (index: number) => {
    inputsRef.current[Math.min(index, length - 1)]?.focus()
  }

  const handleChange = (index: number, raw: string) => {
    const typed = toEnglishDigits(raw).replace(/\D/g, "")
    if (!typed) return

    const next = (value.slice(0, index) + typed).slice(0, length)
    onChange(next)
    focusBox(next.length)
  }

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Backspace") return

    event.preventDefault()
    const removeAt = digits[index] ? index : index - 1
    if (removeAt < 0) return

    onChange(value.slice(0, removeAt))
    focusBox(removeAt)
  }

  
  const handleFocus = (index: number, event: React.FocusEvent<HTMLInputElement>) => {
    const target = Math.min(value.length, length - 1)
    if (target !== index) {
      focusBox(target)
      return
    }
    event.target.select()
  }

  return (
    <div dir="ltr" className="flex justify-center gap-2 sm:gap-3">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputsRef.current[index] = element
          }}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          autoFocus={index === 0}
          aria-label={`رقم ${toPersianDigits(index + 1)}`}
          aria-invalid={invalid ? "true" : "false"}
          value={toPersianDigits(digit)}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onFocus={(event) => handleFocus(index, event)}
          className="size-12 rounded-md border border-zinc-300 text-center text-xl text-text outline-none focus:border-primary aria-invalid:border-red-500 sm:size-14"
        />
      ))}
    </div>
  )
}

export default OtpInput
