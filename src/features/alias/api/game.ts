import { AliasSocket } from "../model"

export function registerGameHandlers(socket: AliasSocket) {
    socket.on("session", (session) => {
        console.log({ session })
    })
}
