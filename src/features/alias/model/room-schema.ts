import { z } from "zod"

export const aliasRoomSchema = z.object({})

export type AliasRoom = z.infer<typeof aliasRoomSchema>

export const createAliasRoomSchema = z.object({})

export type CreateAliasRoomValues = z.infer<typeof createAliasRoomSchema>
