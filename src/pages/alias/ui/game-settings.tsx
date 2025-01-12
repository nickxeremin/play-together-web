import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form } from "@/shared/ui/form"

import {
    AliasGameSettingsModel,
    aliasGameSettingsSchema,
    defaultAliasGameSettings,
} from "../model/game-settings-schema"

function GameSettings() {
    const user = { id: "test_id", name: "test_name" }

    const form = useForm<AliasGameSettingsModel>({
        resolver: zodResolver(aliasGameSettingsSchema),
        defaultValues: defaultAliasGameSettings(user),
    })

    async function onSubmit(values: AliasGameSettingsModel) {}

    return (
        <Form {...form}>
            <form
                className="relative w-full max-w-xl rounded-xl border-2 bg-neutral-900"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="absolute size-full bg-[url('/src/assets/images/bg-dots.png')] opacity-5" />

                <div className="relative flex h-[400px] flex-col p-6">
                    <h3 className="text-[2rem] font-bold leading-none text-brand-title">
                        Игровые настройки
                    </h3>
                </div>
            </form>
        </Form>
    )
}

export default GameSettings
