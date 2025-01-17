import { cn } from "../lib/utils"

type SeparatorProps = {
    orientation?: "horizontal" | "vertical"
    size?: "default" | "sm" | "lg"
    className?: string
}

function Separator({
    orientation = "horizontal",
    size = "default",
    className,
}: SeparatorProps) {
    return (
        <div
            className={cn(
                "rounded-full border-dashed",
                orientation == "horizontal" && "h-0 w-full",
                orientation == "vertical" && "h-full w-0",
                size == "default" && "border-2",
                className
            )}
        />
    )
}

export { Separator }
