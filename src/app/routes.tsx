import { Route, Routes } from "react-router"

import AliasLayout from "@/pages/alias/ui/layout"
import AliasPlaygroundPage from "@/pages/alias/ui/playground"
import AliasSettingsPage from "@/pages/alias/ui/settings"

import RootLayout from "./layout"
import AuthManager from "./providers/auth-manager"

function AllRoutes() {
    return (
        <Routes>
            <Route
                element={
                    <AuthManager>
                        <RootLayout />
                    </AuthManager>
                }
            >
                <Route path="/alias" element={<AliasLayout />}>
                    <Route index element={<AliasSettingsPage />} />

                    <Route path=":roomId" element={<AliasPlaygroundPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AllRoutes
