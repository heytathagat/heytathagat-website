import { Suspense } from "react"
import { format, startOfWeek, endOfWeek, addDays } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingsList } from "@/components/admin/bookings-list"
import { BookingsCalendar } from "@/components/admin/bookings-calendar"
import { BookingStats } from "@/components/admin/booking-stats"
import { Skeleton } from "@/components/ui/skeleton"

export default function BookingsPage() {
  const today = new Date()
  const startOfCurrentWeek = startOfWeek(today)
  const endOfCurrentWeek = endOfWeek(today)

  const weekRange = `${format(startOfCurrentWeek, "MMM d")} - ${format(endOfCurrentWeek, "MMM d, yyyy")}`

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Booking Management</h1>
          <p className="text-muted-foreground">View and manage your consultation bookings.</p>
        </div>
      </div>

      <Suspense fallback={<BookingStatsSkeleton />}>
        <BookingStats />
      </Suspense>

      <Tabs defaultValue="today" className="mt-8">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week ({weekRange})</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Bookings</CardTitle>
              <CardDescription>{format(today, "EEEE, MMMM d, yyyy")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<BookingsListSkeleton />}>
                <BookingsList date={today} />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>This Week's Bookings</CardTitle>
              <CardDescription>{weekRange}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {Array.from({ length: 5 }).map((_, index) => {
                  const date = addDays(startOfCurrentWeek, index + 1) // Skip weekend
                  const day = date.getDay()

                  // Skip weekend days
                  if (day === 0 || day === 6) return null

                  return (
                    <div key={index}>
                      <h3 className="font-medium mb-4">{format(date, "EEEE, MMMM d")}</h3>
                      <Suspense fallback={<BookingsListSkeleton />}>
                        <BookingsList date={date} />
                      </Suspense>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>View all bookings in a calendar format</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense
                fallback={<div className="h-[500px] flex items-center justify-center">Loading calendar...</div>}
              >
                <BookingsCalendar />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BookingStatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <Skeleton className="h-4 w-[120px]" />
            </CardTitle>
            <Skeleton className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-[60px] mb-1" />
            <Skeleton className="h-4 w-[100px]" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function BookingsListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
          <Skeleton className="h-8 w-[100px]" />
        </div>
      ))}
    </div>
  )
}
