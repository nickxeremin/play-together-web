import { useMutation } from "@tanstack/react-query"

import { client } from "@/shared/api/client"

import { aliasRoomSchema, CreateAliasRoomValues } from "../model"

export function useCreateAliasRoom() {
    return useMutation({
        mutationFn: (values: CreateAliasRoomValues) =>
            client
                .post("/alias/rooms", values)
                .then(({ data }) => aliasRoomSchema.parse(data)),
    })
}
