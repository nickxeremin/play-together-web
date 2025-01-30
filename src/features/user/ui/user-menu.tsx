import React from "react"

import { useClient } from "@/shared/api/client"
import { useUser } from "@/shared/api/user"
import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/shared/ui/dialog"

import UpdateUserForm from "./update-user"

function UserMenu() {
    const client = useClient()
    const { data: user } = useUser({ client })

    if (!user) {
        return null
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="none"
                    className="h-12 gap-2 rounded px-3"
                >
                    <span className="size-8 rounded-full bg-blue-600" />

                    <span>{user.name}</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
                <UpdateUserForm />
            </DialogContent>
        </Dialog>
    )
}

export default UserMenu
