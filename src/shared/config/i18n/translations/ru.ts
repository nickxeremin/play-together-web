import { TranslationModel } from ".."

export const ru: TranslationModel = {
    translation: {
        common: {
            cancel: "Отмена",
            create: "Создать",
        },
        home: {
            games: {
                title: "Коллекция игр",
                description:
                    "Здесь собраны разнообразные игры, идеально подходящие для весёлого времяпрепровождения с друзьями. Выбирайте, играйте и наслаждайтесь вместе!",
            },
            lobby: {
                title: "Лобби",
                description:
                    "Создайте собственное лобби, приглашайте друзей или присоединяйтесь к уже существующим играм. Ваша идеальная команда ждёт вас!",
            },
        },
        lobby: {
            title: "Лобби",
            createDialog: {
                title: "Создать лобби",
                name: {
                    label: "Название",
                    placeholder: "",
                },
                description: {
                    label: "Описание",
                    placeholder: "",
                },
                gameType: {
                    label: "",
                    placeholder: "",
                },
                // descriptionLabel: "Описание",
                // gameTypeField: "Игра",
            },
            filters: {
                searchPlaceholder: "Введите название...",
            },
        },
        games: {
            alias: {
                createDialog: {
                    title: "Элиас",
                },
                preview: {
                    title: "Элиас",
                    description:
                        "Командная игра, где нужно объяснять слова партнёрам без однокоренных, зарабатывая очки. Подходит для вечеринок и развивает общение и воображение.",
                },
            },
        },
    },
}
