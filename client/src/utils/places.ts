import type { Place, Tour } from "@/types/tour"

function uniquePlaces(places: Place[]) {
  return [...new Map(places.map((place) => [place.id, place])).values()]
}

export function getPlaces(tours: Tour[]) {
  return {
    origins: uniquePlaces(tours.map((tour) => tour.origin)),
    destinations: uniquePlaces(tours.map((tour) => tour.destination)),
  }
}
