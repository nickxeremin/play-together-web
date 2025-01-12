import React from "react"
import { useTranslation } from "react-i18next"

import { localeOptions, locales } from "@/shared/config/i18n/locales"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui/select"

function LanguageSelect() {
    const { i18n } = useTranslation()

    return (
        <Select
            onValueChange={(value) => i18n.changeLanguage(value)}
            defaultValue={i18n.language}
        >
            <SelectTrigger className="w-fit">
                <SelectValue placeholder="" />
            </SelectTrigger>

            <SelectContent align="start">
                {Object.values(localeOptions).map((locale) => (
                    <SelectItem key={locale.value} value={locale.value}>
                        <div className="flex items-center gap-2 font-medium">
                            <img
                                src={locale.imgSrc}
                                alt=""
                                className="size-4"
                            />
                            {locale.name}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default LanguageSelect
