import { Outlet } from "react-router"

import { SocketProvider } from "@/app/providers/socket"

function AliasLayout() {
    return (
        <SocketProvider nsp="/alias">
            <div className="relative flex flex-grow flex-col">
                <Outlet />
            </div>
        </SocketProvider>
    )
}

export default AliasLayout
