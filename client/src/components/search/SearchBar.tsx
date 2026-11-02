"use client"

import { useState } from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { TbWorldSearch } from "react-icons/tb"
import DateRangePicker, { type DateRange } from "@/components/ui/DateRangePicker"
import { toPersianCity } from "@/constants/cities"
import type { Place } from "@/types/tour"

type SearchBarProps = {
  origins: Place[]
  destinations: Place[]
}

const fieldClass =
  "flex h-12 items-center gap-2 rounded-xl border border-zinc-200 px-3 sm:h-full sm:rounded-none sm:border-0"

const SearchBar = ({ origins, destinations }: SearchBarProps) => {
  const [originId, setOriginId] = useState("")
  const [destinationId, setDestinationId] = useState("")
  const [range, setRange] = useState<DateRange | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ originId, destinationId, range })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full grid-cols-2 gap-3 sm:flex sm:h-17 sm:items-center sm:gap-0 sm:rounded-2xl sm:border sm:border-zinc-200 sm:p-2 sm:shadow-sm"
    >
      <label className={`${fieldClass} sm:flex-1`}>
        <HiOutlineLocationMarker className="size-5 shrink-0 text-zinc-500" />
        <select
          value={originId}
          onChange={(event) => setOriginId(event.target.value)}
          className="w-full cursor-pointer appearance-none bg-transparent text-text outline-none"
        >
          <option value="">مبدا</option>
          {origins.map((place) => (
            <option key={place.id} value={place.id}>
              {toPersianCity(place.name)}
            </option>
          ))}
        </select>
      </label>

      <label className={`${fieldClass} sm:flex-1 sm:border-s sm:border-zinc-200`}>
        <TbWorldSearch className="size-5 shrink-0 text-zinc-500" />
        <select
          value={destinationId}
          onChange={(event) => setDestinationId(event.target.value)}
          className="w-full cursor-pointer appearance-none bg-transparent text-text outline-none"
        >
          <option value="">مقصد</option>
          {destinations.map((place) => (
            <option key={place.id} value={place.id}>
              {toPersianCity(place.name)}
            </option>
          ))}
        </select>
      </label>

      <DateRangePicker
        onChange={setRange}
        className={`${fieldClass} col-span-2 sm:flex-1 sm:border-s sm:border-zinc-200`}
      />

      <button
        type="submit"
        className="col-span-2 h-12 rounded-2xl bg-primary text-xl text-white transition hover:bg-primary/90 sm:h-full sm:w-48 sm:shrink-0"
      >
        جستجو
      </button>
    </form>
  )
}

export default SearchBar
