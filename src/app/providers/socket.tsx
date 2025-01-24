import React from "react"
import { Socket } from "socket.io-client"
import { createStore, StoreApi, useStore } from "zustand"

import { socketManager } from "@/shared/api"

type SocketStore = {
    socket: Socket
}

function createSocketStore(nsp: string) {
    const socket = socketManager.socket(nsp)

    return createStore<SocketStore>()(() => ({
        socket,
    }))
}

const SocketContext = React.createContext<StoreApi<SocketStore> | null>(null)

type SocketProviderProps = {
    nsp: string
    children: React.ReactNode
}

function SocketProvider({ nsp, children }: SocketProviderProps) {
    const storeRef = React.useRef<StoreApi<SocketStore>>()

    if (!storeRef.current) {
        storeRef.current = createSocketStore(nsp)
    }

    return (
        <SocketContext.Provider value={storeRef.current}>
            {children}
        </SocketContext.Provider>
    )
}

function useSocket<TSocket extends Socket>(): TSocket {
    const context = React.useContext(SocketContext)

    if (!context) {
        throw new Error(`useSocket must be used within SocketProvider`)
    }

    return useStore(context, (store) => store.socket) as TSocket
}

export { SocketProvider, useSocket }
