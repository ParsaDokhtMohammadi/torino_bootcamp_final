"use client"

import {
  environmentManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "@/context/AuthContext"
import type { User } from "@/types/auth"

type ProvidersProps = {
  initialUser: User | null
  children: React.ReactNode
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined

function getQueryClient() {
  if (environmentManager.isServer()) return makeQueryClient()
  if (!browserQueryClient) browserQueryClient = makeQueryClient()
  return browserQueryClient
}

export default function Providers({ initialUser, children }: ProvidersProps) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider initialUser={initialUser}>
        {children}
        <ToastContainer rtl position="top-center" />
      </AuthProvider>
    </QueryClientProvider>
  )
}
