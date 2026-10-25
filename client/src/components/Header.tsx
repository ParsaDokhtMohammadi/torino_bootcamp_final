import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import logo from "@/assets/images/logo.png";
import NavLink from "./NavLink";

const navItems = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/services", label: "خدمات گردشگری" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

const Header = () => {
  return (
    <header className="h-18.5 w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-full max-w-300 items-center justify-between px-4">
        <Link href="/" aria-label="تورینو">
          <Image src={logo} alt="تورینو" priority className="h-11 w-auto" />
        </Link>

        <nav>
          <ul className="flex items-center gap-14">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex items-center gap-1 rounded-lg text-lg  border-2 border-primary px-3 py-1 text-primary"
        >
          <FaUser className="size-4" aria-hidden="true" />
          ورود | ثبت نام
        </button>
      </div>
    </header>
  );
};

export default Header;
