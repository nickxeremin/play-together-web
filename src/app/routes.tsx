import { Route, Routes } from "react-router"

import AliasLayout from "@/pages/alias/ui/layout"
import AliasPage from "@/pages/alias/ui/page"
import AliasPlaygroundPage from "@/pages/alias/ui/playground-page"
import GamesLayout from "@/pages/games/ui/games-layout"
import GamesPage from "@/pages/games/ui/games-page"
import HomeLayout from "@/pages/home/ui/home-layout"
import HomePage from "@/pages/home/ui/home-page"
import LobbyLayout from "@/pages/lobby/ui/lobby-layout"
import LobbyPage from "@/pages/lobby/ui/lobby-page"

import RootLayout from "./layout"

function AllRoutes() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<HomePage />} />
                </Route>

                <Route path="/games" element={<GamesLayout />}>
                    <Route index element={<GamesPage />} />
                </Route>

                <Route path="/lobby" element={<LobbyLayout />}>
                    <Route index element={<LobbyPage />} />
                </Route>

                <Route path="/alias" element={<AliasLayout />}>
                    <Route index element={<AliasPage />} />

                    <Route
                        path=":sessionId"
                        element={<AliasPlaygroundPage />}
                    />
                </Route>
            </Route>
        </Routes>
    )
}

export default AllRoutes
