"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { getAvailableTimeSlots } from "@/lib/booking-utils"

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
    <>
      <DialogHeader>
        <DialogTitle>Select a Time</DialogTitle>
        <DialogDescription>Available slots for {format(selectedDate, "EEEE, MMMM d, yyyy")}</DialogDescription>
      </DialogHeader>

      <div className="py-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <RadioGroup value={selectedSlot} onValueChange={setSelectedSlot} className="space-y-3">
            {availableSlots.map((slot) => (
              <Card key={slot} className="p-4 cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={slot} id={slot} />
                  <Label htmlFor={slot} className="flex-1 cursor-pointer">
                    {slot}
                  </Label>
                </div>
              </Card>
            ))}
          </RadioGroup>
        )}
      </div>

      <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <Button variant="outline" onClick={onBack} className="sm:mr-auto">
          Back
        </Button>
        <Button onClick={handleContinue} disabled={!selectedSlot}>
          Continue
        </Button>
      </DialogFooter>
    </>
  )
}
