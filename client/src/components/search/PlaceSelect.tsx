"use client"

import { useRef, useState, type ReactNode } from "react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { toPersianCity } from "@/constants/cities"
import { useClickOutside } from "@/utils/hooks/useClickOutside"
import type { Place } from "@/types/tour"

type PlaceSelectProps = {
  places: Place[]
  value: string
  onChange: (id: string) => void
  placeholder: string
  icon: ReactNode
  className?: string
}

const PlaceSelect = ({ places, value, onChange, placeholder, icon, className = "" }: PlaceSelectProps) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useClickOutside(containerRef, () => setOpen(false), open)

  const selected = places.find((place) => place.id === value)

  const handleSelect = (id: string) => {
    onChange(id === value ? "" : id)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex size-full cursor-pointer items-center gap-2 text-start outline-none"
      >
        {icon}
        <span className={selected ? "text-text" : "text-text/50"}>
          {selected ? toPersianCity(selected.name) : placeholder}
        </span>
      </button>

      {open && (
        <div className="absolute inset-s-0 top-full z-20 mt-2 w-full min-w-52 overflow-hidden rounded-xl border border-text/15 bg-white shadow-lg">
          <p className="bg-white/10 px-3 py-2 text-sm text-text">پرتردد</p>
          <ul className="max-h-72 overflow-y-auto">
            <li className="border-t border-text/15">
              <button
                type="button"
                onClick={() => handleSelect("")}
                className={`flex h-13 w-full cursor-pointer items-center px-3 transition hover:bg-text/5 ${value ? "text-text/70" : "text-primary"}`}
              >
                همه شهرها
              </button>
            </li>
            {places.map((place) => (
              <li key={place.id} className="border-t border-text/15">
                <button
                  type="button"
                  onClick={() => handleSelect(place.id)}
                  className="flex h-13 w-full cursor-pointer items-center gap-2 px-3 text-text transition hover:bg-text/5"
                >
                  <HiOutlineLocationMarker className={`size-5 shrink-0 ${place.id === value ? "text-primary" : "text-text/70"}`} />
                  <span className={place.id === value ? "text-primary" : ""}>{toPersianCity(place.name)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PlaceSelect
