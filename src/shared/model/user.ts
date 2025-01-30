import { z } from "zod"

import bearImage from "@/assets/images/avatars/bear.png"
import dogImage from "@/assets/images/avatars/dog.png"
import gorillaImage from "@/assets/images/avatars/gorilla.png"
import meerkatImage from "@/assets/images/avatars/meerkat.png"
import pandaImage from "@/assets/images/avatars/panda.png"
import sealionImage from "@/assets/images/avatars/sea-lion.png"

export const avatars = {
    bear: bearImage,
    dog: dogImage,
    gorilla: gorillaImage,
    meerkat: meerkatImage,
    panda: pandaImage,
    sealion: sealionImage,
} as const

export type AvatarValue = keyof typeof avatars

export const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    avatar: z.enum(["bear", "dog", "gorilla", "meerkat", "panda", "sealion"]),
})

export type UserSchema = z.infer<typeof userSchema>

export const updateUserSchema = z.object({
    avatar: z.string(),
    name: z.string(),
})

export type UpdateUserSchema = z.infer<typeof updateUserSchema>
