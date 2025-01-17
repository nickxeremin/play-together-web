import React from "react"

import { cn } from "../lib/utils"

type BackgroundDottedPatternProps = {
    className?: string
}

function BackgroundDottedPattern({ className }: BackgroundDottedPatternProps) {
    return (
        <React.Fragment>
            <div
                className={cn(
                    "bg-dotted-pattern pointer-events-none absolute inset-0 z-50 size-full bg-[length:64px_64px] opacity-5",
                    className
                )}
            />
        </React.Fragment>
    )
}

type BackgroundDottedPattern2Props = {
    className?: string
}

function BackgroundDottedPattern2({
    className,
}: BackgroundDottedPattern2Props) {
    return (
        <div
            className={cn(
                "absolute bottom-0 left-0 -z-20 h-[240px] w-full",
                className
            )}
        >
            <div className="absolute size-full bg-[url('/src/assets/images/dots.svg')] bg-bottom" />

            <div className="absolute size-full bg-gradient-to-b from-background to-transparent" />
        </div>
    )
}

export { BackgroundDottedPattern, BackgroundDottedPattern2 }
