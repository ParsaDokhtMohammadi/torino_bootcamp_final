export const pathNames = {
  home: "/",
  about: "/about",
  contact: "/contact",
  tour: (tourId: string) => `/tours/${tourId}`,
  profile: "/dashboard",
  editProfile: "/dashboard/edit-profile",
  myTours: "/dashboard/my-tours",
  transactions: "/dashboard/transactions",
  basket: "/basket",
}

export const protectedPaths = [pathNames.profile, pathNames.basket]

