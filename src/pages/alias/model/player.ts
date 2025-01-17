import { z } from "zod"

export const aliasPlayerSchema = z.object({
    id: z.string(),
    name: z.string(),
})

export type AliasPlayerModel = z.infer<typeof aliasPlayerSchema>
