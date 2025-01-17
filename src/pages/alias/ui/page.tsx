import React from "react"
import { IconChevronLeft } from "@tabler/icons-react"
import { motion } from "motion/react"
import { Link } from "react-router"

import { cn } from "@/shared/lib/utils"
import { Button, buttonVariants } from "@/shared/ui/button"
import { Separator } from "@/shared/ui/separator"

import GameSettings from "./game-settings"

function AliasPage() {
    const [words, setWords] = React.useState(mockWords)

    function nextCard() {
        setWords((w) => w.slice(1))
    }

    return (
        <div className="flex flex-grow flex-col gap-4 p-4">
            <div className="flex items-center gap-2">
                <Link
                    to="/"
                    className={cn(
                        buttonVariants({
                            variant: "ghost",
                            size: "icon",
                        })
                    )}
                >
                    <IconChevronLeft strokeWidth={3} className="size-6" />
                </Link>

                <div className="flex flex-col">
                    <h1 className="text-[3rem] font-extrabold leading-none text-brand-title">
                        Элиас
                    </h1>
                </div>
            </div>

            <Separator />

            <div className="flex flex-grow flex-col items-center justify-center p-4">
                <GameSettings />
            </div>

            {/* <div className="relative">
                <motion.div
                    drag
                    className="relative z-10 flex h-[320px] w-[480px] items-center justify-center rounded-2xl border-2 border-dashed bg-neutral-900 text-[2rem] font-bold capitalize text-teal-200"
                >
                    {words[0]}
                </motion.div>

                <div className="absolute left-[18px] top-10 h-[296px] w-[444px] rounded-lg border-2 border-dashed bg-neutral-900">
                    {words[1]}
                </div>
            </div>
            <div className="flex items-center gap-8">
                <Button variant="destructive" size="xl" className="w-[180px]">
                    Пропустить
                </Button>

                <Button size="xl" className="w-[180px]">
                    Правильно
                </Button>
            </div> */}
        </div>
    )
}

const mockWords = [
    "псевдоним",
    "кличка",
    "никнейм",
    "прозвище",
    "альтер эго",
    "псевдоним",
    "маска",
    "личина",
    "фальшивка",
    "скрытое имя",
    "выдуманное имя",
    "аноним",
    "персонаж",
    "персона",
    "кодовое имя",
    "криптоимя",
    "имя",
    "псевдоним",
    "заглушка",
    "другое имя",
    "поддельное имя",
    "подпись",
    "псевдоним",
    "неявное имя",
    "вымышленное имя",
    "фальшивое имя",
    "псевдоним",
    "стелс",
    "тень",
    "выдумка",
]

export default AliasPage
