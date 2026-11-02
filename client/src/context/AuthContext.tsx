"use client"

import { createContext, use, useState } from "react"
import Cookies from "js-cookie"
import { cookieNames } from "@/constants/cookies"
import type { CheckOtpResponse, Role, User } from "@/types/auth"

type AuthContextValue = {
  user: User | null
  name: string
  mobile: string
  role: Role
  login: (data: CheckOtpResponse) => void
  logout: () => void
}

type AuthProviderProps = {
  initialUser: User | null
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ initialUser, children }: AuthProviderProps) {
  const [user, setUser] = useState(initialUser)

  const login = (data: CheckOtpResponse) => {
    Cookies.set(cookieNames.accessToken, data.accessToken, { expires: 1 / 24 })
    Cookies.set(cookieNames.refreshToken, data.refreshToken, { expires: 7 })
    Cookies.set(cookieNames.user, JSON.stringify(data.user), { expires: 7 })
    setUser(data.user)
  }

  const logout = () => {
    Cookies.remove(cookieNames.accessToken)
    Cookies.remove(cookieNames.refreshToken)
    Cookies.remove(cookieNames.user)
    setUser(null)
  }

  const value = {
    user,
    name: [user?.firstName, user?.lastName].filter(Boolean).join(" "),
    mobile: user?.mobile ?? "",
    role: user ? "user" : "guest",
    login,
    logout,
  } satisfies AuthContextValue

  return <AuthContext value={value}>{children}</AuthContext>
}

export function useAuth() {
  const context = use(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}
