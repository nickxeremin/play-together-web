import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosInstance } from "axios"

import { useAuth } from "@/app/providers/auth"

import { MutationParams, QueryParams } from "../model"
import { authTokenSchema } from "../model/auth"
import { UpdateUserSchema, userSchema } from "../model/user"

export function useUser({ client }: QueryParams) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () =>
      client.get("/auth/get-user").then(({ data }) =>
        userSchema.parse({
          ...data,
          avatar: "bear",
        })
      ),
  })
}

export function useUpdateUser({ client }: MutationParams) {
  const setToken = useAuth((store) => store.setToken)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (values: UpdateUserSchema) =>
      client
        .patch("/users", values)
        .then(({ data }) => authTokenSchema.parse(data)),
    onSuccess: ({ token }) => {
      setToken(token)
      return queryClient.invalidateQueries({ queryKey: ["user"] })
    },
  })
}
