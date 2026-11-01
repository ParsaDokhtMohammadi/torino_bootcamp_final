"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { FaUser } from "react-icons/fa6"
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi"
import { pathNames } from "@/constants/paths"
import { toPersianDigits } from "@/utils/digits"

type UserMenuProps = {
  mobile: string
}

const UserMenu = ({ mobile }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)



  const phone = <span>{toPersianDigits(mobile)}</span>

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-1 text-lg text-primary"
      >
        <FaUser className="size-4" aria-hidden="true" />
        {phone}
        <FiChevronDown
          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full -translate-x-1/2 z-50 mt-2 w-60 overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="flex items-center gap-2 bg-zinc-100 px-3 py-2 text-lg text-secondary">
              <span className="flex size-8 items-center justify-center rounded-full bg-zinc-300">
                <FaUser className="size-4 text-zinc-500" aria-hidden="true" />
              </span>
              {phone}
            </div>

            <Link
              href={pathNames.profile}
              onClick={() => setIsOpen(false)}
              className="mx-3 flex items-center gap-2 border-b border-zinc-200 py-3 text-text"
            >
              <FiUser className="size-5" aria-hidden="true" />
              اطلاعات حساب کاربری
            </Link>

            <button
              type="button"
              className="flex w-full items-center gap-2 px-3 py-3 text-red-600"
            >
              <FiLogOut className="size-5" aria-hidden="true" />
              خروج از حساب کاربری
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserMenu
