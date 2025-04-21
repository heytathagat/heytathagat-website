"use client"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Diamond, Eye, Target, Layers, Star, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { BookingButton } from "@/components/booking-button"

export default function BrandStrategyPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[80vh] overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 -z-10 bg-grid"></div>

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="container relative px-4 md:px-6"
          >
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 rounded-none border-2 border-black bg-black text-white hover:bg-black">
                Service
              </Badge>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
              >
                Brand Strategy Development
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              >
                Transform your business with a powerful brand strategy that differentiates you in the market and
                connects deeply with your audience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <BookingButton
                  size="lg"
                  className="relative overflow-hidden rounded-none border-2 border-black bg-black px-8 py-3 text-white transition-transform hover:bg-white hover:text-black"
                  sourceContext={{ page: "brand_strategy", buttonType: "primary_cta" }}
                >
                  <span className="relative z-10 flex items-center font-medium">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </BookingButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative overflow-hidden rounded-none border-2 border-black bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white"
                >
                  <span className="relative z-10 flex items-center font-medium">View Case Studies</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Power of Branding Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Power of Strategic Branding</h2>
                <p className="mb-6">
                  A strong brand isn't just a logo - it's a comprehensive system that influences how customers perceive,
                  experience, and engage with your business at every touchpoint.
                </p>
                <ul className="space-y-4">
                  {[
                    "Brands with strong identities grow 3x faster than competitors",
                    "Consistent branding increases revenue by 33%",
                    "64% of consumers cite shared values as primary brand relationship driver",
                    "Emotionally connected customers have 306% higher lifetime value",
                    "Purpose-driven brands outperform the stock market by 134%",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-none border-2 border-black p-6 hover:bg-black hover:text-white transition-colors"
                >
                  <div className="h-16 w-16 rounded-none border-2 border-black flex items-center justify-center mb-6 mx-auto group-hover:border-white">
                    <Diamond className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6">Brand Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "3x", label: "Faster growth" },
                      { value: "33%", label: "Revenue increase" },
                      { value: "306%", label: "Higher LTV" },
                      { value: "134%", label: "Market outperformance" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="rounded-none border-2 border-black p-3 text-center hover:bg-white hover:text-black transition-colors"
                      >
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Elements Section */}
        <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-12 text-center"
              >
                Core Elements of Brand Strategy
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Eye className="h-6 w-6" />,
                    title: "Brand Identity",
                    items: ["Visual identity system", "Logo & design language", "Brand guidelines", "Tone of voice"],
                  },
                  {
                    icon: <Target className="h-6 w-6" />,
                    title: "Positioning",
                    items: [
                      "Competitive differentiation",
                      "Unique value proposition",
                      "Target audience definition",
                      "Brand archetype",
                    ],
                  },
                  {
                    icon: <Layers className="h-6 w-6" />,
                    title: "Experience",
                    items: [
                      "Customer journey mapping",
                      "Touchpoint optimization",
                      "Brand experience design",
                      "Employee engagement",
                    ],
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="rounded-none border-2 border-white hover:bg-white hover:text-black transition-colors h-full"
                    >
                      <CardContent className="p-6">
                        <div className="h-12 w-12 rounded-none border-2 border-white flex items-center justify-center mb-4 group-hover:border-black">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                        <ul className="space-y-3">
                          {card.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 text-center"
              >
                <h3 className="text-xl font-bold mb-4">A strong brand is your most valuable business asset</h3>
                <p className="mb-8 max-w-2xl mx-auto">
                  Companies that invest in strategic branding consistently outperform competitors and command premium
                  pricing.
                </p>
                <Button className="relative overflow-hidden rounded-none border-2 border-black bg-black px-8 py-3 text-white transition-transform hover:bg-white hover:text-black">
                  <span className="relative z-10 flex items-center font-medium">
                    Build Your Brand Strategy - Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transformation Stories Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-12 text-center"
              >
                Brand Transformation Stories
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    name: "Sophia K.",
                    company: "Luxury Skincare (3x Valuation Increase)",
                    testimonial:
                      "Our rebrand and positioning strategy helped us move from a commodity product to a premium brand, tripling our company valuation in 18 months.",
                  },
                  {
                    name: "Rahul P.",
                    company: "Tech Startup (Acquired for 8x Revenue)",
                    testimonial:
                      "The brand strategy work differentiated us in a crowded market and was cited as key reason for our acquisition at premium multiples.",
                  },
                  {
                    name: "Elena T.",
                    company: "Professional Services (50% Fee Increase)",
                    testimonial:
                      "After clarifying our brand positioning and messaging, we attracted higher-value clients and increased our fees by 50% with no pushback.",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="rounded-none border-2 border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-6">
                          <div className="h-14 w-14 rounded-none border-2 border-black flex items-center justify-center font-bold group-hover:border-white">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm mb-3">{testimonial.company}</p>
                            <p>"{testimonial.testimonial}"</p>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold mb-8"
              >
                Ready to Elevate Your Brand?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10"
              >
                Book a free 30-minute brand strategy session where we'll:
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: <Star className="h-5 w-5" />, text: "Assess your current brand equity" },
                  { icon: <Diamond className="h-5 w-5" />, text: "Identify differentiation opportunities" },
                  { icon: <Target className="h-5 w-5" />, text: "Outline a strategic roadmap" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="rounded-none border-2 border-white p-4 hover:bg-white hover:text-black transition-colors"
                  >
                    <div className="h-10 w-10 rounded-none border-2 border-white flex items-center justify-center mb-3 mx-auto group-hover:border-black">
                      {item.icon}
                    </div>
                    <p>{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <BookingButton
                  className="relative overflow-hidden rounded-none border-2 border-white bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white"
                  sourceContext={{ page: "brand_strategy", buttonType: "secondary_cta" }}
                >
                  <span className="relative z-10 flex items-center font-medium">
                    Claim Your Free Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </BookingButton>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
