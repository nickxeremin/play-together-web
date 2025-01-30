import { IconDots } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"

import { Button } from "@/shared/ui/button"

import { gamesListQuery } from "../api/games-list-query"

function GamesList() {
    const { data: games } = useQuery({ ...gamesListQuery() })

    console.log({ games })

    return (
        <div className="grid w-full grid-cols-3">
            {games?.map((_, i) => (
                <div className="flex flex-col gap-3">
                    <div
                        key={i}
                        className="flex h-[320px] flex-col rounded-md border bg-zinc-900 p-4"
                    ></div>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="success"
                            className="h-12 flex-1 rounded-md"
                        >
                            Создать комнату
                        </Button>

                        <Button size="icon" variant="ghost" className="size-12">
                            <IconDots className="size-6" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GamesList
