import ruImgSrc from "@/assets/images/russia.png"
import enImgSrc from "@/assets/images/united-kingdom.png"

export type Locale = "en" | "ru"

export const locales: {
    [key in Locale]: {
        name: string
        value: string
    }
} = {
    en: {
        value: "en",
        name: "English",
    },
    ru: {
        value: "ru",
        name: "Русский",
    },
}

export const localeOptions: {
    [key in Locale]: {
        value: Locale
        name: string
        imgSrc: string
    }
} = {
    ru: {
        value: "ru",
        name: "Русский",
        imgSrc: ruImgSrc,
    },
    en: {
        value: "en",
        name: "English",
        imgSrc: enImgSrc,
    },
}
