import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "w-full min-w-0 rounded-none border-0 border-b border-input bg-transparent px-0 py-2.5 text-body text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-foreground focus-visible:shadow-[0_1px_0_var(--color-walnut)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
