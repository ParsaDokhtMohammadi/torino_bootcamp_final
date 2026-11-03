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

export async function getTourById(tourId: string) {
  const res = await fetch(`${baseURL}/tour/${tourId}`, {
    next: { revalidate: TOURS_REVALIDATE_SECONDS, tags: ["tours", `tour-${tourId}`] },
  })

  if (res.status === 404) return null

  if (!res.ok) {
    throw new Error(`Failed to fetch tour ${tourId}: ${res.status}`)
  }

  return (await res.json()) as Tour
}
