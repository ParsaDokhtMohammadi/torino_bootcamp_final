"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`text-base transition-colors hover:text-primary ${
        isActive ? "text-primary" : "text-text"
      }`}
    >
      {children}
    </Link>
  )
}

export default NavLink
