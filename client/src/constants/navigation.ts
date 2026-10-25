import {
  HiHome,
  HiOutlineGlobeAlt,
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";

export const navItems = [
  { href: "/", label: "صفحه اصلی", Icon: HiOutlineHome, ActiveIcon: HiHome },
  {
    href: "/services",
    label: "خدمات گردشگری",
    Icon: HiOutlineGlobeAlt,
    ActiveIcon: HiOutlineGlobeAlt,
  },
  {
    href: "/about",
    label: "درباره ما",
    Icon: HiOutlineSpeakerWave,
    ActiveIcon: HiOutlineSpeakerWave,
  },
  {
    href: "/contact",
    label: "تماس با ما",
    Icon: HiOutlinePhone,
    ActiveIcon: HiOutlinePhone,
  },
] as const;
