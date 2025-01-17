import { socketManager } from "@/shared/api"

import { AliasSocket } from "../model"

export const aliasSocket: AliasSocket = socketManager.socket("/alias")

export { aliasRoomEmitEvents } from "./room-events"
