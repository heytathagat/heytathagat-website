"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CalendarStep } from "@/components/booking/calendar-step"
import { TimeSelectionStep } from "@/components/booking/time-selection-step"
import { BookingFormStep } from "@/components/booking/booking-form-step"
import { BookingConfirmation } from "@/components/booking/booking-confirmation"
import { AnimatePresence, motion } from "framer-motion"

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

  // Progress indicator
  const getProgress = () => {
    switch (step) {
      case "calendar":
        return 25
      case "time":
        return 50
      case "form":
        return 75
      case "confirmation":
        return 100
      default:
        return 0
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0 overflow-hidden">
        {step !== "confirmation" && (
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between mb-2">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  {step === "calendar" && "Select a Date"}
                  {step === "time" && "Choose a Time"}
                  {step === "form" && "Complete Your Booking"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {step === "calendar" && "Pick an available date for your 30-minute consultation"}
                  {step === "time" && "Select a convenient time slot"}
                  {step === "form" && "Fill in your details to confirm your booking"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Step {step === "calendar" ? "1" : step === "time" ? "2" : "3"} of 3
                </span>
              </div>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300 ease-in-out"
                style={{ width: `${getProgress()}%` }}
                role="progressbar"
                aria-valuenow={getProgress()}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
