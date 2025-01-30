import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            retry: 3,
            retryDelay: (attempt) => attempt * 1000,
        },
    },
})

type ReactQueryProviderProps = {
    children: React.ReactNode
}

function ReactQueryProvider({ children }: ReactQueryProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider
