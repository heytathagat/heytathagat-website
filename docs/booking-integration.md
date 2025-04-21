# Booking System Integration Guide

This document explains how to integrate the booking system into new pages or buttons.

## Overview

The booking system uses a unified backend that tracks the source of each booking (which page and which button). All bookings use the same flow:

1. Calendar selection
2. Time slot selection
3. Booking form
4. Confirmation

## How to Add a New Booking Button

### 1. Import the BookingButton Component

\`\`\`tsx
import { BookingButton } from "@/components/booking-button"
\`\`\`

### 2. Replace Your Existing Button with BookingButton

Replace:
\`\`\`tsx
<Button className="your-classes">
  Button Text
</Button>
\`\`\`

With:
\`\`\`tsx
<BookingButton 
  className="your-classes"
  sourceContext={{ page: "page_name", buttonType: "button_type" }}
>
  Button Text
</BookingButton>
\`\`\`

### 3. Source Context Parameters

- `page`: A snake_case identifier for the page (e.g., "homepage", "startup_mentorship")
- `buttonType`: A snake_case identifier for the button type (e.g., "primary_cta", "secondary_cta")

## Styling

The `BookingButton` component accepts all the same props as the regular `Button` component:

- `variant`: "default" | "outline" | "secondary" | "ghost" | "link"
- `size`: "default" | "sm" | "lg" | "icon"
- `className`: Custom CSS classes

## Example

\`\`\`tsx
<BookingButton
  variant="outline"
  size="lg"
  className="rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white"
  sourceContext={{ page: "services_page", buttonType: "learn_more" }}
>
  <span className="flex items-center">
    Schedule a Call
    <ArrowRight className="ml-2 h-4 w-4" />
  </span>
</BookingButton>
\`\`\`

## Admin Dashboard

The admin dashboard at `/admin/bookings` includes filters to view bookings by:
- Source page
- Button type

This helps track which pages and buttons are generating the most bookings.
