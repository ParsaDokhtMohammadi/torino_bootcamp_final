import { cookies } from "next/headers"
import { cookieNames } from "@/constants/cookies"
import type { Tour } from "@/types/tour"
import type { Transaction } from "@/types/transaction"

const baseURL = process.env.NEXT_PUBLIC_API_URL

async function fetchWithAuth<T>(path: string) {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieNames.accessToken)?.value

  const res = await fetch(`${baseURL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status}`)
  }

  return (await res.json()) as T
}

export function getTransactions() {
  return fetchWithAuth<Transaction[]>("/user/transactions")
}

export function getUserTours() {
  return fetchWithAuth<Tour[]>("/user/tours")
}
