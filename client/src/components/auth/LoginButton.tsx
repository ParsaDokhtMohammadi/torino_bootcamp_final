"use client"

import { useState } from "react"
import { FaUser } from "react-icons/fa6"
import { BiLogInCircle } from "react-icons/bi"
import LoginModal from "./LoginModal"
import UserMenu from "./UserMenu"
import { useAuth } from "@/context/AuthContext"

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isReady, role, mobile } = useAuth()

  if (!isReady) return <div className="h-11 w-32 animate-pulse rounded-lg bg-zinc-100 not-sm:w-12" />

  if (role === "user") return <UserMenu mobile={mobile} />

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-lg border p-2 text-primary sm:hidden"
      >
        <BiLogInCircle size={32} />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 rounded-lg border-2 border-primary px-3 py-1 text-lg text-primary not-sm:hidden"
      >
        <FaUser className="size-4" aria-hidden="true" />
        ورود | ثبت نام
      </button>

      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default LoginButton
