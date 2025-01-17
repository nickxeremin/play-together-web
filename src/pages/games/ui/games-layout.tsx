import { Outlet } from "react-router"

function GamesLayout() {
    return (
        <div className="relative flex size-full flex-col">
            <Outlet />
        </div>
    )
}

export default GamesLayout
