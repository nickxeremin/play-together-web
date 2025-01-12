import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router"

import AllRoutes from "./routes"

import "./i18n"
import "./globals.css"

import ReactQueryProvider from "./providers/react-query-provider"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ReactQueryProvider>
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    </ReactQueryProvider>
)
