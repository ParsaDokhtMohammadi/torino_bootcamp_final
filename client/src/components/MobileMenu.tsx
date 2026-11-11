"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import { FiMenu } from "react-icons/fi"
import { navItems } from "@/constants/navigation"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()


  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="sm:hidden"
      >
        <FiMenu size={30} className="text-secondary" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 sm:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed inset-y-0 inset-s-0 z-50 w-52 bg-white flex   shadow-xl sm:hidden"
            >
              <nav className="pt-10">
                <ul className="flex flex-col gap-7">
                  {navItems.map(({ href, label, Icon, ActiveIcon }) => {
                    const isActive = pathname === href
                    const ItemIcon = isActive ? ActiveIcon : Icon

                    return (
                      <li key={href} className="flex px-4">
                        <ItemIcon className={`size-5 ${isActive ? "text-primary" : "text-text"}`} aria-hidden="true"  />
                        <Link
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-end gap-2 px-3 ${
                            isActive ? "text-primary" : "text-text"
                          }`}
                        >
                          <span>{label}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
