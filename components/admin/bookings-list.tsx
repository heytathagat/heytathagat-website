"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Clock, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Booking {
  id: string
  name: string
  email: string
  date: string
  time: string
  purpose: string
  meetLink: string
  sourcePage?: string
  buttonType?: string
}

interface BookingsListProps {
  date: Date
}

export function BookingsList({ date }: BookingsListProps) {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sourcePageFilter, setSourcePageFilter] = useState<string>("all")
  const [buttonTypeFilter, setButtonTypeFilter] = useState<string>("all")
  const [sourcePages, setSourcePages] = useState<string[]>([])
  const [buttonTypes, setButtonTypes] = useState<string[]>([])

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // In a real implementation, this would fetch from your API
        // For demo purposes, we'll generate some sample data
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const formattedDate = format(date, "yyyy-MM-dd")

        // Sample data - would come from your API
        const sampleBookings: Booking[] = [
          {
            id: "booking-1",
            name: "John Smith",
            email: "john@example.com",
            date: formattedDate,
            time: "9:30 AM",
            purpose: "Business",
            meetLink: "https://meet.google.com/abc-defg-hij",
            sourcePage: "homepage",
            buttonType: "primary_cta",
          },
          {
            id: "booking-2",
            name: "Sarah Johnson",
            email: "sarah@example.com",
            date: formattedDate,
            time: "11:00 AM",
            purpose: "Technical",
            meetLink: "https://meet.google.com/klm-nopq-rst",
            sourcePage: "startup_mentorship",
            buttonType: "secondary_cta",
          },
          {
            id: "booking-3",
            name: "Michael Brown",
            email: "michael@example.com",
            date: formattedDate,
            time: "3:00 PM",
            purpose: "Personal",
            meetLink: "https://meet.google.com/uvw-xyz-123",
            sourcePage: "digital_marketing",
            buttonType: "primary_cta",
          },
        ]

        // Filter to only show 0-2 bookings to simulate different days
        const dayOfMonth = date.getDate()
        const filteredBookings = sampleBookings.slice(0, (dayOfMonth % 3) + 1)

        setBookings(filteredBookings)
        setFilteredBookings(filteredBookings)

        // Extract unique source pages and button types
        const pages = Array.from(new Set(filteredBookings.map((booking) => booking.sourcePage || "unknown")))
        const types = Array.from(new Set(filteredBookings.map((booking) => booking.buttonType || "unknown")))

        setSourcePages(pages)
        setButtonTypes(types)
      } catch (error) {
        console.error("Failed to fetch bookings:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBookings()
  }, [date])

  // Apply filters when they change
  useEffect(() => {
    let filtered = [...bookings]

    if (sourcePageFilter !== "all") {
      filtered = filtered.filter((booking) => booking.sourcePage === sourcePageFilter)
    }

    if (buttonTypeFilter !== "all") {
      filtered = filtered.filter((booking) => booking.buttonType === buttonTypeFilter)
    }

    setFilteredBookings(filtered)
  }, [sourcePageFilter, buttonTypeFilter, bookings])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (bookings.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No bookings scheduled for this day.</div>
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="text-sm font-medium mb-1 block">Filter by Source Page</label>
          <Select value={sourcePageFilter} onValueChange={setSourcePageFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Pages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pages</SelectItem>
              {sourcePages.map((page) => (
                <SelectItem key={page} value={page}>
                  {page.replace("_", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium mb-1 block">Filter by Button Type</label>
          <Select value={buttonTypeFilter} onValueChange={setButtonTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Button Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Button Types</SelectItem>
              {buttonTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type.replace("_", " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No bookings match the selected filters.</div>
        ) : (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <Avatar className="h-12 w-12">
                <AvatarFallback>
                  {booking.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h4 className="font-medium">{booking.name}</h4>
                <div className="text-sm text-muted-foreground">{booking.email}</div>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {booking.time}
                  </div>
                  <Badge variant="outline">{booking.purpose}</Badge>
                  {booking.sourcePage && <Badge variant="secondary">{booking.sourcePage.replace("_", " ")}</Badge>}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={booking.meetLink} target="_blank" rel="noopener noreferrer">
                    <Video className="h-4 w-4 mr-1" />
                    Join
                  </a>
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
