import { AliasSocket } from "../model"
import { registerGameHandlers } from "./game"

export function onConnection(socket: AliasSocket) {
    registerGameHandlers(socket)
}
