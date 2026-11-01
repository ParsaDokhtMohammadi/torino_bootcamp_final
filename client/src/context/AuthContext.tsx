"use client"

import { createContext, use, useEffect, useState } from "react"
import type { CheckOtpResponse, Role, User } from "@/types/auth"

type AuthContextValue = {
  user: User | null
  name: string
  mobile: string
  role: Role
  login: (data: CheckOtpResponse) => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("user")
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (data: CheckOtpResponse) => {
    localStorage.setItem("accessToken", data.accessToken)
    localStorage.setItem("refreshToken", data.refreshToken)
    localStorage.setItem("user", JSON.stringify(data.user))
    setUser(data.user)
  }

  const value = {
    user,
    name: [user?.firstName, user?.lastName].filter(Boolean).join(" "),
    mobile: user?.mobile ?? "",
    role: user ? "user" : "guest",
    login,
  } satisfies AuthContextValue

  return <AuthContext value={value}>{children}</AuthContext>
}

export function useAuth() {
  const context = use(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}
