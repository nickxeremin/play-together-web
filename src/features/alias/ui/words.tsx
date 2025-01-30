import React from "react"

import { useSocket } from "@/app/providers/socket"
import { Button } from "@/shared/ui/button"

import { useWords } from "../api/words"

function Words() {
    const { words, acceptWord, skipWord } = useWords()

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex h-[240px] w-[480px] items-center justify-center rounded-md border-4 border-double bg-zinc-900">
                <span className="text-[2rem] font-bold capitalize">
                    {words.current}
                </span>
            </div>

            <div className="flex gap-4">
                <Button
                    size="xl"
                    className="w-40 bg-red-600 text-xl hover:bg-red-800"
                    onClick={skipWord}
                >
                    Skip
                </Button>

                <Button size="xl" className="w-40 text-xl" onClick={acceptWord}>
                    Accept
                </Button>
            </div>
        </div>
    )
}

export default Words
