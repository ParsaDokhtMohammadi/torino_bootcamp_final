import { useMutation } from "@tanstack/react-query"
import { api } from "@/lib/api"
import type {
  CheckOtpBody,
  CheckOtpResponse,
  RefreshTokenBody,
  RefreshTokenResponse,
  SendOtpBody,
  SendOtpResponse,
} from "@/types/auth"

export async function sendOtp(body: SendOtpBody) {
  const { data } = await api.post<SendOtpResponse>("/auth/send-otp", body)
  return data
}

export async function checkOtp(body: CheckOtpBody) {
  const { data } = await api.post<CheckOtpResponse>("/auth/check-otp", body)
  return data
}

export async function refreshToken(body: RefreshTokenBody) {
  const { data } = await api.post<RefreshTokenResponse>("/auth/refresh-token", body)
  return data
}

export function useSendOtp() {
  return useMutation({
    mutationFn: sendOtp,
  })
}

export function useCheckOtp() {
  return useMutation({
    mutationFn: checkOtp,
  })
}
