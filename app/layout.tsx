import type React from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Preloader } from "@/components/preloader"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { ScrollToTop } from "@/components/scroll-to-top"

// Configure the Montserrat font with all the weights we need
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Tathagat Kumar - Entrepreneur | Growth Strategist | Tech Catalyst",
  description:
    "Portfolio of Tathagat Kumar, a media-featured growth strategist, tech catalyst, and brand alchemist with expertise in digital marketing and entrepreneurship.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Preloader />
          <ScrollIndicator />
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
