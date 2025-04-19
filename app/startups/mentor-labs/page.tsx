"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Users, BookOpen, Lightbulb, Target, GraduationCap, BarChart, Clock, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"

export default function MentorLabsPage() {
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
              Education Technology Case Study
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            >
              Mentor Labs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl"
            >
              How we built a mentorship platform connecting 5,000+ students with industry experts across 50+ colleges
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
                  View Live Platform
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

      {/* Platform Stats Section */}
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
              { icon: <Users className="h-8 w-8" />, value: "5,000+", label: "Students Engaged" },
              { icon: <GraduationCap className="h-8 w-8" />, value: "50+", label: "Colleges Partnered" },
              { icon: <BookOpen className="h-8 w-8" />, value: "1,200+", label: "Mentorship Sessions" },
              { icon: <Globe className="h-8 w-8" />, value: "15", label: "Countries Represented" },
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Genesis of Mentor Labs</h2>
              <p className="mb-6">
                Mentor Labs was born from my personal experience mentoring students at TIET and noticing a systemic gap - 
                while students had theoretical knowledge, they lacked practical guidance from industry professionals.
              </p>
              <p className="mb-6">
                Launched in March 2025, we started with just 12 mentors from my personal network. The breakthrough came 
                when we focused on structured mentorship programs rather than casual connections, creating measurable 
                outcomes for both students and mentors.
              </p>
              <p>
                Our unique value proposition was "Outcome-Focused Mentorship" - every engagement had clear learning 
                objectives and success metrics, making the experience valuable for both parties.
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
                  challenge: "Engaging High-Quality Mentors",
                  solution: "Created a 'Mentor Impact Score' that tracked student outcomes, giving professionals tangible proof of their influence",
                  result: "Increased mentor retention by 68%"
                },
                {
                  challenge: "Matching Effectiveness",
                  solution: "Developed a 3-layer matching algorithm combining skills, personality, and goals",
                  result: "Improved session satisfaction scores from 3.2 to 4.7/5"
                },
                {
                  challenge: "Student Commitment",
                  solution: "Implemented prep-work requirements and progress tracking to increase accountability",
                  result: "Reduced no-show rate from 32% to 8%"
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
              Growth Framework
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Student Acquisition",
                  icon: <GraduationCap className="h-6 w-6" />,
                  points: [
                    "Partnered with 50+ college entrepreneurship cells",
                    "Created student ambassador program with 120+ reps",
                    "Developed 'Mentorship Impact Reports' for universities"
                  ],
                  result: "Student signups grew 15% month-over-month"
                },
                {
                  title: "Mentor Engagement",
                  icon: <Users className="h-6 w-6" />,
                  points: [
                    "Built mentor certification program with LinkedIn badges",
                    "Created exclusive networking events for mentors",
                    "Developed mentor-to-mentor knowledge sharing"
                  ],
                  result: "Average mentor tenure increased to 14 months"
                },
                {
                  title: "Program Structure",
                  icon: <BookOpen className="h-6 w-6" />,
                  points: [
                    "Standardized 6-week mentorship tracks",
                    "Created specialized tracks for tech, business, and design",
                    "Implemented progress tracking and certification"
                  ],
                  result: "Program completion rate reached 82%"
                },
                {
                  title: "Technology Platform",
                  icon: <Lightbulb className="h-6 w-6" />,
                  points: [
                    "Built scheduling system with calendar integration",
                    "Created session preparation tools for both parties",
                    "Developed progress dashboards with metrics"
                  ],
                  result: "Platform NPS score of 72 (industry average 38)"
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

      {/* Impact Metrics Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-12 text-center"
            >
              Measurable Impact
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  metric: "Career Advancement",
                  icon: <Target className="h-6 w-6" />,
                  stats: "78% of students reported career benefits within 6 months"
                },
                {
                  metric: "Startup Success",
                  icon: <Lightbulb className="h-6 w-6" />,
                  stats: "32 mentee-founded startups raised funding"
                },
                {
                  metric: "Skill Development",
                  icon: <BookOpen className="h-6 w-6" />,
                  stats: "94% reported measurable skill improvement"
                },
                {
                  metric: "Mentor Satisfaction",
                  icon: <Users className="h-6 w-6" />,
                  stats: "89% of mentors renewed their commitment"
                },
                {
                  metric: "Time Efficiency",
                  icon: <Clock className="h-6 w-6" />,
                  stats: "Reduced mentor prep time by 65% with our tools"
                },
                {
                  metric: "Diversity",
                  icon: <Globe className="h-6 w-6" />,
                  stats: "Achieved 42% female participation in tech programs"
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
                    className="rounded-none border-2 border-black hover:bg-black hover:text-white transition-colors h-full"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-none border-2 border-black flex items-center justify-center group-hover:border-white">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold">{item.metric}</h3>
                      </div>
                      <p>{item.stats}</p>
                    </CardContent>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-12 text-center"
            >
              Lessons Learned
            </motion.h2>
            
            <div className="space-y-6">
              {[
                {
                  lesson: "Structure Creates Value",
                  detail: "Unlike casual mentorship platforms, our structured programs with clear outcomes attracted higher-quality mentors and more committed students."
                },
                {
                  lesson: "Dual-Sided Engagement is Critical",
                  detail: "We learned to design engagement features for both mentors and students, creating reciprocal value that sustained participation."
                },
                {
                  lesson: "Institutional Partnerships Scale Impact",
                  detail: "Working with universities rather than just individual students gave us distribution at scale while providing credibility."
                },
                {
                  lesson: "Metrics Drive Improvement",
                  detail: "Implementing our Mentor Impact Score transformed vague goodwill into measurable professional development for mentors."
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
                    className="rounded-none border-2 border-white hover:bg-white hover:text-black transition-colors"
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
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-8"
            >
              Want to Build an Education Platform?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              Book a strategy session to discuss how these principles can be applied to your education technology venture.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="relative overflow-hidden rounded-none border-2 border-black bg-black px-8 py-3 text-white transition-transform hover:bg-white hover:text-black"
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
