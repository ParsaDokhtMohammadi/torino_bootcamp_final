import { createElement } from "react"
import type { IconType } from "react-icons"
import { PiAirplaneTilt, PiBoat, PiBus, PiCar, PiJeep, PiTrain, PiVan } from "react-icons/pi"

export const vehicleNames: Record<string, string> = {
  bus: "اتوبوس",
  airplane: "پرواز",
  ship: "کشتی",
  train: "قطار",
  suv: "آفرود",
  van: "ون",
}

const vehicleTravelNames: Record<string, string> = {
  bus: "اتوبوس",
  airplane: "هواپیما",
  ship: "کشتی",
  train: "قطار",
  suv: "آفرود",
  van: "ون",
}

const vehicleIcons: Record<string, IconType> = {
  bus: PiBus,
  airplane: PiAirplaneTilt,
  ship: PiBoat,
  train: PiTrain,
  suv: PiJeep,
  van: PiVan,
}

export function toPersianVehicle(vehicle: string) {
  return vehicleNames[vehicle.toLowerCase()] ?? vehicle
}

export function getVehicleTravelLabel(vehicle: string) {
  return `سفر با ${vehicleTravelNames[vehicle.toLowerCase()] ?? vehicle}`
}

export function renderVehicleIcon(vehicle: string, className: string) {
  const icon = vehicleIcons[vehicle.toLowerCase()] ?? PiCar
  return createElement(icon, { className, "aria-hidden": true })
}
