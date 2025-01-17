import React from "react"
import { Outlet } from "react-router"

import { client } from "@/shared/api/client"

function HomeLayout() {
    React.useEffect(() => {
        async function testGuestLogin() {
            const response = await client.post(
                "/auth/login",
                {
                    username: "Test_Username_123",
                },
                {
                    withCredentials: true,
                }
            )

            console.log({ response })
        }

        testGuestLogin()
    }, [])

    return (
        <div className="relative flex size-full flex-col">
            <Outlet />
        </div>
    )
}

export default HomeLayout
