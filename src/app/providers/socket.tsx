import React from "react"
import { Socket } from "socket.io-client"
import { createStore, StoreApi, useStore } from "zustand"

import { socketManager } from "@/shared/api"
import { PageLoader } from "@/shared/ui/loader"

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
  const [isConnected, setIsConnected] = React.useState(false)

  if (!storeRef.current) {
    storeRef.current = createSocketStore(nsp)
  }

  React.useEffect(() => {
    if (!storeRef.current) return

    const { socket } = storeRef.current.getState()

    socket.connect()

    socket.on("connect", () => setIsConnected(true))
    socket.on("disconnect", () => setIsConnected(false))

    return () => {
      socket.disconnect()
    }
  }, [storeRef.current])

  if (!isConnected) {
    return <PageLoader />
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
