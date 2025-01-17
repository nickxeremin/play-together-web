import { z } from "zod"

import { aliasGameSettingsSchema } from "./game-settings"
import { aliasPlayerSchema } from "./player"
import { aliasTeamSchema } from "./team"

export const createAliasGameSchema = aliasGameSettingsSchema
    .omit({ id: true })
    .extend({
        leader: aliasPlayerSchema.omit({ id: true }),
        teams: aliasTeamSchema.omit({ id: true, teammates: true }).array(),
    })

export type CreateAliasGameValues = z.infer<typeof createAliasGameSchema>

export const defaultCreateAliasGameValues: Partial<CreateAliasGameValues> = {
    teams: [{ name: "Лесные эльфы" }],

    loseOnSkip: false,
    timeToMove: 60,
}
