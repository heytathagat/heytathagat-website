"use client"

import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { CheckCircle, Calendar, Clock, User, Mail, Phone, FileText } from "lucide-react"

interface BookingConfirmationProps {
  bookingData: {
    date: Date
    time: string
    name: string
    email: string
    phone?: string
    purpose: string
  }
  onClose: () => void
}

export function BookingConfirmation({ bookingData, onClose }: BookingConfirmationProps) {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <div className="rounded-full bg-primary/10 p-3 mb-4">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Booking Confirmed!</h2>
        <p className="text-muted-foreground mt-1">Your consultation has been scheduled successfully.</p>
      </div>

      <div className="rounded-lg border bg-card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Date</p>
            <p className="font-medium">{format(bookingData.date, "EEEE, MMMM d, yyyy")}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Time</p>
            <p className="font-medium">{bookingData.time} (30 minutes)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-medium">{bookingData.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{bookingData.email}</p>
          </div>
        </div>

        {bookingData.phone && (
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{bookingData.phone}</p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Purpose</p>
            <p className="font-medium">{bookingData.purpose}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p>A confirmation email has been sent to {bookingData.email}.</p>
        <p>You'll also receive a Google Calendar invitation with meeting details.</p>
      </div>

      <DialogFooter className="mt-6">
        <Button onClick={onClose} className="w-full">
          Done
        </Button>
      </DialogFooter>
    </div>
  )
}
