import { pathNames } from "./paths"

export const footerLinkGroups = [
  {
    title: "تورینو",
    links: [
      { href: pathNames.about, label: "درباره ما" },
      { href: pathNames.contact, label: "تماس با ما" },
      { href: "#", label: "چرا تورینو" },
      { href: "#", label: "بیمه مسافرتی" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { href: "#", label: "پشتیبانی آنلاین" },
      { href: "#", label: "راهنمای خرید" },
      { href: "#", label: "راهنمای استرداد" },
      { href: "#", label: "پرسش و پاسخ" },
    ],
  },
] as const
