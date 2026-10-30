import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/logo.png"
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu"
import LoginButton from "./auth/LoginButton"
import { navItems } from "@/constants/navigation"
import { pathNames } from "@/constants/paths"

const Header = () => {
  return (
    <header className="h-18.5 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-full max-w-300 items-center justify-between px-4">
        <MobileMenu />

        <Link href={pathNames.home} aria-label="تورینو" className="not-sm:hidden">
          <Image src={logo} alt="تورینو" priority className="h-11 w-auto" />
        </Link>

        <nav className="not-sm:hidden sm:w-1/2">
          <ul className="flex items-center justify-between">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <LoginButton />
      </div>
    </header>
  )
}

export default Header
