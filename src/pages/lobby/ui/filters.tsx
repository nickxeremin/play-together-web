import { useSearchParams } from "react-router"

import {
    defaultLobbyFilters,
    LobbyFiltersModel,
    lobbyFiltersSchema,
} from "../model/filters-schema"
import FiltersGameType from "./filters-game-type"
import FiltersSearchbar from "./filters-searchbar"

function Filters() {
    const [searchParams, setSearchParams] = useSearchParams()

    let filters: LobbyFiltersModel = defaultLobbyFilters

    const { data, success } = lobbyFiltersSchema.safeParse(
        Object.fromEntries(searchParams.entries())
    )

    if (success) filters = data
    else setSearchParams(defaultLobbyFilters)

    return (
        <div className="flex flex-col gap-4">
            <FiltersSearchbar />
            <FiltersGameType />
        </div>
    )
}

export default Filters
