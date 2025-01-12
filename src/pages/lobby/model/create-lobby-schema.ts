import { z } from "zod"

import { GameTypeArray } from "@/shared/model/game"

export const createLobbySchema = z.object({
    name: z.string().min(2).max(80),
    description: z.string().optional(),
    //gameType: z.enum(GameTypeArray),
})

export type CreateLobbyValues = z.infer<typeof createLobbySchema>
