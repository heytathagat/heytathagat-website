"use client"

import { useState, useEffect } from "react"
import { format, isSameDay } from "date-fns"
import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { CalendarGrid } from "@/components/ui/calendar-grid"
import { getAvailableDates } from "@/lib/booking-utils"
import { Calendar } from "lucide-react"

interface CalendarStepProps {
  onDateSelect: (date: Date) => void
  onCancel: () => void
}

export function CalendarStep({ onDateSelect, onCancel }: CalendarStepProps) {
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

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
    return !availableDates.some((availableDate) => isSameDay(availableDate, date))
  }

  const handleContinue = () => {
    if (selectedDate) {
      onDateSelect(selectedDate)
    }
  }

  return (
    <div className="p-6">
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-[350px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-2">
                <CalendarGrid
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={disabledDays}
                  modifiers={{
                    available: availableDates,
                  }}
                  modifiersStyles={{
                    available: {
                      fontWeight: "bold",
                    },
                  }}
                  className="mx-auto"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-muted"></div>
                <span>Unavailable</span>
              </div>
            </div>

            {selectedDate && (
              <div className="rounded-lg border p-4 bg-muted/50">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
                    <p className="text-sm text-muted-foreground">Available for booking</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-6">
        <Button variant="outline" onClick={onCancel} className="sm:mr-auto">
          Cancel
        </Button>
        <Button onClick={handleContinue} disabled={!selectedDate}>
          Continue to Time Selection
        </Button>
      </DialogFooter>
    </div>
  )
}
