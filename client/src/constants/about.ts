import {
  HiOutlineBanknotes,
  HiOutlineChatBubbleLeftRight,
  HiOutlineMapPin,
  HiOutlineShieldCheck,
} from "react-icons/hi2"

export const aboutStats = [
  { value: "۱۰+", label: "سال تجربه" },
  { value: "۲۵۰+", label: "تور برگزار شده" },
  { value: "۱۵,۰۰۰+", label: "مسافر راضی" },
  { value: "۳۰+", label: "مقصد داخلی و خارجی" },
] as const

export const aboutFeatures = [
  {
    title: "بهترین قیمت",
    description: "تورها را مستقیم و بدون واسطه با مناسب‌ترین قیمت رزرو کنید.",
    Icon: HiOutlineBanknotes,
  },
  {
    title: "سفر امن",
    description: "همه تورها همراه با بیمه مسافرتی و راهنمای مجرب برگزار می‌شوند.",
    Icon: HiOutlineShieldCheck,
  },
  {
    title: "مقاصد متنوع",
    description: "از طبیعت شمال و غرب ایران تا شهرهای دیدنی اروپا و منطقه.",
    Icon: HiOutlineMapPin,
  },
  {
    title: "پشتیبانی همیشگی",
    description: "تیم پشتیبانی تورینو در تمام مراحل سفر کنار شماست.",
    Icon: HiOutlineChatBubbleLeftRight,
  },
] as const
