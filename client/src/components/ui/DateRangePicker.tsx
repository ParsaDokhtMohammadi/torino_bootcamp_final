"use client"

import { DatePicker } from "zaman"
import { HiOutlineCalendar } from "react-icons/hi"

export type DateRange = {
  from: Date
  to: Date
}

type DateRangePickerProps = {
  onChange: (range: DateRange) => void
  className?: string
}

const DateRangePicker = ({ onChange, className = "" }: DateRangePickerProps) => {
  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      <HiOutlineCalendar className="pointer-events-none size-5 shrink-0 text-zinc-500" />
      <DatePicker
        range
        round="x2"
        accentColor="#28A745"
        position="center"
        onChange={({ from, to }) => onChange({ from, to })}
        inputClass="w-full bg-transparent text-text outline-none placeholder:text-zinc-500 cursor-pointer"
        inputAttributes={{ placeholder: "تاریخ", readOnly: true }}
        className="w-full"
      />
    </div>
  )
}

export default DateRangePicker
