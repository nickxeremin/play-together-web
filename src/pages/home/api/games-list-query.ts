import { queryOptions } from "@tanstack/react-query"

import { sleep } from "@/shared/lib/utils"

export function gamesListQuery() {
    return queryOptions({
        //queryKey: gameKeys.all,
        queryKey: ["games"],
        queryFn: async () => {
            await sleep(1)

            return [
                {
                    name: "Codenames",
                },
            ]
        },
    })
}
