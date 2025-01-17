import { Socket } from "socket.io-client"

import { RoomServerToClientEvents } from "./room-events"

export type ServerToClientEvents = RoomServerToClientEvents
export type ClientToServerEvents = RoomServerToClientEvents

export type AliasSocket = Socket<ServerToClientEvents, ClientToServerEvents>

export {
    aliasRoomSchema,
    createAliasRoomSchema,
    type AliasRoom,
    type CreateAliasRoomValues,
} from "./room-schema"
