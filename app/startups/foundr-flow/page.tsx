"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Users, BookOpen, Lightbulb, GraduationCap, Globe, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { BookingButton } from "@/components/booking-button"

export default function FoundrFlowPage() {
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
                <Lightbulb className="h-4 w-4 mr-2" />
                EdTech Platform Case Study
              </Badge>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
                <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  Foundr Flow
                </span>
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700">
                How we built a mentorship platform connecting 5,000+ students with industry experts across 50+ colleges
                through structured, outcome-focused programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-10 py-4 text-white font-bold text-lg transition-all hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    View Live Platform
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
                    <Star className="ml-3 h-5 w-5 transition-transform group-hover:scale-110" />
                  </span>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
                {[
                  { value: "5,000+", label: "Students", icon: Users },
                  { value: "50+", label: "Colleges", icon: GraduationCap },
                  { value: "1,200+", label: "Sessions", icon: BookOpen },
                  { value: "15", label: "Countries", icon: Globe },
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

      {/* Platform Stats Section */}
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
              Platform Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Revolutionizing Student Mentorship</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connecting the next generation with industry leaders through structured, outcome-focused mentorship
              programs.
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
                icon: <Users className="h-8 w-8" />,
                value: "5,000+",
                label: "Students Engaged",
                detail: "Active learners",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                value: "50+",
                label: "Colleges Partnered",
                detail: "Institutional reach",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                value: "1,200+",
                label: "Mentorship Sessions",
                detail: "Knowledge transfer",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                value: "15",
                label: "Countries Represented",
                detail: "Global community",
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
                Genesis Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">The Genesis of Foundr Flow</h2>
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
                    Foundr Flow was born from my personal experience mentoring students at TIET and noticing a systemic
                    gap - while students had theoretical knowledge, they lacked practical guidance from industry
                    professionals.
                  </p>
                  <p>
                    Launched in March 2025, we started with just 12 mentors from my personal network. The breakthrough
                    came when we focused on structured mentorship programs rather than casual connections, creating
                    measurable outcomes for both students and mentors.
                  </p>
                  <p>
                    Our unique value proposition was "Outcome-Focused Mentorship" - every engagement had clear learning
                    objectives and success metrics, making the experience valuable for both parties.
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
                        <Lightbulb className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-black">Platform Success Metrics</h3>
                      <div className="space-y-4">
                        {[
                          { label: "Session Satisfaction", value: "4.7/5 rating" },
                          { label: "Completion Rate", value: "82% programs" },
                          { label: "Mentor Retention", value: "14 months avg" },
                        ].map((metric, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center p-3 rounded-2xl border-2 border-gray-200 hover:border-black transition-colors"
                          >
                            <span className="font-medium">{metric.label}</span>
                            <span className="font-black text-lg">{metric.value}</span>
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
                    challenge: "Engaging High-Quality Mentors",
                    solution:
                      "Created a 'Mentor Impact Score' that tracked student outcomes, giving professionals tangible proof of their influence",
                    result: "Increased mentor retention by 68%",
                  },
                  {
                    challenge: "Matching Effectiveness",
                    solution: "Developed a 3-layer matching algorithm combining skills, personality, and goals",
                    result: "Improved session satisfaction scores from 3.2 to 4.7/5",
                  },
                  {
                    challenge: "Student Commitment",
                    solution: "Implemented prep-work requirements and progress tracking to increase accountability",
                    result: "Reduced no-show rate from 32% to 8%",
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
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                Want to Build an Education Platform?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Book a strategy session to discuss how these principles can be applied to your education technology
                venture and create meaningful impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <BookingButton
                className="group relative overflow-hidden rounded-full border-2 border-white bg-white px-12 py-5 text-black font-black text-xl transition-all hover:bg-black hover:text-white hover:scale-105 hover:shadow-2xl"
                sourceContext={{ page: "foundr_flow_case_study", buttonType: "cta" }}
              >
                <span className="relative z-10 flex items-center">
                  Book Strategy Call
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </span>
              </BookingButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
