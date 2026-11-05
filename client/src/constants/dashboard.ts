import profileIcon from "@/assets/icons/profile.svg"
import myToursIcon from "@/assets/icons/myTours.svg"
import transactionIcon from "@/assets/icons/transaction.svg"
import { pathNames } from "./paths"

export const dashboardNavItems = [
  {
    href: pathNames.profile,
    activePaths: [pathNames.profile, pathNames.editProfile],
    label: "پروفایل",
    icon: profileIcon,
  },
  {
    href: pathNames.myTours,
    activePaths: [pathNames.myTours],
    label: "تور های من",
    icon: myToursIcon,
  },
  {
    href: pathNames.transactions,
    activePaths: [pathNames.transactions],
    label: "تراکنش ها",
    icon: transactionIcon,
  },
] as const
