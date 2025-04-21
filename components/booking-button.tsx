"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking/booking-modal"

interface BookingButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
  sourceContext?: {
    page: string
    buttonType: string
  }
}

export function BookingButton({
  className,
  variant = "default",
  size = "default",
  children,
  sourceContext = { page: "unknown", buttonType: "unknown" },
}: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsOpen(true)}>
        {children}
      </Button>
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} sourceContext={sourceContext} />
    </>
  )
}
