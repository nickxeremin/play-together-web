import { Socket } from "socket.io-client"

import { BaseSocket } from "@/shared/model"

export type ServerToClientEvents = {}
export type ClientToServerEvents = {}

export type AliasSocket = Socket<ServerToClientEvents, ClientToServerEvents> &
    BaseSocket
