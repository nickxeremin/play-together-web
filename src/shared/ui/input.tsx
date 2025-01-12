import * as React from "react"

import { cn } from "../lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "focusable flex h-12 w-full rounded-md border-2 bg-background px-3 font-medium text-primary placeholder:text-tertiary disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }