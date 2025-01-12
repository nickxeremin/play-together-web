import { z } from "zod"

export const lobbySchema = z.object({
    id: z.any(),
    name: z.string(),
    description: z.string().optional(),
})

export type LobbyModel = z.infer<typeof lobbySchema>
