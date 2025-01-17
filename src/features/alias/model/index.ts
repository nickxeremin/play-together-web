import { Socket } from "socket.io-client"

import {
    GameSessionClientToServerEvnets,
    GameSessionServerToClientEvents,
} from "./game"

export type ServerToClientEvents = GameSessionServerToClientEvents
export type ClientToServerEvents = GameSessionClientToServerEvnets

export type AliasSocket = Socket<ServerToClientEvents, ClientToServerEvents>
