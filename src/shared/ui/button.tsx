import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"

const buttonVariants = cva(
    "relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap font-medium transition-all disabled:pointer-events-none focusable disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-teal-600 text-white hover:bg-teal-800",
                destructive: "bg-red-600 text-white hover:bg-red-800",
                outline:
                    "bg-transparent text-teal-500 border-2 hover:bg-zinc-800",
                secondary: "bg-zinc-800 text-teal-500 hover:bg-zinc-700",
                ghost: "text-tertiary hover:bg-muted hover:text-brand-light",
                link: "text-primary underline-offset-4 hover:underline",
                success: "bg-teal-600 hover:bg-teal-800 text-white",
                none: "",
            },
            size: {
                default: "h-10 px-4 rounded",
                lg: "h-12 px-6 rounded",
                xl: "h-14 px-8 rounded-md",
                icon: "size-10 rounded",
                "icon-lg": "size-12 rounded",
                "icon-xl": "size-14 rounded-md",
                none: "",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                type="button"
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
