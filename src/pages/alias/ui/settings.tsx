import { IconChevronLeft } from "@tabler/icons-react"
import { Link } from "react-router"

import { CreateAliasRoomForm } from "@/features/alias/ui"
import { cn } from "@/shared/lib/utils"
import { buttonVariants } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"

function AliasSettingsPage() {
    return (
        <div className="flex flex-grow flex-col gap-4 p-4">
            <div className="flex items-center gap-2">
                <Link
                    to="/"
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            size: "icon",
                        })
                    )}
                >
                    <IconChevronLeft strokeWidth={3} className="size-6" />
                </Link>

                <div className="flex flex-col">
                    <h1 className="text-[3rem] font-extrabold leading-none text-brand-title">
                        Элиас
                    </h1>
                </div>
            </div>

            <Separator />

            <div className="flex flex-grow flex-col items-center justify-center p-4">
                <CreateAliasRoomForm />
            </div>
        </div>
    )
}

export default AliasSettingsPage
