import { z } from "zod"

export const aliasGameSessionSchema = z.object({})

export type AliasGameSessionModel = z.infer<typeof aliasGameSessionSchema>
