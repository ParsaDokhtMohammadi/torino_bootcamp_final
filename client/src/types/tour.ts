export type Place = {
  id: string
  name: string
}

export type Tour = {
  id: string
  origin: Place
  destination: Place
  startDate: string
  endDate: string
  title: string
  fleetVehicle: string
  price: number
  availableSeats: number
  insurance: boolean
  options: string[]
  image: string
}
