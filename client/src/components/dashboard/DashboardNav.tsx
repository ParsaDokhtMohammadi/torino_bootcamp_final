"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { dashboardNavItems } from "@/constants/dashboard"

const DashboardNav = () => {
  const pathname = usePathname()

  return (
    <nav className="w-full shrink-0 md:w-71">
      <ul className="flex border-b border-zinc-300 md:flex-col md:overflow-hidden md:rounded-[10px] md:border">
        {dashboardNavItems.map(({ href, label, icon, activePaths }) => {
          const isActive = activePaths.some((path) => path === pathname)

          return (
            <li
              key={href}
              className={`flex-1 md:last:border-b-0 ${
                isActive
                  ? "md:border-b md:border-transparent md:bg-primary/25 md:px-3"
                  : "md:mx-3 md:border-b md:border-zinc-200"
              }`}
            >
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`-mb-px flex items-center justify-center gap-2 border-b-2 py-3 text-sm transition-colors md:mb-0 md:justify-start md:border-b-0 md:py-4 md:text-base ${
                  isActive ? "border-primary text-primary" : "border-transparent text-text hover:text-primary"
                }`}
              >
                <span
                  
                  className="size-5 shrink-0 bg-current"
                  style={{
                    maskImage: `url(${icon.src})`,
                  }}
                />
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default DashboardNav
