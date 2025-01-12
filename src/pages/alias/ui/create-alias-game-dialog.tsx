import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

import { Button } from "@/shared/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogProps,
    DialogTitle,
    DialogTrigger,
    useDialog,
} from "@/shared/ui/dialog"
import { Form } from "@/shared/ui/form"

import {
    createAliasGameSchema,
    CreateAliasGameValues,
} from "../model/create-game-schema"
import { defaultAliasGameSettings } from "../model/game-settings-schema"

type CreateAliasGameDialogProps = DialogProps

function CreateAliasGameDialog({
    open,
    onOpenChange,
    children,
    ...props
}: CreateAliasGameDialogProps) {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useDialog({ open, onOpenChange })

    const user = { id: "test_id", name: "test_name" }

    const form = useForm<CreateAliasGameValues>({
        resolver: zodResolver(createAliasGameSchema),
        defaultValues: defaultAliasGameSettings(user),
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "teams",
    })

    async function onSubmit(values: CreateAliasGameValues) {}

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen} {...props}>
            {children && <DialogTrigger asChild>{children}</DialogTrigger>}

            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>
                                {t("games.alias.createDialog.title")}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="flex flex-col gap-2"></div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="secondary">
                                    {t("common.cancel")}
                                </Button>
                            </DialogClose>

                            <Button type="submit">{t("common.create")}</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAliasGameDialog
