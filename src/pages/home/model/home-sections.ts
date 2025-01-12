import i18n from "@/app/i18n"

export type HomeSectionModel = {
    name: string
    decription: string
    url: string
    imgSrc: string
}

export const homeSections: HomeSectionModel[] = [
    {
        name: i18n.t("home.games.title"),
        decription: i18n.t("home.games.description"),
        url: "/games",
        imgSrc: "/src/assets/images/game-library.jpg",
    },
    {
        name: i18n.t("home.lobby.title"),
        decription: i18n.t("home.lobby.description"),
        url: "/lobby",
        imgSrc: "/src/assets/images/lobby.jpg",
    },
]
