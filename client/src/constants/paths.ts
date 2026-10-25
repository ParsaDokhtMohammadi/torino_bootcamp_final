export const pathNames = {
  home: "/",
  services: "/services",
  about: "/about",
  contact: "/contact",
  tours: "/tours",
  tour: (tourId: string) => `/tours/${tourId}`,
  login: "/login",
  basket: "/basket",
  checkout: "/checkout",
  profile: "/profile",
  myTours: "/my-tours",
  transactions: "/transactions",
} as const
