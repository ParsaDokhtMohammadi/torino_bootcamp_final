import axios from "axios"
import type { AxiosError } from "axios"
import Cookies from "js-cookie"
import { cookieNames } from "@/constants/cookies"
import type { RefreshTokenResponse } from "@/types/auth"

const baseURL = process.env.NEXT_PUBLIC_API_URL

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_URL is not set. Add it to .env.local")
}

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  const token = Cookies.get(cookieNames.accessToken)
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use((response) => response,
  async (error: AxiosError) => {
    if (error.response?.status !== 403 || !error.config) return Promise.reject(error)

    const refreshToken = Cookies.get(cookieNames.refreshToken)
    const { data } = await axios.post<RefreshTokenResponse>(`${baseURL}/auth/refresh-token`, { refreshToken })
    Cookies.set(cookieNames.accessToken, data.accessToken, { expires: 1 / 24 })
    return api(error.config)
  },
)
