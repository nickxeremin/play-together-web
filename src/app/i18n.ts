import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { resources } from "@/shared/config/i18n"

i18n.use(initReactI18next).init({
    lng: "ru",
    fallbackLng: "en",
    resources,
})

export default i18n
