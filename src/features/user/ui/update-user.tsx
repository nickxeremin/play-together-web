import { useForm } from "react-hook-form"

import { useClient } from "@/shared/api/client"
import { useUpdateUser, useUser } from "@/shared/api/user"
import { cn } from "@/shared/lib/utils"
import { avatars, AvatarValue, UpdateUserSchema } from "@/shared/model/user"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Separator } from "@/shared/ui/separator"

function UpdateUserForm() {
  const client = useClient()
  const { data: user } = useUser({ client })
  const {} = useUpdateUser({ client })

  const form = useForm<UpdateUserSchema>({
    defaultValues: {
      name: user?.name,
      avatar: user?.avatar,
    },
  })

  async function onSubmit(values: UpdateUserSchema) {
    console.log({ values })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Профиль</DialogTitle>
          </DialogHeader>

          <Separator className="border-border-light" />

          <div className="flex gap-8">
            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="size-64 border-4 border-border-light">
                      <AvatarImage src={avatars[field.value as AvatarValue]} />
                      <AvatarFallback />
                    </Avatar>

                    <div className="flex gap-2">
                      {Object.entries(avatars).map(([value, image]) => (
                        <Button
                          key={value}
                          variant="none"
                          size="none"
                          className="rounded-full"
                          disabled={field.value == value}
                          onClick={() => field.onChange(value)}
                        >
                          <Avatar
                            className={cn(
                              "border-2 border-border-light",
                              field.value == value && "ring-2"
                            )}
                          >
                            <AvatarImage src={image} />
                            <AvatarFallback />
                          </Avatar>
                        </Button>
                      ))}
                    </div>
                  </div>
                </FormItem>
              )}
            />

            <div className="flex flex-1 flex-col">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Отображаемое имя</FormLabel>
                    <FormControl>
                      <Input className="h-14 border-border-light" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Separator className="border-border-light" />

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" size="lg">
                Отмена
              </Button>
            </DialogClose>

            <Button type="submit" size="lg">
              Сохранить
            </Button>
          </DialogFooter>
        </div>
      </form>
    </Form>
  )
}

export default UpdateUserForm
