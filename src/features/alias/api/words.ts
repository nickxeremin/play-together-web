import React from "react"

import { useSocket } from "@/app/providers/socket"

export function useWords() {
    const socket = useSocket()

    function acceptWord() {
        socket.emit("game:accept_word")
    }

    function skipWord() {
        socket.emit("game:skip_word")
    }

    const [words, setWords] = React.useState({
        current: "current",
        skipped: ["skipped"],
        accepted: ["accepted"],
    })

    React.useEffect(() => {
        function handleWords() {}

        socket.on("game:words", handleWords)

        return () => {
            socket.off("game:words", handleWords)
        }
    }, [])

    return {
        words,
        acceptWord,
        skipWord,
    }
}
