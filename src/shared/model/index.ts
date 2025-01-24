import { Socket } from "socket.io-client"

import { RoomClientToServerEvents, RoomServerToClientEvents } from "./room"

type BaseServerToClientEvents = {
    reconnect: () => void
    reconnect_attemp: (attempNumber: number) => void
}

type ServerToClientEvents = RoomServerToClientEvents & BaseServerToClientEvents

type ClientToServerEvents = RoomClientToServerEvents

export type BaseSocket = Socket<ServerToClientEvents, ClientToServerEvents>
