import { z } from "zod"

import { GameTypeArray } from "@/shared/model/game"

export const lobbyFiltersSchema = z.object({
    search: z.string().optional(),
    gameType: z.enum(GameTypeArray).array().optional(),
})

export type LobbyFiltersModel = z.infer<typeof lobbyFiltersSchema>

export const defaultLobbyFilters: LobbyFiltersModel = {
    search: "",
    gameType: [],
}
