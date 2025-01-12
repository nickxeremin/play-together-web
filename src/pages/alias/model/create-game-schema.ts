import { z } from "zod"

import { aliasGameSettingsSchema } from "./game-settings-schema"

export const createAliasGameSchema = aliasGameSettingsSchema

export type CreateAliasGameValues = z.infer<typeof createAliasGameSchema>
