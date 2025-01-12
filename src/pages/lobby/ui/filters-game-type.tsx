import { useSearchParams } from "react-router"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/button"

import { gameTypeOptions } from "../model/game-types"
import { useLobbyFilters } from "../model/use-lobby-filters"

function FiltersGameType() {
    const { filters, setFilters } = useLobbyFilters()

    const [searchParams] = useSearchParams()

    console.log(Object.fromEntries(searchParams.entries()))

    return (
        <div className="flex flex-col gap-2">
            {/* <div className="font-medium text-slate-300">Select games</div> */}

            <div className="flex gap-2">
                {Object.values(gameTypeOptions).map((option) => {
                    const isSelected = filters.gameType?.includes(option.value)

                    return (
                        <Button
                            key={option.value}
                            variant="none"
                            className={cn(
                                "inline-flex h-10 items-center justify-center rounded-md border-2 px-4 font-medium text-slate-400",
                                isSelected && "bg-teal-600 text-white"
                            )}
                            onClick={() => {
                                setFilters({
                                    ...filters,
                                    gameType: isSelected
                                        ? filters.gameType?.filter(
                                              (value) => value != option.value
                                          )
                                        : [
                                              ...(filters.gameType || []),
                                              option.value,
                                          ],
                                })
                            }}
                        >
                            {option.name}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default FiltersGameType
