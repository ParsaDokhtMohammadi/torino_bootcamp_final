"use client"

import { useState } from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { TbWorldSearch } from "react-icons/tb"
import DateRangePicker, { type DateRange } from "@/components/ui/DateRangePicker"
import PlaceSelect from "@/components/search/PlaceSelect"
import type { Place, TourFilters } from "@/types/tour"

type SearchBarProps = {
  origins: Place[]
  destinations: Place[]
  onSearch: (filters: TourFilters) => void
}

const fieldClass =
  "flex h-12 items-center gap-2 rounded-xl border border-zinc-200 px-3 sm:h-full sm:rounded-none sm:border-0"

const SearchBar = ({ origins, destinations, onSearch }: SearchBarProps) => {
  const [originId, setOriginId] = useState("")
  const [destinationId, setDestinationId] = useState("")
  const [range, setRange] = useState<DateRange | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch({ originId, destinationId, range })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full grid-cols-2 gap-3 sm:flex sm:h-17 sm:items-center sm:gap-0 sm:rounded-2xl sm:border sm:border-zinc-200 sm:p-2 sm:shadow-sm"
    >
      <PlaceSelect
        places={origins}
        value={originId}
        onChange={setOriginId}
        placeholder="مبدا"
        icon={<HiOutlineLocationMarker className="size-5 shrink-0 text-zinc-500" />}
        className={`${fieldClass} sm:flex-1`}
      />

      <PlaceSelect
        places={destinations}
        value={destinationId}
        onChange={setDestinationId}
        placeholder="مقصد"
        icon={<TbWorldSearch className="size-5 shrink-0 text-zinc-500" />}
        className={`${fieldClass} sm:flex-1 sm:border-s sm:border-zinc-200`}
      />

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
