import type { Tour } from "@/types/tour"

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const TOURS_REVALIDATE_SECONDS = 60 * 60 * 2

export async function getTours() {
  const res = await fetch(`${baseURL}/tour`, {
    next: { revalidate: TOURS_REVALIDATE_SECONDS, tags: ["tours"] },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch tours: ${res.status}`)
  }

  return (await res.json()) as Tour[]
}
