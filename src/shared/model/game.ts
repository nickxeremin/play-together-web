import { z } from "zod"

export const GameTypeArray = ["codenames", "alias"] as const
export type GameType = (typeof GameTypeArray)[number]

export const createGameSchema = z.object({
    type: z.enum(GameTypeArray),
})
