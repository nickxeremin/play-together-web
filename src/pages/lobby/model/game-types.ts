import { GameType } from "@/shared/model/game"

type GameTypeOption = {
    value: GameType
    name: string
}

export const gameTypeOptions: {
    [key in GameType]: GameTypeOption
} = {
    codenames: {
        value: "codenames",
        name: "Codenames",
    },
    alias: {
        value: "alias",
        name: "Alias",
    },
}
