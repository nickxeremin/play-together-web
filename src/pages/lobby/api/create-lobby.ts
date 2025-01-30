import { useMutation } from "@tanstack/react-query"
import { AxiosInstance } from "axios"

import { CreateLobbyValues } from "../model/create-lobby-schema"

export function useCreateLobby({ client }: { client: AxiosInstance }) {
    return useMutation({
        mutationFn: ({ values }: { values: CreateLobbyValues }) =>
            client.post("/lobbies", values),
    })
}
