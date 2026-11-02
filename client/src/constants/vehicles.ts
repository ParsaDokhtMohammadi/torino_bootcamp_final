export const vehicleNames: Record<string, string> = {
  bus: "اتوبوس",
  airplane: "پرواز",
  ship: "کشتی",
  train: "قطار",
  suv: "آفرود",
  van: "ون",
}

export function toPersianVehicle(vehicle: string) {
  return vehicleNames[vehicle.toLowerCase()] ?? vehicle
}
