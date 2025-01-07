import { useEffect, useState } from "react"
import { animate, Easing } from "motion/react"

type UseAnimatedTextParams = {
    text: string
    duration?: number
    delay?: number
    ease?: Easing
    delimiter?: "" | " "
}

export function useAnimatedText({
    text,
    duration = 2,
    delay = 0,
    ease = "linear",
    delimiter = "",
}: UseAnimatedTextParams) {
    const [cursor, setCursor] = useState(0)
    const [startingCursor, setStartingCursor] = useState(0)
    const [prevText, setPrevText] = useState(text)

    if (prevText !== text) {
        setPrevText(text)
        setStartingCursor(text.startsWith(prevText) ? cursor : 0)
    }

    useEffect(() => {
        const controls = animate(startingCursor, text.split(delimiter).length, {
            duration,
            delay,
            ease,
            onUpdate(latest) {
                setCursor(Math.floor(latest))
            },
        })

        return () => controls.stop()
    }, [startingCursor, text])

    return text.split(delimiter).slice(0, cursor).join(delimiter)
}
