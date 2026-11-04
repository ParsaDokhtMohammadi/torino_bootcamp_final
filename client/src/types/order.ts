export type CreateOrderBody = {
  nationalCode: string
  fullName: string
  gender: "male" | "female"
  birthDate: string
}

export type CreateOrderResponse = {
  message: string
}
