"use client"

import { useEffect, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"
import { IoClose } from "react-icons/io5"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  labelledBy?: string
  children: React.ReactNode
}

const subscribe = () => () => {}

// true in the browser, false during SSR, without a setState-in-effect re-render
function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false)
}

const Modal = ({ isOpen, onClose, labelledBy, children }: ModalProps) => {
  const isClient = useIsClient()

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isClient) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-140 rounded-2xl bg-white p-6 shadow-xl sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="بستن"
              className="absolute end-5 top-5 text-text"
            >
              <IoClose size={24} />
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default Modal
