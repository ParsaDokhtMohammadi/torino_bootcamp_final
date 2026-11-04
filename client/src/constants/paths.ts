export const pathNames = {
  home: "/",
  services: "/services",
  about: "/about",
  contact: "/contact",
  tour: (tourId: string) => `/tours/${tourId}`,
  profile: "/profile",
  basket: "/basket",
} as const

export const routePatterns = {
  tour: "/tours/[tourId]",
} as const
