import { useAuth } from "@/context/AuthContext"
import { toast } from "react-toastify"

export function useRequireAuth() {
  const { role, openLogin } = useAuth()

  return (action: () => void) => {
    if (role === "guest") {
      toast.warning("برای این کار باید وارد حساب کاربری خود شوید")
      openLogin()
    }
    else action()
  }
}
