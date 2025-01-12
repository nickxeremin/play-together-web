import axios from "axios"

import { env } from "../config/env"

export const client = axios.create({
    baseURL: env.SERVER_URL,
})
