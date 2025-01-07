import { queryOptions } from "@tanstack/react-query"

import { sleep } from "@/shared/lib/utils"
import { gameKeys } from "@/shared/model/game-keys"
import { GameOptionsModel } from "@/shared/model/game-options"

export function gamesListQuery() {
    return queryOptions({
        queryKey: gameKeys.all,
        queryFn: async () => {
            await sleep(1)

            return [
                {
                    name: "Codenames",
                },
            ] satisfies GameOptionsModel[]
        },
    })
}
