"use client"

import { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import Modal from "@/components/ui/Modal"
import MobileStep from "./MobileStep"
import CodeStep from "./CodeStep"

type LoginModalProps = {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} label="ورود به تورینو" hideCloseButton>
      <LoginFlow onClose={onClose} />
    </Modal>
  )
}

const LoginFlow = ({ onClose }: { onClose: () => void }) => {
  const [mobile, setMobile] = useState("")
  const [step, setStep] = useState<"mobile" | "code">("mobile")

  const handleCodeSent = (sentTo: string) => {
    setMobile(sentTo)
    setStep("code")
  }

  return (
    <>
      {step === "mobile" ? (
        <button type="button" onClick={onClose} aria-label="بستن" className="absolute inset-e-5 top-5 text-text">
          <IoClose size={24} />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setStep("mobile")}
          aria-label="بازگشت"
          className="absolute inset-e-5 top-5 text-text"
        >
          <FiArrowLeft size={24} />
        </button>
      )}

      {step === "mobile" ? (
        <MobileStep defaultMobile={mobile} onSent={handleCodeSent} />
      ) : (
        <CodeStep mobile={mobile} onSuccess={onClose} />
      )}
    </>
  )
}

export default LoginModal
