import { socketManager } from "@/shared/api"

import { AliasSocket } from "../model"

export const aliasSocket: AliasSocket = socketManager.socket("/alias")

export { useCreateAliasRoom } from "./room"
