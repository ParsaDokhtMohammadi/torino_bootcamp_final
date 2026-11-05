const persianDigits = "۰۱۲۳۴۵۶۷۸۹"
const arabicDigits = "٠١٢٣٤٥٦٧٨٩"

export function toEnglishDigits(value: string) {
  return value.replace(/[۰-۹٠-٩]/g, (digit) => {
    const persianIndex = persianDigits.indexOf(digit)
    return String(persianIndex !== -1 ? persianIndex : arabicDigits.indexOf(digit))
  })
}

export function toPersianDigits(value: string | number) {
  return String(value).replace(/\d/g, (digit) => persianDigits[Number(digit)])
}

export function toShortId(id: string) {
  return toPersianDigits(id.slice(0, 8).toUpperCase())
}
