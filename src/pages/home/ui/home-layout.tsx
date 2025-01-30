import { Outlet } from "react-router"

function HomeLayout() {
    return (
        <div className="relative flex size-full flex-col">
            <Outlet />
        </div>
    )
}

export default HomeLayout
