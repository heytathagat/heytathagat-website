"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { getAvailableTimeSlots } from "@/lib/booking-utils"
import { TimeSlot } from "@/components/ui/time-slot"
import { Calendar } from "lucide-react"

interface TimeSelectionStepProps {
  selectedDate: Date
  onTimeSelect: (time: string) => void
  onBack: () => void
}

export function TimeSelectionStep({ selectedDate, onTimeSelect, onBack }: TimeSelectionStepProps) {
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        // In a real implementation, this would fetch from your API
        const slots = await getAvailableTimeSlots(selectedDate)
        setAvailableSlots(slots)
      } catch (error) {
        console.error("Failed to fetch time slots:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTimeSlots()
  }, [selectedDate])

  const handleContinue = () => {
    if (selectedSlot) {
      onTimeSelect(selectedSlot)
    }
  }

  return (
    <div className="p-6">
      <div className="rounded-lg border p-4 bg-muted/50 mb-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="font-medium">{format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
            <p className="text-sm text-muted-foreground">Select a time slot below</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
            {availableSlots.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No available time slots for this date.</p>
              </div>
            ) : (
              availableSlots.map((slot) => (
                <TimeSlot
                  key={slot}
                  time={slot}
                  selected={selectedSlot === slot}
                  onSelect={() => setSelectedSlot(slot)}
                />
              ))
            )}
          </div>
        )}
      </div>

      <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-6">
        <Button variant="outline" onClick={onBack} className="sm:mr-auto">
          Back
        </Button>
        <Button onClick={handleContinue} disabled={!selectedSlot}>
          Continue to Booking
        </Button>
      </DialogFooter>
    </div>
  )
}
