import { z } from "zod"

export const gameOptionsSchema = z.object({
    name: z.string(),
})

export type GameOptionsModel = z.infer<typeof gameOptionsSchema>
