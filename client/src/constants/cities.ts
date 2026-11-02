export const cityNames: Record<string, string> = {
  Tehran: "تهران",
  Sanandaj: "سنندج",
  Sananndaj: "سنندج",
  Isfahan: "اصفهان",
  Madrid: "مادرید",
  Sulaymaniyah: "سلیمانیه",
  Hewler: "هولیر",
  Mazandaran: "مازندران",
  Offroad: "آفرود",
  Italy: "ایتالیا",
}

export function toPersianCity(name: string) {
  return cityNames[name] ?? name
}
