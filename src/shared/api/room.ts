import { useMutation } from "@tanstack/react-query"

import { BaseSocket } from "../model"
import { CreateRoomSchema, roomSchema } from "../model/room"
import { client } from "./client"

type ConnectRoom = {
    socket: BaseSocket
    roomId: string
    onConnect?: () => void
    onError?: () => void
}

export function connectRoom({
    socket,
    roomId,
    onConnect = () => {},
    onError = () => {},
}: ConnectRoom) {
    socket.emit("room:join", { room_id: roomId }, (res) => {
        if (res.success) {
            onConnect()
        } else {
            onError()
        }
    })
}

type RegisterReconnectionRoomHandlers = ConnectRoom

export function registerReconnectionRoomHandlers({
    socket,
    roomId,
    onConnect,
    onError,
}: RegisterReconnectionRoomHandlers) {
    socket.on("reconnect", () => {
        console.log("Reconnected successfully")
        connectRoom({ socket, roomId, onConnect, onError })
    })

    socket.on("reconnect_attemp", (attemptNumber) => {
        console.log(`Reconnection attempt #${attemptNumber}`)
    })

    return () => {
        socket.off("reconnect")
        socket.off("reconnect_attemp")
    }
}

export function useCreateRoom() {
    return useMutation({
        mutationFn: (values: CreateRoomSchema) =>
            client
                .post("/rooms", values)
                .then(({ data }) => roomSchema.parse(data)),
    })
}
