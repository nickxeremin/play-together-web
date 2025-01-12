import { useSearchParams } from "react-router"

import {
    defaultLobbyFilters,
    LobbyFiltersModel,
    lobbyFiltersSchema,
} from "./filters-schema"

export function useLobbyFilters() {
    const [searchParams, setSearchParams] = useSearchParams()

    let filters: LobbyFiltersModel = defaultLobbyFilters

    const { data, success } = lobbyFiltersSchema.safeParse(
        Object.fromEntries(searchParams.entries())
    )

    if (success) filters = data
    else setSearchParams({})

    function setFilters(filters: LobbyFiltersModel) {
        setSearchParams((prev) => ({
            ...prev,
            some: ["codenames", "alias"],
        }))
    }

    return {
        filters,
        setFilters,
    }
}
