import { TranslationModel } from "."

declare module "i18next" {
    interface CustomTypeOptions {
        resources: TranslationModel
    }
}
