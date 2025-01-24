import { useMutation } from "@tanstack/react-query"

import { client } from "@/shared/api/client"

import { aliasSocket } from "."
import { aliasRoomSchema, CreateAliasRoomValues } from "../model"

export function useCreateAliasRoom() {
    return useMutation({
        mutationFn: (values: CreateAliasRoomValues) =>
            client
                .post("/alias/rooms", values)
                .then(({ data }) => aliasRoomSchema.parse(data)),
    })
}

type ConnectRoom = {
    roomId: string
    onConnect?: () => void
}

// export function connectAliasRoom({ roomId, onConnect = () => {} }: ConnectRoom) {
//     aliasSocket.emit("room:join", { room_id: roomId }, (res) => {
//         if (res.success) {
//             onConnect()
//         }
//     })
// }

// export function registerAliasRoomHandlers() {
//     aliasSocket.on("reconnect", () => {
//         connectAliasRoom({roomId})
//     })
// }
