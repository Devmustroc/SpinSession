import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md dark:bg-muted-dark"
          , className)}
      {...props}
    />
  )
}

export { Skeleton }
