import Image from "next/image"
import Link from "next/link"
import { FaUser } from "react-icons/fa6"
import { BiLogInCircle } from "react-icons/bi"
import logo from "@/assets/images/logo.png"
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu"
import { navItems } from "@/constants/navigation"

const Header = () => {
  return (
    <header className="h-18.5 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-full max-w-300 items-center justify-between px-4">
        <MobileMenu />

        <Link href="/" aria-label="تورینو" className="not-sm:hidden">
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

        <button
          type="button"
          aria-label="ورود | ثبت نام"
          className="rounded-lg border p-2 text-primary sm:hidden"
        >
          <BiLogInCircle size={32} />
        </button>

        <button
          type="button"
          className="flex items-center gap-1 rounded-lg border-2 border-primary px-3 py-1 text-lg text-primary not-sm:hidden"
        >
          <FaUser className="size-4" aria-hidden="true" />
          ورود | ثبت نام
        </button>
      </div>
    </header>
  )
}

export default Header
