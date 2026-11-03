"use client"

import {
  environmentManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ToastContainer } from "react-toastify"
import { AuthProvider, useAuth } from "@/context/AuthContext"
import LoginModal from "@/components/auth/LoginModal"

type ProvidersProps = {
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

function GlobalLoginModal() {
  const { isLoginOpen, closeLogin } = useAuth()
  return <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />
}

export default function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
        <GlobalLoginModal />
        <ToastContainer rtl position="top-center" />
      </AuthProvider>
    </QueryClientProvider>
  )
}
