import { z } from "zod"

export const guestSchema = z.object({})

export type GuestModel = z.infer<typeof guestSchema>
