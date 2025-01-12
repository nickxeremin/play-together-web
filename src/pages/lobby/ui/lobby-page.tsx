import { IconChevronLeft, IconPlus } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router"

import { cn } from "@/shared/lib/utils"
import { Button, buttonVariants } from "@/shared/ui/button"
import { GeometricLoader } from "@/shared/ui/loader"

import CreateLobbyDialog from "./create-lobby-dialog"
import Filters from "./filters"

function LobbyPage() {
    const { t, i18n } = useTranslation()
    // const { data: lobbies } = useQuery({ ...lobbiesListQuery() })

    return (
        <div className="relative flex size-full flex-col gap-6 p-6">
            <div className="flex items-center justify-between">
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
                            {t("lobby.title")}
                        </h1>
                        <p></p>
                    </div>
                </div>

                <CreateLobbyDialog>
                    <Button
                        size="icon"
                        variant="outline"
                        className="size-16 rounded-full border-4 border-dashed !bg-transparent hover:border-brand"
                    >
                        <IconPlus
                            strokeWidth={3}
                            className="size-8 text-brand-title"
                        />
                    </Button>
                </CreateLobbyDialog>
            </div>

            <div className="h-0 w-full rounded-full border-2 border-dashed" />

            <div className="grid h-full grid-cols-[320px_4px_1fr] gap-6">
                <Filters />

                <div className="h-full w-0 rounded-full border-2 border-dashed" />

                <div className="flex size-full items-center justify-center">
                    <GeometricLoader
                        isLoading={true}
                        length={20}
                        borderRadius={6}
                    />
                </div>
            </div>
        </div>
    )
}

export default LobbyPage
