import AliasPreviewCard from "@/refactor/preview-card"
import { IconChevronLeft } from "@tabler/icons-react"
import { Link } from "react-router"

import { cn } from "@/shared/lib/utils"
import { buttonVariants } from "@/shared/ui/button"

function GamesPage() {
    return (
        <div className="relativ flex size-full flex-col gap-6 p-6">
            <div className="flex items-center gap-2">
                <Link
                    to="/"
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            size: "icon-lg",
                        })
                    )}
                >
                    <IconChevronLeft strokeWidth={3} className="size-8" />
                </Link>

                <div className="flex flex-col">
                    <h1 className="text-[4rem] font-extrabold leading-none text-brand-title">
                        Игротека
                    </h1>
                    <p></p>
                </div>
            </div>

            <div className="w-full rounded-full border-2 border-dashed" />

            <div className="grid w-full grid-cols-3 gap-8">
                <AliasPreviewCard />
            </div>
        </div>
    )
}

export default GamesPage
