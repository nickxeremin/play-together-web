import { z } from "zod"

const basePlayerSchema = z.object({
    id: z.string(),
    name: z.string(),
})

const aliasPlayerSchema = basePlayerSchema.extend({})

type AliasPlayerModel = z.infer<typeof aliasPlayerSchema>

const baseTeamSchema = <T extends typeof basePlayerSchema>(
    playerSchema: T = basePlayerSchema as T
) =>
    z.object({
        id: z.string(),
        name: z.string(),
        color: z.string(),
        members: playerSchema.array(),
    })

const aliasTeamSchema = baseTeamSchema(aliasPlayerSchema).extend({
    master: aliasPlayerSchema.nullable(),
})

export const aliasGameSettingsSchema = z.object({
    leader: aliasPlayerSchema,
    teams: aliasTeamSchema.array(),
    words: z.string().array(),

    loseOnSkip: z.boolean(),
    secondsOnMove: z.number().min(30).max(120),
})

export type AliasGameSettingsModel = z.infer<typeof aliasGameSettingsSchema>

export const defaultAliasGameSettings = (
    creator: AliasPlayerModel
): Partial<AliasGameSettingsModel> => ({
    leader: creator,

    teams: [
        {
            id: "1",
            name: "Лесные эльфы",
            color: "green",
            master: null,
            members: [creator],
        },
    ],
    words: [],

    loseOnSkip: false,
    secondsOnMove: 60,
})
