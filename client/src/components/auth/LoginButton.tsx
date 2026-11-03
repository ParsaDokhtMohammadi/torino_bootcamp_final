"use client"

import { FaUser } from "react-icons/fa6"
import { BiLogInCircle } from "react-icons/bi"
import UserMenu from "./UserMenu"
import { useAuth } from "@/context/AuthContext"

const LoginButton = () => {
  const { isReady, role, mobile, openLogin } = useAuth()

  if (!isReady) return <div className="h-11 w-32 animate-pulse rounded-lg bg-zinc-100 not-sm:w-12" />

  if (role === "user") return <UserMenu mobile={mobile} />

  return (
    <>
      <button
        type="button"
        onClick={openLogin}
        className="rounded-lg border p-2 text-primary sm:hidden"
      >
        <BiLogInCircle size={32} />
      </button>

      <button
        type="button"
        onClick={openLogin}
        className="flex items-center gap-1 rounded-lg border-2 border-primary px-3 py-1 text-lg text-primary not-sm:hidden"
      >
        <FaUser className="size-4" aria-hidden="true" />
        ورود | ثبت نام
      </button>
    </>
  )
}

export default LoginButton
