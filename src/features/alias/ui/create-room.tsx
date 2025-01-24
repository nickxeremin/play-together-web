import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Link, useNavigate } from "react-router"

import { useCreateRoom } from "@/shared/api/room"
import { cn } from "@/shared/lib/utils"
import { createRoomSchema, CreateRoomSchema } from "@/shared/model/room"
import { Button, buttonVariants } from "@/shared/ui/button"
import { Form } from "@/shared/ui/form"
import { Separator } from "@/shared/ui/separator"

function CreateAliasRoomForm() {
    const { t } = useTranslation()

    const form = useForm<CreateRoomSchema>({
        resolver: zodResolver(createRoomSchema),
    })

    const navigate = useNavigate()
    const { mutate: createRoom } = useCreateRoom()

    async function onSubmit(values: CreateRoomSchema) {
        createRoom(values, {
            onSuccess: ({ id }) => {
                navigate(`/alias/${id}`)
            },
        })
    }

    return (
        <div className="relative w-full max-w-3xl rounded-md bg-popover px-6 py-4 shadow-lg">
            <Form {...form}>
                <form
                    className="relative flex flex-col gap-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col">
                        <h3 className="text-[2.5rem] font-bold leading-none text-brand-title">
                            Игровые настройки
                        </h3>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-end gap-2">
                        <Link
                            to="/games"
                            className={cn(
                                buttonVariants({
                                    variant: "secondary",
                                    size: "lg",
                                })
                            )}
                        >
                            {t("common.cancel")}
                        </Link>

                        <Button type="submit" size="lg">
                            {t("common.create")}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

// function Teams() {
//     const { t } = useTranslation()

//     const form = useFormContext<CreateAliasGameValues>()

//     const { fields, remove, append } = useFieldArray({
//         control: form.control,
//         name: "teams",
//     })

//     return (
//         <div className="flex flex-col gap-3">
//             <Label className="text-[1.5rem] leading-none text-brand-subtitle">
//                 Команды
//             </Label>

//             <div className="flex flex-col gap-3">
//                 {fields.map((field, index) => (
//                     <div
//                         key={field.id}
//                         className="grid grid-cols-[1fr_64px] items-center gap-3"
//                     >
//                         <FormField
//                             control={form.control}
//                             name={`teams.${index}.name`}
//                             render={({ field }) => (
//                                 <FormItem className="relative flex-1 bg-neutral-950">
//                                     <FormControl>
//                                         <Input
//                                             placeholder=""
//                                             className="h-16 rounded px-4"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                 </FormItem>
//                             )}
//                         />

//                         {index != 0 && (
//                             <Button
//                                 onClick={() => remove(index)}
//                                 variant="none"
//                                 size="none"
//                                 className="size-16 rounded border-2 border-red-600/20 bg-red-600/10 text-red-400 hover:bg-red-600/20"
//                             >
//                                 <IconX strokeWidth={3} />
//                             </Button>
//                         )}

//                         {index == 0 && (
//                             <span className="inline-flex size-16 items-center justify-center text-brand">
//                                 <IconCarambolaFilled strokeWidth={3} />
//                             </span>
//                         )}
//                     </div>
//                 ))}

//                 <Button
//                     onClick={() => append({ name: "" })}
//                     variant="outline"
//                     size="lg"
//                     className="w-fit border-teal-600/20 bg-teal-600/10 hover:bg-teal-600/20"
//                 >
//                     <IconPlus strokeWidth={3} className="size-4" /> Добавить
//                 </Button>
//             </div>
//         </div>
//     )
// }

// function General() {
//     const { t } = useTranslation()

//     const form = useFormContext<CreateAliasGameValues>()

//     return (
//         <div className="flex flex-col gap-3">
//             <Label className="text-[1.5rem] leading-none text-brand-subtitle">
//                 Общие
//             </Label>

//             <FormField
//                 control={form.control}
//                 name="timeToMove"
//                 render={({ field }) => (
//                     <FormItem>
//                         <div className="flex items-center justify-between">
//                             <FormLabel>Время на ход</FormLabel>
//                             <FormControl>
//                                 <Select
//                                     defaultValue={String(field.value)}
//                                     onValueChange={(value) =>
//                                         field.onChange(Number(value))
//                                     }
//                                 >
//                                     <FormControl>
//                                         <SelectTrigger className="h-12 w-40">
//                                             <SelectValue />
//                                         </SelectTrigger>
//                                     </FormControl>
//                                     <SelectContent>
//                                         <SelectItem value="30">
//                                             30 секунд
//                                         </SelectItem>
//                                         <SelectItem value="60">
//                                             60 секунд
//                                         </SelectItem>
//                                         <SelectItem value="90">
//                                             90 секунд
//                                         </SelectItem>
//                                         <SelectItem value="120">
//                                             120 секунд
//                                         </SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                             </FormControl>
//                         </div>
//                         <FormMessage />
//                     </FormItem>
//                 )}
//             />

//             <FormField
//                 control={form.control}
//                 name="loseOnSkip"
//                 render={({ field }) => (
//                     <FormItem>
//                         <div className="flex items-center justify-between">
//                             <FormLabel>
//                                 Отнимать очки при пропуске слов
//                             </FormLabel>
//                             <FormControl>
//                                 <Switch
//                                     checked={field.value}
//                                     onCheckedChange={field.onChange}
//                                 />
//                             </FormControl>
//                         </div>
//                         <FormMessage />
//                     </FormItem>
//                 )}
//             />
//         </div>
//     )
// }

export default CreateAliasRoomForm
