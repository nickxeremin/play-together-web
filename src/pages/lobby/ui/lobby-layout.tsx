import { Outlet } from "react-router"

function LobbyLayout() {
    return (
        <div className="relative flex size-full flex-col">
            <Outlet />
        </div>
    )
}

export default LobbyLayout
