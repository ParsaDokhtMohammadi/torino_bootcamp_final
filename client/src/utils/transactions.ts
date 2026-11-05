import type { Transaction } from "@/types/transaction"

const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "Asia/Tehran",
})

const timeFormatter = new Intl.DateTimeFormat("fa-IR", {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "Asia/Tehran",
})

const transactionTypeLabels: Record<Transaction["type"], string> = {
  Purchase: "ثبت نام در تور گردشگری",
}

export function formatTransactionDate(date: string) {
  const value = new Date(date)
  return `${dateFormatter.format(value)} - ${timeFormatter.format(value)}`
}

export function getTransactionTypeLabel(type: Transaction["type"]) {
  return transactionTypeLabels[type]
}
