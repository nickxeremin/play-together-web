import { z } from "zod"

export const roomSchema = z.object({
    id: z.string(),
})

export type RoomSchema = z.infer<typeof roomSchema>

export const createRoomSchema = z.object({})

export type CreateRoomSchema = z.infer<typeof createRoomSchema>

export type RoomServerToClientEvents = {
    "room:join": () => void
    "room:leave": () => void
}

export type RoomClientToServerEvents = {
    "room:join": (
        { room_id }: { room_id: string },
        ack: (response: { success: boolean }) => void
    ) => void
    "room:leave": ({ room_id }: { room_id: string }) => void
}
