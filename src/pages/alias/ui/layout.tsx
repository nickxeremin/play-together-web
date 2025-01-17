import React from "react"
import { IconLoader2 } from "@tabler/icons-react"
import { Outlet } from "react-router"

import { aliasSocket } from "@/features/alias/api"
import { BackgroundDottedPattern2 } from "@/shared/ui/background"

function AliasLayout() {
    const [isConnected, setIsConnected] = React.useState(false)

    /**
     * * When user go to alias pages client connects to server via ws
     */
    React.useEffect(() => {
        aliasSocket.connect()

        aliasSocket.on("connect", () => {
            setTimeout(() => {
                console.log("Server: user connected to alias namespace")

                setIsConnected(true)
            }, 1000)
        })

        aliasSocket.on("disconnect", () => {
            console.log("Server: user disconnected from alias namespace")
        })

        return () => {
            aliasSocket.disconnect()
        }
    }, [])

    if (!isConnected) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <IconLoader2
                    strokeWidth={3}
                    className="size-12 animate-spin text-brand"
                />
            </div>
        )
    }

    return (
        <div className="relative flex flex-grow flex-col">
            <Outlet />

            <BackgroundDottedPattern2 className="h-2/5" />
        </div>
    )
}

export default AliasLayout
