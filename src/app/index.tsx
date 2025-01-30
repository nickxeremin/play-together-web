import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router"

import AllRoutes from "./routes"

import "./i18n"
import "./globals.css"

import { AuthProvider } from "./providers/auth"
import ReactQueryProvider from "./providers/react-query"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <ReactQueryProvider>
            <BrowserRouter>
                <AllRoutes />
            </BrowserRouter>
        </ReactQueryProvider>
    </AuthProvider>
)
