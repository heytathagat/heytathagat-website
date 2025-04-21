"use client"

import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

interface BookingConfirmationProps {
  bookingData: {
    date: Date
    time: string
    name: string
    email: string
    purpose: string
  }
  onClose: () => void
}

export function BookingConfirmation({ bookingData, onClose }: BookingConfirmationProps) {
  return (
    <>
      <DialogHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <DialogTitle className="text-center">Booking Confirmed!</DialogTitle>
        <DialogDescription className="text-center">Your consultation has been scheduled.</DialogDescription>
      </DialogHeader>

      <div className="py-6 space-y-4">
        <div className="border rounded-lg p-4 space-y-2">
          <div className="grid grid-cols-2">
            <span className="font-medium">Date:</span>
            <span>{format(bookingData.date, "MMMM d, yyyy")}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-medium">Time:</span>
            <span>{bookingData.time}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-medium">Name:</span>
            <span>{bookingData.name}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="font-medium">Purpose:</span>
            <span>{bookingData.purpose}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          A confirmation email has been sent to {bookingData.email}. You'll also receive a Google Calendar invitation
          with a Google Meet link.
        </p>
      </div>

      <DialogFooter>
        <Button onClick={onClose} className="w-full">
          Done
        </Button>
      </DialogFooter>
    </>
  )
}
