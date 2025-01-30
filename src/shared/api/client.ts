import React from "react"
import axios from "axios"

import { useAuth } from "@/app/providers/auth"

import { env } from "../config/env"

export function useClient() {
    const token = useAuth((store) => store.token)
    const setToken = useAuth((store) => store.setToken)

    const client = React.useMemo(() => {
        const client = axios.create({
            baseURL: env.SERVER_URL,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        client.interceptors.response.use(
            (response) => {
                if (response.status == 401) {
                    setToken(null)
                }

                return response
            },
            (error) => Promise.reject(error)
        )

        return client
    }, [token])

    return client
}
