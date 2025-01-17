export type RoomServerToClientEvents = {
    "room:join": (roomId: string) => void
    "room:leave": (roomId: string) => void
}

export type RoomClientToServerEvents = {
    "room:join": () => void
    "room:leave": () => void
}
