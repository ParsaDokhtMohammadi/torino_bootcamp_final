import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "@/services/api"
import type { Profile, UpdateProfileBody, UpdateProfileResponse } from "@/types/profile"

export const profileQueryKey = ["profile"]

export function useProfile(initialData: Profile) {
  async function fetchProfile() {
    const { data } = await api.get<Profile>("/user/profile")
    return data
  }
  return useQuery({
    queryKey: profileQueryKey,
    queryFn: fetchProfile,
    initialData,
  })
}

export function useProfileQuery() {
  async function fetchProfile() {
    const { data } = await api.get<Profile>("/user/profile")
    return data
  }
  return useQuery({
    queryKey: profileQueryKey,
    queryFn: fetchProfile,
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()
  async function updateProfile(body: UpdateProfileBody) {
    const { data } = await api.put<UpdateProfileResponse>("/user/profile", body)
    return data
  }
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => queryClient.setQueryData(profileQueryKey, data.user),
  })
}
