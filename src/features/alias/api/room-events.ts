import { aliasSocket } from "."
import { ServerToClientEvents } from "../model"
import {
    RoomClientToServerEvents,
    RoomServerToClientEvents,
} from "../model/room-events"

export const aliasRoomEmitEvents: RoomClientToServerEvents = {
    "room:join": () => {},
    "room:leave": () => {},
}

export function registerAliasRoomHandlers() {
    const events: RoomServerToClientEvents = {
        "room:join": (roomId) => {
            console.log("Server: user joined room: ", roomId)
        },
        "room:leave": (roomId) => {
            console.log("Server: user disconnected room: ", roomId)
        },
    }

    Object.entries(events).forEach(([event, handler]) => {
        aliasSocket.on(event as keyof ServerToClientEvents, handler)
    })
}
