import { z } from "zod"
import { birthDateSchema, fullNameSchema, genderSchema, nationalCodeSchema } from "@/validations/common"

export const passengerSchema = z.object({
  fullName: fullNameSchema,
  nationalCode: nationalCodeSchema,
  birthDate: birthDateSchema,
  gender: genderSchema,
})

export type PassengerFormValues = z.infer<typeof passengerSchema>
