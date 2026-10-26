import { footerLinkGroups } from '@/constants/footer'
import Link from 'next/link'
import React from 'react'

const FooterNav = () => {
    return (
        <nav className="flex gap-24  not-md:justify-between not-md:w-full not-md:mb-10">
            {footerLinkGroups.map((group) => (
                <div key={group.title} className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-text">
                        {group.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                        {group.links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-base text-text transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    )
}

export default FooterNav
