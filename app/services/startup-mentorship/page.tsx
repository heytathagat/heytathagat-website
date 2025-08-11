"use client"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Briefcase, Users, Rocket, TrendingUp, ArrowRight, Target, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { BookingButton } from "@/components/booking-button"

export default function StartupMentorshipPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="flex min-h-screen flex-col bg-white font-montserrat">
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
                  <Rocket className="h-4 w-4 mr-2" />
                  Startup Mentorship Service
                </Badge>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
                  Launch Your
                  <span className="block bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                    Startup Success
                  </span>
                </h1>

                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                  Get the strategic advantage you need to build, launch, and scale your startup successfully with proven
                  frameworks and expert guidance.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <BookingButton
                    size="lg"
                    className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-10 py-4 text-white font-bold text-lg transition-all hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
                    sourceContext={{ page: "startup_mentorship", buttonType: "primary_cta" }}
                  >
                    <span className="relative z-10 flex items-center">
                      Book Free Strategy Session
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </BookingButton>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group rounded-full border-2 border-black bg-white px-10 py-4 text-black font-bold text-lg transition-all hover:bg-black hover:text-white hover:scale-105"
                  >
                    <span className="flex items-center">
                      View Success Stories
                      <Star className="ml-3 h-5 w-5 transition-transform group-hover:scale-110" />
                    </span>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
                  {[
                    { value: "7x", label: "More Funding", icon: TrendingUp },
                    { value: "3.5x", label: "Higher Survival", icon: Target },
                    { value: "85%", label: "Faster Launch", icon: Rocket },
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

        {/* Why Mentorship Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Every Founder Needs a Mentor</h2>
                <p className="mb-6">
                  The startup journey is filled with challenges that can make or break your business. With the right
                  guidance, you can avoid costly mistakes and accelerate your path to success.
                </p>
                <ul className="space-y-4">
                  {[
                    "90% of startups fail - don't become a statistic",
                    "Mentored startups raise 7x more funding",
                    "Get to market 30% faster with proven frameworks",
                    "Access networks that would take years to build",
                    "Learn from someone who's been in your shoes",
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
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-6">Startup Success Factors</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "7x", label: "More funding raised" },
                      { value: "3.5x", label: "Higher survival rate" },
                      { value: "85%", label: "Faster to market" },
                      { value: "60%", label: "Higher valuation" },
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

        {/* Startup Truths Section */}
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
                The Hard Truth About Startups
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: "Funding Reality",
                    stats: [
                      { value: "90%", label: "of startups fail to raise Series A" },
                      { value: "3%", label: "get VC funding" },
                      { value: "7x", label: "more likely with mentor" },
                    ],
                  },
                  {
                    icon: <Briefcase className="h-6 w-6" />,
                    title: "Failure Rates",
                    stats: [
                      { value: "90%", label: "of startups fail" },
                      { value: "42%", label: "fail due to no market need" },
                      { value: "3.5x", label: "better survival with guidance" },
                    ],
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: "Growth Metrics",
                    stats: [
                      { value: "85%", label: "faster to market" },
                      { value: "60%", label: "higher valuation" },
                      { value: "2x", label: "more likely to exit" },
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
                <h3 className="text-xl font-bold mb-4">These numbers don't have to be your reality</h3>
                <p className="mb-8 max-w-2xl mx-auto">
                  With proper guidance, you can significantly improve your odds of success. My mentored startups
                  consistently outperform these industry averages.
                </p>
                <BookingButton
                  className="relative overflow-hidden rounded-none border-2 border-white bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white"
                  sourceContext={{ page: "startup_mentorship", buttonType: "secondary_cta" }}
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
                Success Stories
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    name: "Sarah K.",
                    company: "EcoPack Solutions ($2M ARR)",
                    testimonial:
                      "Was struggling to get traction until we refined our positioning. Went from $0 to $2M ARR in 18 months with Tathagat's guidance.",
                  },
                  {
                    name: "Raj P.",
                    company: "TechFlow AI (Acquired)",
                    testimonial:
                      "The fundraising strategies helped us secure $1.2M seed round. Company was acquired 2 years later for $15M.",
                  },
                  {
                    name: "Michelle T.",
                    company: "HealthTrack ($500k MRR)",
                    testimonial:
                      "Pivoted our customer acquisition approach and grew from $10k to $500k MRR in 9 months with the growth frameworks.",
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
                Ready to Beat the Odds?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10"
              >
                Book a free 30-minute startup strategy session where we'll:
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  "Analyze your biggest challenges",
                  "Identify your key leverage points",
                  "Create an action plan to move forward",
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
                      <span>{index + 1}</span>
                    </div>
                    <p>{item}</p>
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
                  sourceContext={{ page: "startup_mentorship", buttonType: "secondary_cta" }}
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
