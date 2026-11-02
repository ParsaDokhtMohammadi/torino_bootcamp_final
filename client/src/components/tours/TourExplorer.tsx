"use client"

import { useState } from "react"
import SearchBar from "@/components/search/SearchBar"
import TourList from "@/components/tours/TourList"
import { getPlaces } from "@/utils/places"
import { filterTours } from "@/utils/tours"
import type { Tour, TourFilters } from "@/types/tour"

type TourExplorerProps = {
  tours: Tour[]
  children: React.ReactNode
}

const emptyFilters: TourFilters = { originId: "", destinationId: "", range: null }

const TourExplorer = ({ tours, children }: TourExplorerProps) => {
  const [filters, setFilters] = useState<TourFilters>(emptyFilters)
  const { origins, destinations } = getPlaces(tours)

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <section className="mx-auto flex w-full max-w-218 flex-col items-center gap-6 sm:gap-8">
        {children}
        <SearchBar origins={origins} destinations={destinations} onSearch={setFilters} />
      </section>
      <TourList tours={filterTours(tours, filters)} />
    </div>
  )
}

export default TourExplorer
