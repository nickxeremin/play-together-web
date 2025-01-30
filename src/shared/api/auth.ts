import { useMutation } from "@tanstack/react-query"
import { AxiosInstance } from "axios"

import { guestLoginResponseSchema } from "../model/auth"

export function useGuestLogin({ client }: { client: AxiosInstance }) {
    return useMutation({
        mutationFn: () =>
            client
                .post("/auth/guest-login")
                .then(({ data }) => guestLoginResponseSchema.parse(data)),
    })
}

export function useVerifyLogin({ client }: { client: AxiosInstance }) {
    return useMutation({
        mutationFn: () => client.get("/auth/verify-login"),
    })
}
