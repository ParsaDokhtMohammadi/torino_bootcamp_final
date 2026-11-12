"use client"

import { createContext, use, useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { cookieNames } from "@/constants/cookies"
import { pathNames, protectedPaths } from "@/constants/paths"
import type { CheckOtpResponse, Role, User } from "@/types/auth"

type AuthContextValue = {
  user: User | null
  isReady: boolean
  mobile: string
  role: Role
  isLoginOpen: boolean
  openLogin: () => void
  closeLogin: () => void
  login: (data: CheckOtpResponse) => void
  logout: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextValue | null>(null)


function isProtectedPath(pathname: string) {
  return protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))
}

function parseUser(raw: string) {
  try {
    const value = JSON.parse(raw)
    if (typeof value === "object" && value !== null && "mobile" in value && typeof value.mobile === "string") {
      return value
    }
    return null
  } catch {
    return null
  }
}

function clearAuthCookies() {
  Cookies.remove(cookieNames.accessToken)
  Cookies.remove(cookieNames.refreshToken)
  Cookies.remove(cookieNames.user)
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const queryClient = useQueryClient()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const raw = Cookies.get(cookieNames.user)
    if (raw) {
      const savedUser = parseUser(raw)
      if (savedUser) setUser(savedUser)
      else clearAuthCookies()
    }
    setIsReady(true)
  }, [])

  const login = (data: CheckOtpResponse) => {
    Cookies.set(cookieNames.accessToken, data.accessToken, { expires: 1 / 24 })
    Cookies.set(cookieNames.refreshToken, data.refreshToken, { expires: 7 })
    Cookies.set(cookieNames.user, JSON.stringify(data.user), { expires: 7 })
    queryClient.clear()
    setUser(data.user)
  }

  const logout = () => {
    clearAuthCookies()
    queryClient.clear()
    setUser(null)
    if (isProtectedPath(pathname)) router.replace(pathNames.home)
  }

  const value = {
    user,
    isReady,
    mobile: user?.mobile ?? "",
    role: user ? "user" : "guest",
    isLoginOpen,
    openLogin: () => setIsLoginOpen(true),
    closeLogin: () => setIsLoginOpen(false),
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
