import { z } from "zod"
import { birthDateSchema, fullNameSchema, genderSchema, nationalCodeSchema } from "@/validations/common"

export const passengerSchema = z.object({
  fullName: fullNameSchema,
  nationalCode: nationalCodeSchema,
  birthDate: birthDateSchema,
  gender: genderSchema,
})

export type PassengerFormInput = z.input<typeof passengerSchema>
export type PassengerFormValues = z.output<typeof passengerSchema>
