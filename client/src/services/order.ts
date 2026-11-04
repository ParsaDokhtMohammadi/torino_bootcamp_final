import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/api"
import type { CreateOrderBody, CreateOrderResponse } from "@/types/order"

export function useCreateOrder() {
  const queryClient = useQueryClient()
  async function createOrder(body: CreateOrderBody) {
    const { data } = await api.post<CreateOrderResponse>("/order", body)
    return data
  }
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["basket"] }),
  })
}
