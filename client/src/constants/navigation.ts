import {
  HiHome,
  HiOutlineGlobeAlt,
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineSpeakerWave,
} from "react-icons/hi2"
import { pathNames } from "./paths"

export const navItems = [
  {
    href: pathNames.home,
    label: "صفحه اصلی",
    Icon: HiOutlineHome,
    ActiveIcon: HiHome,
  },
  {
    href: pathNames.home,
    label: "خدمات گردشگری",
    Icon: HiOutlineGlobeAlt,
    ActiveIcon: HiOutlineGlobeAlt,
  },
  {
    href: pathNames.about,
    label: "درباره ما",
    Icon: HiOutlineSpeakerWave,
    ActiveIcon: HiOutlineSpeakerWave,
  },
  {
    href: pathNames.contact,
    label: "تماس با ما",
    Icon: HiOutlinePhone,
    ActiveIcon: HiOutlinePhone,
  },
] as const
