import { Manager } from "socket.io-client"

import { env } from "../config/env"

export const socketManager = new Manager(env.SERVER_URL, {
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 2000,
})

export { connectRoom } from "./room"
