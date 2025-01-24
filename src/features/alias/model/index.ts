import { Socket } from "socket.io-client"

import { BaseSocket } from "@/shared/model"

import { RoomClientToServerEvents, RoomServerToClientEvents } from "./room"

export type ServerToClientEvents = RoomServerToClientEvents
export type ClientToServerEvents = RoomClientToServerEvents

export type AliasSocket = Socket<ServerToClientEvents, ClientToServerEvents> &
    BaseSocket

export {
    aliasRoomSchema,
    type AliasRoom,
    createAliasRoomSchema,
    type CreateAliasRoomValues,
} from "./room"
