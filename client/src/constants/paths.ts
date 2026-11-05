export const pathNames = {
  home: "/",
  services: "/services",
  about: "/about",
  contact: "/contact",
  tour: (tourId: string) => `/tours/${tourId}`,
  profile: "/dashboard",
  editProfile: "/dashboard/edit-profile",
  myTours: "/dashboard/my-tours",
  transactions: "/dashboard/transactions",
  basket: "/basket",
} as const

export const routePatterns = {
  tour: "/tours/[tourId]",
} as const
