"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"

interface TimeSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  time: string
  selected?: boolean
  available?: boolean
  onSelect?: () => void
}

export function TimeSlot({ time, selected = false, available = true, onSelect, className, ...props }: TimeSlotProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-between rounded-lg border p-4 transition-all",
        selected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
        !available && "cursor-not-allowed opacity-50",
        available && !selected && "cursor-pointer",
        className,
      )}
      onClick={available ? onSelect : undefined}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border",
            selected
              ? "border-primary bg-primary text-primary-foreground"
              : "border-muted-foreground/20 text-muted-foreground",
          )}
        >
          <Clock className="h-4 w-4" />
        </div>
        <div>
          <p className="font-medium">{time}</p>
          <p className="text-sm text-muted-foreground">30 min consultation</p>
        </div>
      </div>
      <div
        className={cn(
          "h-5 w-5 rounded-full border-2",
          selected ? "border-4 border-primary bg-primary/30" : "border-muted-foreground/20",
        )}
      />
    </div>
  )
}
