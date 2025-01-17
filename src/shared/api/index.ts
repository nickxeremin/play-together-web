import { Manager } from "socket.io-client"

import { env } from "../config/env"

export const socketManager = new Manager(env.SERVER_URL, {
    autoConnect: false,
})
