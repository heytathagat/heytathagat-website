import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, ShoppingBag, Truck, CreditCard, Shirt } from "lucide-react"

export default function BragfitPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link href="/#startups">
              <Button variant="outline" className="mb-4 border-black text-black hover:bg-gray-100 rounded-[20px]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Startups
              </Button>
            </Link>
            <Badge className="mb-2 bg-black text-white hover:bg-gray-800 border-none">Startup</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Bragfit</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              A custom clothing brand that combines style, comfort, and personalization to create unique fashion
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-[20px]">
                Shop Collection
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-gray-100 rounded-[20px]">
                Learn About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Bragfit was born from a simple idea: clothing should be as unique as the people who wear it. Founded in
                2021, we set out to create a brand that combines premium quality with personalized style, allowing
                customers to express their individuality through custom-designed apparel.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small operation has grown into a thriving business, serving customers across India
                with made-to-order clothing that stands out from mass-produced fashion. Our commitment to quality,
                sustainability, and customer satisfaction has made us a favorite among those who value unique style.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">100% custom designs tailored to your preferences</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">Premium materials sourced from ethical suppliers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">Handcrafted by skilled artisans in India</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">Sustainable practices that minimize environmental impact</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Bragfit"
                  alt="Bragfit Custom Clothing"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of customizable clothing items, each crafted with attention to detail and designed to
              make you stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Custom T-Shirts",
                description:
                  "Premium cotton tees with your unique designs, perfect for everyday wear or special occasions.",
                image: "/placeholder.svg?height=300&width=300&text=T-Shirts",
                icon: <Shirt className="h-6 w-6" />,
              },
              {
                title: "Designer Hoodies",
                description:
                  "Comfortable, durable hoodies that combine style with personalization for a standout look.",
                image: "/placeholder.svg?height=300&width=300&text=Hoodies",
                icon: <Shirt className="h-6 w-6" />,
              },
              {
                title: "Statement Jackets",
                description:
                  "Make a bold statement with our custom jackets, designed to turn heads and start conversations.",
                image: "/placeholder.svg?height=300&width=300&text=Jackets",
                icon: <Shirt className="h-6 w-6" />,
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-black">
                      {product.icon}
                    </div>
                    <h3 className="font-bold text-lg">{product.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full border-black text-black hover:bg-gray-100 rounded-[20px]">
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our simple process makes it easy to get custom clothing that perfectly matches your style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Design",
                description: "Create your custom design or work with our team to bring your vision to life.",
                icon: <Shirt className="h-8 w-8 text-black" />,
              },
              {
                step: "2",
                title: "Order",
                description: "Place your order with your preferred size, material, and quantity.",
                icon: <ShoppingBag className="h-8 w-8 text-black" />,
              },
              {
                step: "3",
                title: "Production",
                description: "Our skilled artisans carefully craft your custom clothing to perfection.",
                icon: <CreditCard className="h-8 w-8 text-black" />,
              },
              {
                step: "4",
                title: "Delivery",
                description: "Receive your unique Bragfit creation at your doorstep and stand out in style.",
                icon: <Truck className="h-8 w-8 text-black" />,
              },
            ].map((step, index) => (
              <Card key={index} className="border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-[20px]">
              Start Your Custom Order
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Stand Out?</h2>
            <p className="text-gray-300 mb-8">
              Join the Bragfit community and experience clothing that's as unique as you are.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black rounded-[20px]">
              Shop Now
              <ShoppingBag className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
