export type Gender = "male" | "female"

export type Payment = {
  shaba_code?: string
  debitCard_code?: string
  accountIdentifier?: string
}

export type Profile = {
  id: string
  mobile: string
  email?: string
  firstName?: string
  lastName?: string
  gender?: Gender
  birthDate?: string
  nationalCode?: string
  payment?: Payment
}
