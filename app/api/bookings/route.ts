import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"
import { createTransport } from "nodemailer"

// This would be set up with your actual Google Calendar credentials
const calendar = google.calendar({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date, time, name, email, phone, purpose, sourceContext } = body

    if (!date || !time || !name || !email || !purpose) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format the date and time for Google Calendar
    const [hours, minutes] = time.replace(" AM", "").replace(" PM", "").split(":")
    const isPM = time.includes("PM")

    const startTime = new Date(date)
    startTime.setHours(
      isPM && hours !== "12" ? Number.parseInt(hours) + 12 : Number.parseInt(hours),
      Number.parseInt(minutes),
      0,
    )

    const endTime = new Date(startTime)
    endTime.setMinutes(startTime.getMinutes() + 30) // 30-minute consultation

    // Source context information
    const sourceInfo = sourceContext
      ? `\nSource Page: ${sourceContext.page}\nButton Type: ${sourceContext.buttonType}`
      : "\nSource: Unknown"

    // Create Google Calendar event
    const calendarEvent = await calendar.events.insert({
      calendarId: "primary",
      requestBody: {
        summary: `Consultation: ${name}`,
        description: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone || "Not provided"}
          Purpose: ${purpose}
          ${sourceInfo}
        `,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "America/New_York", // Adjust to your timezone
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "America/New_York", // Adjust to your timezone
        },
        conferenceData: {
          createRequest: {
            requestId: `booking-${Date.now()}`,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      },
      conferenceDataVersion: 1,
    })

    // Send confirmation email to user
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Your Consultation Booking Confirmation",
      html: `
        <h1>Booking Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Your consultation has been scheduled for ${startTime.toLocaleDateString()} at ${time}.</p>
        <p>Purpose: ${purpose}</p>
        <p>A Google Meet link will be sent to you shortly.</p>
        <p>Thank you!</p>
      `,
    })

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: "New Consultation Booking",
      html: `
        <h1>New Booking Alert</h1>
        <p>A new consultation has been scheduled:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone || "Not provided"}</li>
          <li>Date: ${startTime.toLocaleDateString()}</li>
          <li>Time: ${time}</li>
          <li>Purpose: ${purpose}</li>
          <li>Source Page: ${sourceContext?.page || "Unknown"}</li>
          <li>Button Type: ${sourceContext?.buttonType || "Unknown"}</li>
        </ul>
      `,
    })

    return NextResponse.json({
      success: true,
      eventId: calendarEvent.data.id,
      meetLink: calendarEvent.data.hangoutLink,
    })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
