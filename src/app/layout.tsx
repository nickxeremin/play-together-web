import { Outlet } from "react-router"

import Footer from "@/widgets/layout/ui/footer"
import Header from "@/widgets/layout/ui/header"

function RootLayout() {
    return (
        <div className="relative flex min-h-screen w-screen max-w-[100vw] flex-col overflow-x-hidden">
            <div className="flex h-screen flex-col">
                <Header />

                <main className="flex h-full flex-col">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default RootLayout
