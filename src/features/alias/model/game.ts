export type GameSessionServerToClientEvents = {
    gameSessionCreated: (sessionId: string) => void
    gameSessionUpdated: (session: string) => void
}

export type GameSessionClientToServerEvnets = {
    startRound: () => void
    acceptWord: () => void
    skipWord: () => void
    patchWords: () => void
}
