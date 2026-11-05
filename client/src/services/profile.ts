import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/api"
import type { Profile, UpdateProfileBody, UpdateProfileResponse } from "@/types/profile"

export const profileQueryKey = ["profile"]

export async function fetchProfile() {
  const { data } = await api.get<Profile>("/user/profile")
  return data
}

export async function updateProfile(body: UpdateProfileBody) {
  const { data } = await api.put<UpdateProfileResponse>("/user/profile", body)
  return data
}

export function useProfile(initialData: Profile) {
  return useQuery({
    queryKey: profileQueryKey,
    queryFn: fetchProfile,
    initialData,
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => queryClient.setQueryData(profileQueryKey, data.user),
  })
}
