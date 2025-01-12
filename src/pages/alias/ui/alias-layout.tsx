import { Outlet } from "react-router"

function AliasLayout() {
    return (
        <div className="relative flex size-full flex-col">
            <Outlet />

            <div className="absolute -z-10 size-full bg-[url('/src/assets/images/bg-dots.png')] bg-repeat opacity-5" />

            <div className="absolute bottom-0 left-0 -z-20 h-[320px] w-full">
                <div className="absolute size-full bg-[url('/src/assets/images/dots.svg')]" />

                <div className="absolute size-full bg-gradient-to-b from-neutral-950 to-transparent" />
            </div>
        </div>
    )
}

export default AliasLayout
