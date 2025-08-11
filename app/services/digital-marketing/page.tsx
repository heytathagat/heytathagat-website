"use client"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  BarChart,
  Target,
  Smartphone,
  Mail,
  Search,
  Hash,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"

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
        <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="container relative px-4 md:px-6 flex items-center min-h-screen"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-widest bg-white"
                >
                  <BarChart className="h-4 w-4 mr-2" />
                  Digital Marketing Service
                </Badge>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
                  Scale Your
                  <span className="block bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Digital Presence
                  </span>
                </h1>

                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                  Data-driven digital marketing solutions that deliver measurable results, accelerate growth, and
                  maximize your return on investment across all digital channels.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-10 py-4 text-white font-bold text-lg transition-all hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Free Marketing Audit
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group rounded-full border-2 border-black bg-white px-10 py-4 text-black font-bold text-lg transition-all hover:bg-black hover:text-white hover:scale-105"
                  >
                    <span className="flex items-center">
                      View Case Studies
                      <Search className="ml-3 h-5 w-5 transition-transform group-hover:scale-110" />
                    </span>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
                  {[
                    { value: "3x", label: "Higher ROI", icon: TrendingUp },
                    { value: "5x", label: "More Leads", icon: Target },
                    { value: "200%", label: "Conversion Boost", icon: Zap },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="h-16 w-16 mx-auto mb-3 rounded-2xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="h-8 w-8" />
                      </div>
                      <div className="text-3xl font-black text-black">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Why Digital Marketing Matters Section */}
        <section className="py-32 md:py-40 relative overflow-hidden bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <Badge
                    variant="outline"
                    className="rounded-full border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-widest"
                  >
                    Digital Growth
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">Why Digital Marketing Matters</h2>
                  <p className="text-xl leading-relaxed text-gray-700">
                    In today's digital-first world, having a strategic online presence isn't optional - it's essential
                    for reaching your customers and driving sustainable business growth.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "97% of consumers search online before making purchases",
                    "Digital marketing delivers 3x better ROI than traditional marketing",
                    "Businesses using data-driven strategies grow 5x faster",
                    "Personalized campaigns increase conversions by 200%",
                    "Omnichannel customers spend 30% more than single-channel",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white border-2 border-gray-200 hover:border-black transition-colors group"
                    >
                      <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-3xl rotate-6 shadow-2xl"></div>
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-3xl border-4 border-black bg-white p-8 shadow-xl"
                  >
                    <div className="text-center space-y-6">
                      <div className="h-20 w-20 rounded-2xl bg-black flex items-center justify-center mx-auto">
                        <BarChart className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-black">Marketing Impact</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: "3x", label: "Higher ROI" },
                          { value: "5x", label: "More leads" },
                          { value: "200%", label: "Conversion boost" },
                          { value: "30%", label: "Lower CAC" },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            className="p-4 rounded-2xl border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all group"
                          >
                            <div className="text-3xl font-black">{stat.value}</div>
                            <div className="text-sm font-medium opacity-80 group-hover:opacity-100">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
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
                <Button className="relative overflow-hidden rounded-none border-2 border-white bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white">
                  <span className="relative z-10 flex items-center font-medium">
                    Claim Your Free Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
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
                <Button className="relative overflow-hidden rounded-none border-2 border-white bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white">
                  <span className="relative z-10 flex items-center font-medium">
                    Claim Your Free Audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
