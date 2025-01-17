import { z } from "zod"

import { aliasPlayerSchema } from "./player"
import { aliasTeamSchema } from "./team"

export const aliasGameSettingsSchema = z.object({
    id: z.string(),
    leader: aliasPlayerSchema,
    teams: aliasTeamSchema.array(),

    loseOnSkip: z.boolean(),
    timeToMove: z.number().min(30).max(120),
})

export type AliasGameSettingsModel = z.infer<typeof aliasGameSettingsSchema>
