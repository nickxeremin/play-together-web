import { IconChevronLeft } from "@tabler/icons-react"
import { Link } from "react-router"

import UserMenu from "@/features/user/ui/user-menu"
import { cn } from "@/shared/lib/utils"
import { buttonVariants } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"

type HeaderProps = {
    backUrl: string
    title: string
}

function Header({ backUrl, title }: HeaderProps) {
    return (
        <header className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link
                        to={backUrl}
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
                            {title}
                        </h1>
                    </div>
                </div>

                <UserMenu />
            </div>

            <Separator />
        </header>
    )
}

export default Header
