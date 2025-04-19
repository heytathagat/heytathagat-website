"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  // In a real application, you would process the form data here
  // For example, sending an email, storing in a database, etc.

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Log the form data (for demonstration purposes)
  const name = formData.get("first-name") + " " + formData.get("last-name")
  const email = formData.get("email")
  const company = formData.get("company")
  const message = formData.get("message")

  console.log({
    name,
    email,
    company,
    message,
  })

  // Redirect to thank you page
  redirect("/thank-you")
}
