import { Locale } from "./locales"
import { en } from "./translations/en"
import { ru } from "./translations/ru"

export type TranslationModel = {
    translation: {
        common: {
            cancel: string
            create: string
        }
        home: {
            games: {
                title: string
                description: string
            }
            lobby: {
                title: string
                description: string
            }
        }
        lobby: {
            title: string
            createDialog: {
                title: string
                name: {
                    label: string
                    placeholder: string
                }
                description: {
                    label: string
                    placeholder: string
                }
                gameType: {
                    label: string
                    placeholder: string
                }
            }
            filters: {
                searchPlaceholder: string
            }
        }
        games: {
            alias: {
                createDialog: {
                    title: string
                }
                preview: {
                    title: string
                    description: string
                }
            }
        }
    }
}

export type Resources = { [key in Locale]: TranslationModel }
export const resources: Resources = {
    ru,
    en,
}
