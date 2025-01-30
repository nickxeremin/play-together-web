import { z } from "zod"

export const guestLoginResponseSchema = z.object({
    token: z.string(),
})

export type GuestLoginResponseSchema = z.infer<typeof guestLoginResponseSchema>

export const authTokenSchema = z.object({
    token: z.string(),
})
