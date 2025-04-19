"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, ShoppingBag, Truck, CreditCard, Shirt, Users, TrendingUp, DollarSign, Globe } from "lucide-react"
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
      <section ref={heroRef} className="relative min-h-[80vh] overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-grid"></div>
        
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container relative px-4 md:px-6"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link href="/#startups">
              <Button 
                variant="outline" 
                className="mb-4 rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Startups
              </Button>
            </Link>
            <Badge className="mb-4 rounded-none border-2 border-black bg-black text-white hover:bg-black">
              Startup Case Study
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            >
              Bragfit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl"
            >
              How we built a premium custom clothing brand that scaled to $2.2M ARR in 18 months
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="relative overflow-hidden rounded-none border-2 border-black bg-black px-8 py-3 text-white transition-transform hover:bg-white hover:text-black"
              >
                <span className="relative z-10 flex items-center font-medium">
                  View Live Site
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="relative overflow-hidden rounded-none border-2 border-black bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white"
              >
                <span className="relative z-10 flex items-center font-medium">
                  Key Takeaways
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Company Stats Section */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: <DollarSign className="h-8 w-8" />, value: "$2.2M", label: "Annual Revenue" },
              { icon: <TrendingUp className="h-8 w-8" />, value: "18", label: "Months to Scale" },
              { icon: <Users className="h-8 w-8" />, value: "10K+", label: "Customers Served" },
              { icon: <Globe className="h-8 w-8" />, value: "PAN India", label: "Delivery Coverage" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-none border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-colors"
              >
                <div className="h-16 w-16 rounded-none border-2 border-white flex items-center justify-center mb-4 mx-auto group-hover:border-black">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Founding Story</h2>
              <p className="mb-6">
                Bragfit was born from a simple observation: while the fashion market was saturated with mass-produced clothing, 
                there was a growing demand for personalized, high-quality apparel that allowed individuals to express their unique style.
              </p>
              <p className="mb-6">
                In September 2021, with no formal fashion background but a clear vision, I launched Bragfit as a bootstrapped 
                operation from Sangrur, Punjab. The initial capital was just ₹50,000 ($600) - enough for samples and a basic website.
              </p>
              <p>
                Our breakthrough came when we focused on three key differentiators: premium fabrics, true customization (not just 
                printed designs), and a customer experience that made people feel like fashion designers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-bold">Key Challenges & Solutions</h3>
              
              {[
                {
                  challenge: "Consumer Trust in Custom Clothing",
                  solution: "Implemented a 'Design Preview' tool and 100% satisfaction guarantee to reduce purchase anxiety",
                  result: "Increased conversion rate by 47%"
                },
                {
                  challenge: "Scaling Custom Production",
                  solution: "Developed a modular manufacturing system allowing customization without sacrificing efficiency",
                  result: "Reduced production time by 35% while maintaining quality"
                },
                {
                  challenge: "Differentiating in Crowded Market",
                  solution: "Positioned as 'Bespoke Fashion for Everyday Wear' with focus on fabric quality over fast fashion",
                  result: "Achieved 3x industry average price point with 85% retention rate"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-none border-2 border-black p-6 hover:bg-black hover:text-white transition-colors"
                >
                  <h4 className="font-bold mb-2">{item.challenge}</h4>
                  <p className="mb-3"><span className="font-semibold">Solution:</span> {item.solution}</p>
                  <p className="font-medium">Result: {item.result}</p>
                </motion.div>
              ))}
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
                    "Focus on customer-generated content (CGC) for social proof"
                  ],
                  result: "CAC reduced from ₹2,500 to ₹1,200 over 12 months"
                },
                {
                  title: "Product Expansion",
                  icon: <Shirt className="h-6 w-6" />,
                  points: [
                    "Started with just t-shirts, expanded to 12 product categories",
                    "Introduced seasonal limited editions to drive urgency",
                    "Added 'Design Collaborations' with emerging artists"
                  ],
                  result: "Average order value increased from ₹1,899 to ₹3,450"
                },
                {
                  title: "Operational Scaling",
                  icon: <Truck className="h-6 w-6" />,
                  points: [
                    "Partnered with regional fabric suppliers for better margins",
                    "Implemented inventory management system for custom pieces",
                    "Established 3 regional production hubs across India"
                  ],
                  result: "Fulfillment time reduced from 14 to 7 days"
                },
                {
                  title: "Brand Building",
                  icon: <TrendingUp className="h-6 w-6" />,
                  points: [
                    "Positioned as 'The Anti-Fast Fashion Brand'",
                    "Developed strong visual identity with signature packaging",
                    "Created 'Bragfit Stories' showcasing customer journeys"
                  ],
                  result: "Brand search volume grew 320% in 2023"
                }
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
                  detail: "By charging 2-3x market average but delivering exceptional quality and experience, we built a passionate customer base that became brand advocates."
                },
                {
                  lesson: "Customization Scales With Systems",
                  detail: "Developed a 'Customization Framework' that balanced infinite design options with production efficiency through smart constraints."
                },
                {
                  lesson: "Fashion Tech is Underleveraged",
                  detail: "Invested early in AR try-on and design tools that reduced returns by 28% and increased average order value by 19%."
                },
                {
                  lesson: "Bootstrapping Forces Creativity",
                  detail: "Without VC funding, we developed innovative customer financing options (like 'Pay in 3') that actually improved cash flow."
                }
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
              Want to Build Your Fashion Brand?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              Book a strategy session to discuss how these principles can be applied to your apparel business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="relative overflow-hidden rounded-none border-2 border-white bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white"
              >
                <span className="relative z-10 flex items-center font-medium">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
