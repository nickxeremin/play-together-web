import { z } from "zod"

const envSchema = z.object({
    SERVER_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse({
    SERVER_URL: import.meta.env.VITE_SERVER_URL,
})

if (!parsedEnv.success) {
    console.error("Invalid environment variables:", parsedEnv.error.format())
    throw new Error(
        "Invalid environment variables. Please check your .env configuration."
    )
}

export const env = parsedEnv.data
