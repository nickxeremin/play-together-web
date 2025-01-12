import { IconSearch } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

import { useLobbyFilters } from "../model/use-lobby-filters"

function FiltersSearchbar() {
    const { t } = useTranslation()
    const { filters, setFilters } = useLobbyFilters()

    return (
        <div className="flex flex-col gap-2">
            {/* <div className="font-medium text-slate-300">Search room</div> */}

            <div className="flex h-12 w-full items-center rounded-md border-2 focus-within:ring-2 focus-within:ring-offset-2">
                <span className="inline-flex h-full w-12 items-center justify-center">
                    <IconSearch className="text-slate-400" />
                </span>

                <input
                    placeholder={t("lobby.filters.searchPlaceholder")}
                    className="size-full flex-1 bg-transparent font-medium outline-none placeholder:text-slate-400"
                    value={filters.search || ""}
                    onChange={(e) => {
                        setFilters({ search: e.currentTarget.value })
                    }}
                />
            </div>
        </div>
    )
}

export default FiltersSearchbar
