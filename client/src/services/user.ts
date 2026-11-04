import { cookies } from "next/headers"
import { cookieNames } from "@/constants/cookies"
import type { Transaction } from "@/types/transaction"

const baseURL = process.env.NEXT_PUBLIC_API_URL

async function getAuthHeaders() {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieNames.accessToken)?.value
  return { Authorization: `Bearer ${token}` }
}

export async function getTransactions() {
  const res = await fetch(`${baseURL}/user/transactions`, {
    headers: await getAuthHeaders(),
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch transactions: ${res.status}`)
  }

  return (await res.json()) as Transaction[]
}
