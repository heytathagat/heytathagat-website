import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-32 px-4">
      <div className="max-w-md w-full text-center">
        <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center text-white mx-auto mb-6">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-8">
          Your message has been successfully submitted. I appreciate you reaching out and will get back to you as soon
          as possible.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-[20px]">Return to Homepage</Button>
          </Link>
          <Link href="/#services">
            <Button variant="outline" className="w-full border-black text-black hover:bg-gray-100 rounded-[20px]">
              Explore My Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
