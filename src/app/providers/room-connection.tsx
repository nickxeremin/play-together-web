import React from "react"

import { RoomSchema } from "@/shared/model/room"
import { PageLoader } from "@/shared/ui/loader"

import { useSocket } from "./socket"

type RoomConnectionProviderProps = {
    roomId: RoomSchema["id"]
    children: React.ReactNode
}

function RoomConnectionProvider({
    roomId,
    children,
}: RoomConnectionProviderProps) {
    const socket = useSocket()
    const [isConnected, setIsConnected] = React.useState(false)
    const [isError, setIsError] = React.useState(false)

    // * Connect player to socket
    React.useEffect(() => {
        socket.connect()

        return () => {
            socket.disconnect()
        }
    }, [])

    // * Implement room connection logic
    React.useEffect(() => {
        const handleConnect = () => {
            socket.emit(
                "room:join",
                { room_id: roomId },
                (res: { success: boolean }) => {
                    if (res.success) {
                        setIsConnected(true)
                    } else {
                        setIsError(true)
                    }
                }
            )
        }

        const handleDisconnect = () => {
            socket.emit(
                "room:join",
                { room_id: roomId },
                (res: { success: boolean }) => {
                    if (res.success) {
                        setIsConnected(true)
                    } else {
                        setIsError(true)
                    }
                }
            )
        }

        socket.on("connect", handleConnect)

        return () => {
            socket.off("connect", handleConnect)
        }
    }, [roomId])

    if (isError) {
        return <div>Error connecting to the server. Please try again.</div>
    }

    if (!isConnected) {
        return <PageLoader />
    }

    return children
}

export default RoomConnectionProvider
