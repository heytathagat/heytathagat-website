"use client"

import { useState, useEffect } from "react"
import { format, isSameDay, addMonths, subMonths } from "date-fns"
import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
import { getAvailableDates } from "@/lib/booking-utils"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarStepProps {
  onDateSelect: (date: Date) => void
  onCancel: () => void
}

export function CalendarStep({ onDateSelect, onCancel }: CalendarStepProps) {
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [currentMonth, setCurrentMonth] = useState(new Date())

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

  // Function to check if a date is available
  const isDateAvailable = (date: Date) => {
    return availableDates.some((availableDate) => isSameDay(availableDate, date))
  }

  // Function to check if a date should be disabled
  const isDateDisabled = (date: Date) => {
    // Disable weekends
    if (date.getDay() === 0 || date.getDay() === 6) return true

    // Disable dates before today
    if (date < new Date(new Date().setHours(0, 0, 0, 0))) return true

    // Disable dates that are not in the available dates list
    return !isDateAvailable(date)
  }

  const handleContinue = () => {
    if (selectedDate) {
      onDateSelect(selectedDate)
    }
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  // Generate calendar grid
  const generateCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // Get first day of month
    const firstDay = new Date(year, month, 1)
    const startingDayOfWeek = firstDay.getDay()

    // Get days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    // Get days from previous month to fill the first row
    const prevMonthDays = startingDayOfWeek

    // Calculate total cells needed (max 6 rows of 7 days)
    const totalCells = Math.ceil((prevMonthDays + daysInMonth) / 7) * 7

    // Generate calendar cells
    const days = []
    let dayCounter = 1
    let nextMonthCounter = 1

    // Days of week header
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

    // Create the header row
    const headerRow = (
      <div className="grid grid-cols-7 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-medium py-1">
            {day}
          </div>
        ))}
      </div>
    )

    // Create the calendar grid
    for (let i = 0; i < totalCells; i++) {
      const dayOfWeek = i % 7

      if (i < prevMonthDays) {
        // Previous month days
        const prevMonthDate = new Date(year, month, -prevMonthDays + i + 1)
        days.push(
          <div key={`prev-${i}`} className="p-1">
            <div className="w-full aspect-square flex items-center justify-center text-muted-foreground opacity-30 text-sm">
              {prevMonthDate.getDate()}
            </div>
          </div>,
        )
      } else if (i < prevMonthDays + daysInMonth) {
        // Current month days
        const currentDate = new Date(year, month, dayCounter)
        const isDisabled = isDateDisabled(currentDate)
        const isAvailable = isDateAvailable(currentDate)
        const isSelected = selectedDate && isSameDay(currentDate, selectedDate)

        days.push(
          <div key={`current-${dayCounter}`} className="p-1">
            <button
              type="button"
              onClick={() => !isDisabled && setSelectedDate(currentDate)}
              disabled={isDisabled}
              className={`w-full aspect-square rounded-full flex items-center justify-center text-sm transition-colors
                ${isDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-accent"}
                ${isSelected ? "bg-primary text-primary-foreground" : ""}
                ${isAvailable && !isSelected ? "font-bold" : ""}
              `}
              aria-label={format(currentDate, "MMMM d, yyyy")}
              aria-selected={isSelected}
            >
              {dayCounter}
            </button>
          </div>,
        )
        dayCounter++
      } else {
        // Next month days
        days.push(
          <div key={`next-${nextMonthCounter}`} className="p-1">
            <div className="w-full aspect-square flex items-center justify-center text-muted-foreground opacity-30 text-sm">
              {nextMonthCounter}
            </div>
          </div>,
        )
        nextMonthCounter++
      }
    }

    // Group days into rows
    const rows = []
    for (let i = 0; i < days.length; i += 7) {
      rows.push(
        <div key={`row-${i}`} className="grid grid-cols-7">
          {days.slice(i, i + 7)}
        </div>,
      )
    }

    return (
      <div className="calendar">
        {headerRow}
        {rows}
      </div>
    )
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
              <div className="p-4">
                {/* Month navigation */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="p-2 rounded-full hover:bg-accent"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h3 className="text-lg font-medium">{format(currentMonth, "MMMM yyyy")}</h3>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="p-2 rounded-full hover:bg-accent"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Calendar grid */}
                {generateCalendar()}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
