"use client"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BarChart, Target, Smartphone, Mail, Search, Hash, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { BookingButton } from "@/components/booking-button"

export default function DigitalMarketingPage() {
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
                Digital Marketing Strategy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              >
                Data-driven digital marketing solutions that deliver measurable results and accelerate your business
                growth.
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
                  sourceContext={{ page: "digital_marketing", buttonType: "primary_cta" }}
                >
                  <span className="relative z-10 flex items-center font-medium">
                    Get Free Audit
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

        {/* Why Digital Marketing Matters Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Digital Marketing Matters</h2>
                <p className="mb-6">
                  In today's digital-first world, having a strategic online presence isn't optional - it's essential for
                  reaching your customers and driving business growth.
                </p>
                <ul className="space-y-4">
                  {[
                    "97% of consumers search online before making purchases",
                    "Digital marketing delivers 3x better ROI than traditional marketing",
                    "Businesses using data-driven strategies grow 5x faster",
                    "Personalized campaigns increase conversions by 200%",
                    "Omnichannel customers spend 30% more than single-channel",
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
                    <BarChart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6">Marketing Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "3x", label: "Higher ROI" },
                      { value: "5x", label: "More leads" },
                      { value: "200%", label: "Conversion boost" },
                      { value: "30%", label: "Lower CAC" },
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

        {/* Performance Metrics Section */}
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
                Digital Marketing Performance Metrics
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Search className="h-6 w-6" />,
                    title: "SEO Performance",
                    stats: [
                      { value: "53%", label: "of website traffic comes from organic search" },
                      { value: "5x", label: "more clicks than paid ads" },
                      { value: "75%", label: "never scroll past first page" },
                    ],
                  },
                  {
                    icon: <Smartphone className="h-6 w-6" />,
                    title: "Social Media",
                    stats: [
                      { value: "4.8B", label: "social media users worldwide" },
                      { value: "71%", label: "of consumers prefer brands they follow" },
                      { value: "2x", label: "higher conversion from social leads" },
                    ],
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email Marketing",
                    stats: [
                      { value: "$42", label: "ROI for every $1 spent" },
                      { value: "60%", label: "of consumers make purchases from emails" },
                      { value: "3x", label: "higher conversion than social media" },
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
                          {card.stats.map((stat, statIndex) => (
                            <li key={statIndex} className="flex items-start gap-3">
                              <span className="text-2xl font-bold">{stat.value}</span>
                              <span>{stat.label}</span>
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
                <h3 className="text-xl font-bold mb-4">These results are achievable for your business</h3>
                <p className="mb-8 max-w-2xl mx-auto">
                  My data-driven strategies have helped businesses across industries achieve consistent growth through
                  digital channels.
                </p>
                <BookingButton className="relative overflow-hidden rounded-none border-2 border-white bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white">
                  <span className="relative z-10 flex items-center font-medium">
                    Claim Your Free Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </BookingButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
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
                Client Success Stories
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    name: "Alex R.",
                    company: "E-commerce Store (300% Revenue Growth)",
                    testimonial:
                      "Redesigned our digital marketing funnel and grew revenue from $50k to $200k/month in 6 months through SEO and conversion optimization.",
                  },
                  {
                    name: "Priya M.",
                    company: "SaaS Platform (5x Lead Increase)",
                    testimonial:
                      "Implemented a content marketing strategy that increased our qualified leads by 5x while reducing cost per lead by 60%.",
                  },
                  {
                    name: "James L.",
                    company: "Local Service Business (100% Bookings)",
                    testimonial:
                      "Went from struggling to get clients to fully booked with a targeted Google Ads strategy and optimized landing pages.",
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
                Ready to Transform Your Digital Presence?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10"
              >
                Book a free 30-minute digital marketing audit where we'll:
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: <Target className="h-5 w-5" />, text: "Analyze your current performance" },
                  { icon: <Hash className="h-5 w-5" />, text: "Identify your biggest opportunities" },
                  { icon: <BarChart className="h-5 w-5" />, text: "Create a roadmap for growth" },
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
                <BookingButton className="relative overflow-hidden rounded-none border-2 border-white bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white">
                  <span className="relative z-10 flex items-center font-medium">
                    Claim Your Free Audit
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
