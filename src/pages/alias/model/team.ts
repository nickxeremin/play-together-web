import { z } from "zod"

import { aliasPlayerSchema } from "./player"

export const aliasTeamSchema = z.object({
    id: z.string(),
    name: z.string(),
    teammates: aliasPlayerSchema.array(),
})

export type AliasTeamModel = z.infer<typeof aliasTeamSchema>
