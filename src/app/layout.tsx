import { Outlet } from "react-router"

import Header from "@/widgets/layout/ui/header"

function RootLayout() {
    return (
        <div className="relative flex min-h-screen w-screen max-w-[100vw] flex-col overflow-x-hidden">
            <div className="flex h-screen flex-col bg-neutral-950">
                <Header />

                <main className="flex h-full flex-col">
                    <Outlet />
                </main>
            </div>

            <footer className="h-24 border-t bg-black"></footer>
        </div>
    )
}

export default RootLayout
