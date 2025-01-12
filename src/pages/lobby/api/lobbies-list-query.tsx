import { queryOptions } from "@tanstack/react-query"

import { client } from "@/shared/api/client"
import { lobbyKeys } from "@/shared/model/lobby-keys"

import { lobbySchema } from "../model/lobby-schema"

export function lobbiesListQuery() {
    return queryOptions({
        queryKey: lobbyKeys.all,
        queryFn: () =>
            client
                .get("/lobbies")
                .then(({ data }) => lobbySchema.array().parse(data.data)),
    })
}
