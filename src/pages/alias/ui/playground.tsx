import React from "react"
import { useParams } from "react-router"
import { Manager } from "socket.io-client"

import { onConnection } from "@/features/alias/api"
import { AliasSocket } from "@/features/alias/model"
import { env } from "@/shared/config/env"
import { Button } from "@/shared/ui/button"

const manager = new Manager(env.SERVER_URL, {
    autoConnect: false,
})

const socket = manager.socket("/") as AliasSocket

function AliasPlaygroundPage() {
    const { sessionId } = useParams()

    React.useEffect(() => {
        socket.connect()

        socket.on("connect", () => {
            onConnection(socket)
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <div>
            <Button onClick={() => socket.emit("acceptWord")}>
                Accept word
            </Button>
        </div>
    )
}

export default AliasPlaygroundPage
