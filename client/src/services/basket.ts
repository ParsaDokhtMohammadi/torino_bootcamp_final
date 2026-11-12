import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { api } from "@/services/api"
import type { Tour } from "@/types/tour"




export function useBasket() {
  async function getBasket() {
    try {
      const { data } = await api.get<Tour>("/basket")
      return data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) return null
      throw error
    }
  }
  return useQuery({
    queryKey: ["basket"],
    queryFn: getBasket,
  })
}

export function useAddToBasket() {
  const queryClient = useQueryClient()
  async function addToBasket(tourId: string) {
    const { data } = await api.put<{ message: string }>(`/basket/${tourId}`)
    return data
  }
  return useMutation({
    mutationFn: addToBasket,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["basket"] }),
  })
}
