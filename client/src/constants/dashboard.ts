import profileIcon from "@/assets/icons/profile.svg"
import myToursIcon from "@/assets/icons/myTours.svg"
import transactionIcon from "@/assets/icons/transaction.svg"
import { pathNames } from "./paths"

export const dashboardNavItems = [
  {
    href: pathNames.profile,
    label: "پروفایل",
    icon: profileIcon,
  },
  {
    href: pathNames.myTours,
    label: "تور های من",
    icon: myToursIcon,
  },
  {
    href: pathNames.transactions,
    label: "تراکنش ها",
    icon: transactionIcon,
  },
] as const
