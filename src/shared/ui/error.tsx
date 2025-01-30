import { IconBugFilled, IconExclamationCircle } from "@tabler/icons-react"

import { Button } from "./button"

function ErrorPage() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex flex-col items-center gap-6 rounded-md bg-popover p-10">
                <IconBugFilled strokeWidth={3} className="size-16 text-brand" />

                <p className="text-[1.25rem] font-medium">
                    Error occured, please reload the page
                </p>

                <Button variant="secondary">Reload page</Button>
            </div>
        </div>
    )
}

export { ErrorPage }
