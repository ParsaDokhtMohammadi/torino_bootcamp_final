import { useMutation } from "@tanstack/react-query"
import { api } from "@/lib/api"
import type {
  CheckOtpBody,
  CheckOtpResponse,
  SendOtpBody,
  SendOtpResponse,
} from "@/types/auth"

export function useSendOtp() {
  async function sendOtp(body: SendOtpBody) {
    const { data } = await api.post<SendOtpResponse>("/auth/send-otp", body)
    return data
  }
  return useMutation({
    mutationFn: sendOtp,
  })
}

export function useCheckOtp() {
  async function checkOtp(body: CheckOtpBody) {
    const { data } = await api.post<CheckOtpResponse>("/auth/check-otp", body)
    return data
  }
  return useMutation({
    mutationFn: checkOtp,
  })
}
