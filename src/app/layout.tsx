import { Outlet } from "react-router"

import Footer from "@/widgets/layout/ui/footer"

function RootLayout() {
    return (
        <div className="relative flex h-full w-screen max-w-[100vw] flex-col overflow-x-hidden">
            <div className="flex min-h-screen flex-col">
                <main className="relative flex flex-grow flex-col">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default RootLayout
