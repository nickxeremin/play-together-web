import { Outlet } from "react-router"

import { BackgroundDottedPattern2 } from "@/shared/ui/background"

function AliasLayout() {
    return (
        <div className="relative flex flex-grow flex-col">
            <Outlet />

            <BackgroundDottedPattern2 className="h-2/5" />
        </div>
    )
}

export default AliasLayout
