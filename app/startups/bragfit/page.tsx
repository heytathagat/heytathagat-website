"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Truck, Shirt, Users, TrendingUp, DollarSign, Globe, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"

export default function BragfitPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="flex flex-col">
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
              <Link href="/#startups">
                <Button
                  variant="outline"
                  className="group mb-6 rounded-full border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all hover:scale-105"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Startups
                </Button>
              </Link>

              <Badge
                variant="outline"
                className="inline-flex items-center rounded-full border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-widest bg-white"
              >
                <Shirt className="h-4 w-4 mr-2" />
                Fashion Startup Case Study
              </Badge>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
                <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Bragfit</span>
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                How we built a premium custom clothing brand that scaled to $2.2M ARR in 18 months through strategic
                positioning and customer-centric innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-10 py-4 text-white font-bold text-lg transition-all hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    View Live Site
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group rounded-full border-2 border-black bg-white px-10 py-4 text-black font-bold text-lg transition-all hover:bg-black hover:text-white hover:scale-105"
                >
                  <span className="flex items-center">
                    Key Takeaways
                    <Target className="ml-3 h-5 w-5 transition-transform group-hover:scale-110" />
                  </span>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
                {[
                  { value: "$2.2M", label: "Annual Revenue", icon: DollarSign },
                  { value: "18", label: "Months to Scale", icon: TrendingUp },
                  { value: "10K+", label: "Customers", icon: Users },
                  { value: "PAN India", label: "Coverage", icon: Globe },
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
                    <div className="text-2xl md:text-3xl font-black text-black">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Company Stats Section */}
      <section className="py-32 md:py-40 bg-black text-white relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-6 rounded-full border-2 border-white px-6 py-2 text-sm font-bold uppercase tracking-widest text-white"
            >
              Success Metrics
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Transforming Fashion Through Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From a bootstrapped startup to a multi-million dollar fashion brand in record time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                icon: <DollarSign className="h-8 w-8" />,
                value: "$2.2M",
                label: "Annual Revenue",
                detail: "Bootstrapped growth",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                value: "18",
                label: "Months to Scale",
                detail: "Record timeline",
              },
              {
                icon: <Users className="h-8 w-8" />,
                value: "10K+",
                label: "Customers Served",
                detail: "Loyal community",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                value: "PAN India",
                label: "Delivery Coverage",
                detail: "National reach",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-3xl rotate-3 shadow-2xl"></div>
                <div className="relative rounded-3xl border-2 border-white p-8 text-center hover:bg-white hover:text-black transition-colors">
                  <div className="h-16 w-16 rounded-2xl border-2 border-white flex items-center justify-center mb-6 mx-auto group-hover:border-black transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-lg font-bold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-80 group-hover:opacity-100">{stat.detail}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-32 md:py-40 relative overflow-hidden bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
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
                Origin Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">The Founding Story</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    Bragfit was born from a simple observation: while the fashion market was saturated with
                    mass-produced clothing, there was a growing demand for personalized, high-quality apparel that
                    allowed individuals to express their unique style.
                  </p>
                  <p>
                    In September 2021, with no formal fashion background but a clear vision, I launched Bragfit as a
                    bootstrapped operation from Sangrur, Punjab. The initial capital was just ₹50,000 ($600) - enough
                    for samples and a basic website.
                  </p>
                  <p>
                    Our breakthrough came when we focused on three key differentiators: premium fabrics, true
                    customization (not just printed designs), and a customer experience that made people feel like
                    fashion designers.
                  </p>
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
                  <div className="relative rounded-3xl border-4 border-black bg-white p-8 shadow-xl">
                    <div className="text-center space-y-6">
                      <div className="h-20 w-20 rounded-2xl bg-black flex items-center justify-center mx-auto">
                        <Shirt className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-black">Key Success Factors</h3>
                      <div className="space-y-4">
                        {[
                          { label: "Premium Positioning", value: "3x industry average" },
                          { label: "Customer Retention", value: "85% repeat rate" },
                          { label: "Production Efficiency", value: "35% time reduction" },
                        ].map((factor, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 rounded-2xl border-2 border-gray-200 hover:border-black transition-colors"
                          >
                            <span className="font-medium">{factor.label}</span>
                            <span className="font-black text-lg">{factor.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <h3 className="text-3xl font-black mb-12 text-center">Key Challenges & Solutions</h3>

              <div className="space-y-8">
                {[
                  {
                    challenge: "Consumer Trust in Custom Clothing",
                    solution:
                      "Implemented a 'Design Preview' tool and 100% satisfaction guarantee to reduce purchase anxiety",
                    result: "Increased conversion rate by 47%",
                  },
                  {
                    challenge: "Scaling Custom Production",
                    solution:
                      "Developed a modular manufacturing system allowing customization without sacrificing efficiency",
                    result: "Reduced production time by 35% while maintaining quality",
                  },
                  {
                    challenge: "Differentiating in Crowded Market",
                    solution:
                      "Positioned as 'Bespoke Fashion for Everyday Wear' with focus on fabric quality over fast fashion",
                    result: "Achieved 3x industry average price point with 85% retention rate",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-3xl rotate-1 shadow-2xl"></div>
                    <div className="relative rounded-3xl border-4 border-black bg-white p-8 hover:bg-black hover:text-white transition-colors">
                      <h4 className="text-xl font-black mb-4">{item.challenge}</h4>
                      <p className="mb-4 leading-relaxed">
                        <span className="font-bold">Solution:</span> {item.solution}
                      </p>
                      <Badge className="bg-black text-white group-hover:bg-white group-hover:text-black">
                        Result: {item.result}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Strategy Section */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-12"
            >
              Growth Strategy & Key Decisions
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Customer Acquisition",
                  icon: <Users className="h-6 w-6" />,
                  points: [
                    "Leveraged Instagram influencers in micro-niches (artists, fitness, entrepreneurs)",
                    "Developed referral program with 25% discount for both parties",
                    "Focus on customer-generated content (CGC) for social proof",
                  ],
                  result: "CAC reduced from ₹2,500 to ₹1,200 over 12 months",
                },
                {
                  title: "Product Expansion",
                  icon: <Shirt className="h-6 w-6" />,
                  points: [
                    "Started with just t-shirts, expanded to 12 product categories",
                    "Introduced seasonal limited editions to drive urgency",
                    "Added 'Design Collaborations' with emerging artists",
                  ],
                  result: "Average order value increased from ₹1,899 to ₹3,450",
                },
                {
                  title: "Operational Scaling",
                  icon: <Truck className="h-6 w-6" />,
                  points: [
                    "Partnered with regional fabric suppliers for better margins",
                    "Implemented inventory management system for custom pieces",
                    "Established 3 regional production hubs across India",
                  ],
                  result: "Fulfillment time reduced from 14 to 7 days",
                },
                {
                  title: "Brand Building",
                  icon: <TrendingUp className="h-6 w-6" />,
                  points: [
                    "Positioned as 'The Anti-Fast Fashion Brand'",
                    "Developed strong visual identity with signature packaging",
                    "Created 'Bragfit Stories' showcasing customer journeys",
                  ],
                  result: "Brand search volume grew 320% in 2023",
                },
              ].map((strategy, index) => (
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
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-none border-2 border-white flex items-center justify-center group-hover:border-black">
                          {strategy.icon}
                        </div>
                        <h3 className="text-xl font-bold">{strategy.title}</h3>
                      </div>
                      <ul className="space-y-3 mb-4">
                        {strategy.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3">
                            <ArrowRight className="h-4 w-4 mt-1 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="font-medium">Result: {strategy.result}</div>
                    </CardContent>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
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
              Key Lessons Learned
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  lesson: "Premium Positioning Creates Loyalty",
                  detail:
                    "By charging 2-3x market average but delivering exceptional quality and experience, we built a passionate customer base that became brand advocates.",
                },
                {
                  lesson: "Customization Scales With Systems",
                  detail:
                    "Developed a 'Customization Framework' that balanced infinite design options with production efficiency through smart constraints.",
                },
                {
                  lesson: "Fashion Tech is Underleveraged",
                  detail:
                    "Invested early in AR try-on and design tools that reduced returns by 28% and increased average order value by 19%.",
                },
                {
                  lesson: "Bootstrapping Forces Creativity",
                  detail:
                    "Without VC funding, we developed innovative customer financing options (like 'Pay in 3') that actually improved cash flow.",
                },
              ].map((item, index) => (
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
                      <h3 className="text-xl font-bold mb-3">{item.lesson}</h3>
                      <p>{item.detail}</p>
                    </CardContent>
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
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Want to Build Your Fashion Brand?</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Book a strategy session to discuss how these principles can be applied to your apparel business and
                accelerate your path to success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <Button className="group relative overflow-hidden rounded-full border-2 border-white bg-white px-12 py-5 text-black font-black text-xl transition-all hover:bg-black hover:text-white hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center">
                  Book Strategy Call
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
