"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-secondary hover:bg-primary/90": variant === "primary",
                        "bg-secondary text-primary hover:bg-secondary/90": variant === "secondary",
                        "border border-primary bg-transparent hover:bg-primary hover:text-secondary":
                            variant === "outline",
                        "hover:bg-primary/5 hover:text-primary": variant === "ghost",
                        "h-9 px-4 py-2": size === "sm",
                        "h-11 px-8 py-2": size === "md",
                        "h-14 px-10 py-3 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
