"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { getAvailableDates } from "@/lib/booking-utils"

interface CalendarStepProps {
  onDateSelect: (date: Date) => void
  onCancel: () => void
}

export function CalendarStep({ onDateSelect, onCancel }: CalendarStepProps) {
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        // In a real implementation, this would fetch from your API
        const dates = await getAvailableDates()
        setAvailableDates(dates)
      } catch (error) {
        console.error("Failed to fetch available dates:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvailableDates()
  }, [])

  // Function to disable dates that are not available
  const disabledDays = (date: Date) => {
    // Disable weekends
    if (date.getDay() === 0 || date.getDay() === 6) return true

    // Disable dates before today
    if (date < new Date(new Date().setHours(0, 0, 0, 0))) return true

    // Disable dates that are not in the available dates list
    return !availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Select a Date</DialogTitle>
        <DialogDescription>Choose a date for your 30-minute consultation.</DialogDescription>
      </DialogHeader>

      <div className="py-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <Calendar
            mode="single"
            disabled={disabledDays}
            onSelect={(date) => date && onDateSelect(date)}
            className="rounded-md border"
          />
        )}
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </DialogFooter>
    </>
  )
}
