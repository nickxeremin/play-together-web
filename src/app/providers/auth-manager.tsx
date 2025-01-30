import React from "react"

import { useGuestLogin, useVerifyLogin } from "@/shared/api/auth"
import { useClient } from "@/shared/api/client"
import { ErrorPage } from "@/shared/ui/error"
import { PageLoader } from "@/shared/ui/loader"

import { useAuth } from "./auth"

type AuthManagerProps = {
    children: React.ReactNode
}

function AuthManager({ children }: AuthManagerProps) {
    const hasHydrated = useAuth((store) => store._hasHydrated)
    const token = useAuth((store) => store.token)
    const setToken = useAuth((store) => store.setToken)

    const client = useClient()
    const { mutate: guestLogin } = useGuestLogin({ client })
    const { mutate: verifyLogin } = useVerifyLogin({ client })
    const [hasVerified, setHasVerified] = React.useState(false)
    const [hasGuestLoginError, setHasGuestLoginError] = React.useState(false)

    React.useEffect(() => {
        if (!token) {
            guestLogin(undefined, {
                onSuccess: ({ token }) => {
                    setToken(token)
                },
                onError: () => {
                    setHasGuestLoginError(true)
                },
            })
        } else {
            verifyLogin(undefined, {
                onSuccess: () => {
                    setHasVerified(true)
                },
                onError: () => {
                    setToken(null)
                },
            })
        }
    }, [token])

    if (!hasHydrated) {
        return <PageLoader />
    }

    // if (hasGuestLoginError) {
    //     return <ErrorPage />
    // }

    // if (!hasVerified || !token) {
    //     return <PageLoader />
    // }

    return children
}

export default AuthManager
