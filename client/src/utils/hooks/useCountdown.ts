import { useEffect, useState } from "react"

export function useCountdown(seconds: number) {
  const [endsAt, setEndsAt] = useState(() => Date.now() + seconds * 1000)
  const [now, setNow] = useState(() => Date.now())

  const remaining = Math.max(0, Math.ceil((endsAt - now) / 1000))

  useEffect(() => {
    if (remaining <= 0) return

    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [remaining])

  const restart = () => {
    const start = Date.now()
    setNow(start)
    setEndsAt(start + seconds * 1000)
  }

  return { remaining, restart }
}
