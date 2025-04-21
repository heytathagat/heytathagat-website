"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CalendarStep } from "@/components/booking/calendar-step"
import { TimeSelectionStep } from "@/components/booking/time-selection-step"
import { BookingFormStep } from "@/components/booking/booking-form-step"
import { BookingConfirmation } from "@/components/booking/booking-confirmation"

export type BookingStep = "calendar" | "time" | "form" | "confirmation"

export interface SourceContext {
  page: string
  buttonType: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  sourceContext?: SourceContext
}

export function BookingModal({
  isOpen,
  onClose,
  sourceContext = { page: "unknown", buttonType: "unknown" },
}: BookingModalProps) {
  const [step, setStep] = useState<BookingStep>("calendar")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [bookingData, setBookingData] = useState<any>(null)

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setStep("time")
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep("form")
  }

  const handleFormSubmit = (formData: any) => {
    setBookingData({
      date: selectedDate,
      time: selectedTime,
      ...formData,
      sourceContext,
    })
    setStep("confirmation")
  }

  const handleClose = () => {
    // Reset state when closing
    setStep("calendar")
    setSelectedDate(undefined)
    setSelectedTime(undefined)
    setBookingData(null)
    onClose()
  }

  const handleBack = () => {
    if (step === "time") setStep("calendar")
    if (step === "form") setStep("time")
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {step === "calendar" && <CalendarStep onDateSelect={handleDateSelect} onCancel={handleClose} />}
        {step === "time" && (
          <TimeSelectionStep selectedDate={selectedDate!} onTimeSelect={handleTimeSelect} onBack={handleBack} />
        )}
        {step === "form" && (
          <BookingFormStep
            selectedDate={selectedDate!}
            selectedTime={selectedTime!}
            onSubmit={handleFormSubmit}
            onBack={handleBack}
            sourceContext={sourceContext}
          />
        )}
        {step === "confirmation" && <BookingConfirmation bookingData={bookingData} onClose={handleClose} />}
      </DialogContent>
    </Dialog>
  )
}
