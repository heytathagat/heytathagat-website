"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Diamond, Eye, Target, Layers, Star, ArrowRight, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"

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
                  <Diamond className="h-4 w-4 mr-2" />
                  Brand Strategy Service
                </Badge>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
                  Transform Your
                  <span className="block bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Brand Identity
                  </span>
                </h1>

                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                  Build a powerful brand strategy that differentiates you in the market, connects deeply with your
                  audience, and drives sustainable business growth through authentic storytelling.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-10 py-4 text-white font-bold text-lg transition-all hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center">
                      Book Free Strategy Call
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group rounded-full border-2 border-black bg-white px-10 py-4 text-black font-bold text-lg transition-all hover:bg-black hover:text-white hover:scale-105"
                  >
                    <span className="flex items-center">
                      View Success Stories
                      <Eye className="ml-3 h-5 w-5 transition-transform group-hover:scale-110" />
                    </span>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
                  {[
                    { value: "3x", label: "Faster Growth", icon: TrendingUp },
                    { value: "33%", label: "Revenue Boost", icon: Diamond },
                    { value: "306%", label: "Higher LTV", icon: Users },
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

        {/* Power of Branding Section */}
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
                    Strategic Impact
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">The Power of Strategic Branding</h2>
                  <p className="text-xl leading-relaxed text-gray-700">
                    A strong brand isn't just a logo - it's a comprehensive system that influences how customers
                    perceive, experience, and engage with your business at every touchpoint.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Brands with strong identities grow 3x faster than competitors",
                    "Consistent branding increases revenue by 33%",
                    "64% of consumers cite shared values as primary brand relationship driver",
                    "Emotionally connected customers have 306% higher lifetime value",
                    "Purpose-driven brands outperform the stock market by 134%",
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
                        <Diamond className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-black">Brand Impact Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: "3x", label: "Faster growth" },
                          { value: "33%", label: "Revenue increase" },
                          { value: "306%", label: "Higher LTV" },
                          { value: "134%", label: "Market outperformance" },
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

        {/* Core Elements Section */}
        <section className="py-32 md:py-40 bg-black text-white relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <Badge
                  variant="outline"
                  className="mb-6 rounded-full border-2 border-white px-6 py-2 text-sm font-bold uppercase tracking-widest text-white"
                >
                  Core Framework
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                  Essential Brand Strategy Elements
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Every successful brand is built on these fundamental pillars that work together to create lasting
                  market impact.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Eye className="h-8 w-8" />,
                    title: "Brand Identity",
                    items: ["Visual identity system", "Logo & design language", "Brand guidelines", "Tone of voice"],
                  },
                  {
                    icon: <Target className="h-8 w-8" />,
                    title: "Positioning",
                    items: [
                      "Competitive differentiation",
                      "Unique value proposition",
                      "Target audience definition",
                      "Brand archetype",
                    ],
                  },
                  {
                    icon: <Layers className="h-8 w-8" />,
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
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-3xl rotate-3 shadow-2xl"></div>
                      <div className="relative rounded-3xl border-4 border-white bg-black p-8 hover:bg-white hover:text-black transition-colors h-full">
                        <div className="space-y-6">
                          <div className="h-16 w-16 rounded-2xl border-2 border-white flex items-center justify-center group-hover:border-black transition-colors">
                            {card.icon}
                          </div>
                          <h3 className="text-2xl font-black">{card.title}</h3>
                          <ul className="space-y-3">
                            {card.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <ArrowRight className="h-5 w-5 mt-1 shrink-0" />
                                <span className="font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 text-center"
              >
                <div className="max-w-3xl mx-auto space-y-8">
                  <h3 className="text-3xl font-black">A strong brand is your most valuable business asset</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Companies that invest in strategic branding consistently outperform competitors and command premium
                    pricing in their markets.
                  </p>
                  <Button className="group relative overflow-hidden rounded-full border-2 border-white bg-white px-10 py-4 text-black font-bold text-lg transition-all hover:bg-black hover:text-white hover:scale-105">
                    <span className="relative z-10 flex items-center">
                      Build Your Brand Strategy
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transformation Stories Section */}
        <section className="py-32 md:py-40 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
              >
                <Badge
                  variant="outline"
                  className="mb-6 rounded-full border-2 border-black px-6 py-2 text-sm font-bold uppercase tracking-widest"
                >
                  Success Stories
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Brand Transformation Results</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Real businesses, real results. See how strategic branding transformed these companies.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    name: "Sophia K.",
                    company: "Luxury Skincare",
                    result: "3x Valuation Increase",
                    testimonial:
                      "Our rebrand and positioning strategy helped us move from a commodity product to a premium brand, tripling our company valuation in 18 months.",
                  },
                  {
                    name: "Rahul P.",
                    company: "Tech Startup",
                    result: "Acquired for 8x Revenue",
                    testimonial:
                      "The brand strategy work differentiated us in a crowded market and was cited as key reason for our acquisition at premium multiples.",
                  },
                  {
                    name: "Elena T.",
                    company: "Professional Services",
                    result: "50% Fee Increase",
                    testimonial:
                      "After clarifying our brand positioning and messaging, we attracted higher-value clients and increased our fees by 50% with no pushback.",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-3xl rotate-1 shadow-2xl"></div>
                      <div className="relative rounded-3xl border-4 border-black bg-white p-8 hover:bg-black hover:text-white transition-colors">
                        <div className="flex items-start gap-6">
                          <div className="h-16 w-16 rounded-2xl border-2 border-black flex items-center justify-center font-black text-lg group-hover:border-white transition-colors shrink-0">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-xl font-black">{testimonial.name}</h4>
                              <p className="font-bold text-gray-600 group-hover:text-gray-300">{testimonial.company}</p>
                              <Badge className="mt-2 bg-black text-white group-hover:bg-white group-hover:text-black">
                                {testimonial.result}
                              </Badge>
                            </div>
                            <p className="text-lg leading-relaxed italic">"{testimonial.testimonial}"</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 md:py-40 bg-black text-white relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <Badge
                  variant="outline"
                  className="mb-6 rounded-full border-2 border-white px-6 py-2 text-sm font-bold uppercase tracking-widest text-white"
                >
                  Ready to Start?
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ready to Elevate Your Brand?</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Book a free 30-minute brand strategy session where we'll analyze your current position and create a
                  roadmap for growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                {[
                  { icon: <Star className="h-6 w-6" />, text: "Assess your current brand equity" },
                  { icon: <Diamond className="h-6 w-6" />, text: "Identify differentiation opportunities" },
                  { icon: <Target className="h-6 w-6" />, text: "Outline a strategic roadmap" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-3xl rotate-3 shadow-2xl"></div>
                      <div className="relative rounded-3xl border-2 border-white p-6 hover:bg-white hover:text-black transition-colors">
                        <div className="h-12 w-12 rounded-2xl border-2 border-white flex items-center justify-center mb-4 mx-auto group-hover:border-black transition-colors">
                          {item.icon}
                        </div>
                        <p className="font-bold">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button className="group relative overflow-hidden rounded-full border-2 border-white bg-white px-12 py-5 text-black font-black text-xl transition-all hover:bg-black hover:text-white hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    Claim Your Free Strategy Session
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
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
