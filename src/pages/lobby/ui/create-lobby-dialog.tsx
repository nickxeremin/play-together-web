import { zodResolver } from "@hookform/resolvers/zod"
import {
    IconLoader,
    IconLoader2,
    IconLoader3,
    IconLoaderQuarter,
} from "@tabler/icons-react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

import { env } from "@/shared/config/env"
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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Loader } from "@/shared/ui/loader"
import { Textarea } from "@/shared/ui/textarea"

import { useCreateLobby } from "../api/create-lobby"
import {
    createLobbySchema,
    CreateLobbyValues,
} from "../model/create-lobby-schema"

type CreateLobbyDialogProps = DialogProps

function CreateLobbyDialog({
    open,
    onOpenChange,
    children,
    ...props
}: CreateLobbyDialogProps) {
    const { t } = useTranslation()

    const [isOpen, setIsOpen] = useDialog({ open, onOpenChange })

    const form = useForm<CreateLobbyValues>({
        resolver: zodResolver(createLobbySchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })

    const { mutate: createLobby, isPending } = useCreateLobby()

    function onSubmit(values: CreateLobbyValues) {
        createLobby({ values })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen} {...props}>
            {children && <DialogTrigger asChild>{children}</DialogTrigger>}

            <DialogContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <DialogHeader>
                            <DialogTitle>
                                {t("lobby.createDialog.title")}
                            </DialogTitle>
                        </DialogHeader>

                        <div className="flex flex-col gap-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t("lobby.createDialog.name.label")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormDescription />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t(
                                                "lobby.createDialog.description.label"
                                            )}
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder=""
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="name"
                                render={() => (
                                    <FormItem>
                                        <FormLabel>
                                            {t("lobby.createDialog.nameField")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="" />
                                        </FormControl>
                                        <FormDescription />
                                    </FormItem>
                                )}
                            /> */}
                        </div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="secondary">
                                    {t("common.cancel")}
                                </Button>
                            </DialogClose>

                            <Button type="submit" disabled={isPending}>
                                <Loader isLoading={isPending} />
                                {t("common.create")}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateLobbyDialog
