import { z } from "zod"

export const createLobbySchema = z.object({
    name: z.string().min(2).max(80),
    description: z.string().optional(),
    //gameType: z.enum(GameTypeArray),
})

export type CreateLobbyValues = z.infer<typeof createLobbySchema>
