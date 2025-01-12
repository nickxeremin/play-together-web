import { Outlet } from "react-router"

function LobbyLayout() {
    return (
        <div className="relative flex size-full flex-col">
            <Outlet />

            <div className="absolute -z-10 size-full bg-[url('/src/assets/images/bg-dots.png')] bg-[length:15%_15%] bg-repeat opacity-5" />
        </div>
    )
}

export default LobbyLayout
