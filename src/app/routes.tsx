import { Route, Routes } from "react-router"

import LobbyPage from "@/pages/lobby/ui/lobby-page"

import RootLayout from "./layout"

function AllRoutes() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<LobbyPage />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes
