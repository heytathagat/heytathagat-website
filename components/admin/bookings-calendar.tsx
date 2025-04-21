"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BookingsCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // This would be fetched from your API in a real implementation
  const bookingDates = [
    new Date(2023, 4, 2),
    new Date(2023, 4, 5),
    new Date(2023, 4, 8),
    new Date(2023, 4, 10),
    new Date(2023, 4, 15),
    new Date(2023, 4, 18),
    new Date(2023, 4, 22),
    new Date(2023, 4, 25),
    new Date(2023, 4, 29),
  ]

  // Function to render custom day contents
  const renderDay = (day: Date) => {
    const hasBooking = bookingDates.some(
      (bookingDate) =>
        bookingDate.getDate() === day.getDate() &&
        bookingDate.getMonth() === day.getMonth() &&
        bookingDate.getFullYear() === day.getFullYear(),
    )

    return (
      <div className="relative h-9 w-9 p-0 flex items-center justify-center">
        <span>{day.getDate()}</span>
        {hasBooking && (
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-1 rounded-full bg-primary"></div>
        )}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          components={{
            Day: ({ day, ...props }) => <button {...props}>{renderDay(day)}</button>,
          }}
        />
      </div>

      <div>
        {selectedDate ? (
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Bookings for selected date</h3>

              {bookingDates.some(
                (date) =>
                  date.getDate() === selectedDate.getDate() &&
                  date.getMonth() === selectedDate.getMonth() &&
                  date.getFullYear() === selectedDate.getFullYear(),
              ) ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">John Smith</div>
                      <div className="text-sm text-muted-foreground">9:30 AM</div>
                    </div>
                    <Badge>Business</Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">11:00 AM</div>
                    </div>
                    <Badge>Technical</Badge>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">No bookings scheduled for this day.</div>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a date to view bookings
          </div>
        )}
      </div>
    </div>
  )
}
