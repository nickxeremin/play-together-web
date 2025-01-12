import { useMutation } from "@tanstack/react-query"

import { client } from "@/shared/api/client"

import { CreateLobbyValues } from "../model/create-lobby-schema"

export function useCreateLobby() {
    return useMutation({
        mutationFn: ({ values }: { values: CreateLobbyValues }) =>
            client.post("/lobbies", values),
    })
}
