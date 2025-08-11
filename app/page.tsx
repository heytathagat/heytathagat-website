"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { SectionHeading } from "@/components/section-heading"
import { LetterReveal } from "@/components/letter-reveal"
import { DynamicText } from "@/components/dynamic-text"
import { MarqueeText } from "@/components/marquee-text"
import { submitContactForm } from "@/app/actions"
import {
  ArrowRight,
  Users,
  Award,
  Youtube,
  Newspaper,
  Briefcase,
  MessageSquare,
  Laptop,
  ChevronRight,
  Building,
  School,
  Mail,
  MapPin,
  Star,
  Zap,
  Target,
  TrendingUp,
  Clock,
} from "lucide-react"

export default function Home() {
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const experienceData = [
    {
      title: "Director",
      company: "Bragfit",
      period: "September 2021 - Present",
      location: "Sangrur, Punjab, India",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Principal Mentor",
      company: "Microsoft Learn Student Chapter, TIET",
      period: "March 2025 - Present",
      location: "Patiala, Punjab, India",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Outreach Advisor",
      company: "Glyptika Studios",
      period: "February 2025 - Present",
      location: "Patiala, Punjab, India",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Mentor",
      company: "IEEE Student Branch Amity University Rajasthan",
      period: "November 2024 - Present",
      location: "Jaipur, Rajasthan, India",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Mentor",
      company: "Entrepreneurship-Cell, Amity Innovation Incubator",
      period: "November 2024 - Present",
      location: "Jaipur, Rajasthan, India",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Director",
      company: "PYOB",
      period: "September 2024 - Present",
      location: "Gurugram, Haryana, India",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "YouTuber",
      company: "YouTube",
      period: "September 2016 - February 2025",
      location: "India",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      title: "Owner",
      company: "Tech Stockerzz",
      period: "March 2020 - May 2024",
      location: "India",
      icon: <Laptop className="h-5 w-5" />,
    },
    {
      title: "Freelancer",
      company: "Self Employed",
      period: "November 2016 - March 2020",
      location: "India",
      icon: <Briefcase className="h-5 w-5" />,
    },
  ]

  const achievements = [
    "Nominated for Bharat Business Awards",
    "Scaled my business to 2.2M USD annually bootstrapped",
    "Featured in 11+ news websites including RNI NEWS, DAILY Hunt, The News Bulletin, and more",
    "MENTOR at Startup India",
    "Mentor at Startup Punjab",
    "Member for Google For Startups",
  ]

  const skills = [
    { name: "Social Media", level: 95 },
    { name: "Search Engine Marketing (SEM)", level: 90 },
    { name: "Search Engine Optimization (SEO)", level: 92 },
    { name: "Affiliate Marketing", level: 88 },
    { name: "Branding", level: 94 },
    { name: "Digital Strategy", level: 91 },
    { name: "Content Development", level: 89 },
  ]

  const testimonials = [
    {
      name: "Arsh Chatrath",
      company: "Talkeys",
      testimonial:
        "Tathagat's strategic insights transformed our marketing approach completely. His ability to identify growth opportunities and implement effective strategies helped us increase our customer acquisition by 150% in just three months. His mentorship has been invaluable to our success.",
    },
    {
      name: "Jairaj Singh Alhuwalia",
      company: "Glyptika Studios",
      testimonial:
        "Working with Tathagat has been a game-changer for our studio. His deep understanding of brand positioning and digital marketing helped us establish a strong market presence. His hands-on approach and commitment to our success made all the difference in scaling our operations.",
    },
    {
      name: "Ansh Bansal",
      company: "SwarnAI",
      testimonial:
        "Tathagat's mentorship came at a critical time for our startup. His practical advice on growth strategies and customer acquisition helped us navigate challenging market conditions. His ability to simplify complex business problems into actionable steps is truly remarkable.",
    },
    {
      name: "Sidhant Kumar",
      company: "Mercedes India",
      testimonial:
        "I've worked with many consultants, but Tathagat stands out for his innovative thinking and results-driven approach. His strategies for our digital campaigns exceeded our expectations, delivering a 200% ROI. His expertise in brand positioning and market analysis is exceptional.",
    },
  ]

  return (
    <>
      <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container relative px-4 md:px-6"
        >
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center min-h-[80vh]">
            <div className="space-y-10 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Badge
                  variant="outline"
                  className="inline-flex items-center rounded-full border-2 border-black px-4 py-2 text-sm font-semibold uppercase tracking-widest bg-white"
                >
                  <Zap className="h-3 w-3 mr-2" />
                  Entrepreneur & Growth Strategist
                </Badge>

                <div className="space-y-6">
                  <LetterReveal
                    text="TATHAGAT KUMAR"
                    className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none"
                  />
                  <div className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-800">
                    <DynamicText
                      words={["Growth Strategist", "Tech Catalyst", "Brand Alchemist", "Digital Marketer"]}
                      interval={2500}
                    />
                  </div>
                  <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-700">
                    Transforming ambitious visions into market-leading realities. I help entrepreneurs and businesses
                    scale through strategic innovation, data-driven growth, and authentic brand storytelling.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-10 py-4 text-white font-semibold text-lg transition-all hover:bg-white hover:text-black hover:scale-105"
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Explore My Work
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>

                <Link href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group rounded-full border-2 border-black bg-white px-10 py-4 text-black font-semibold text-lg transition-all hover:bg-black hover:text-white hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      Let's Connect
                      <Target className="ml-3 h-5 w-5 transition-transform group-hover:rotate-90" />
                    </span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-6 pt-6"
              >
                <div className="flex -space-x-3">
                  <div className="h-12 w-12 rounded-full bg-black border-2 border-white flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    11+
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white border-2 border-black flex items-center justify-center text-black font-bold text-sm shadow-lg">
                    <Star className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-sm leading-relaxed">
                  <span className="font-bold text-black">Featured in 11+ news websites</span>
                  <br />
                  <span className="text-gray-600">Recognized for innovation and market impact</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mx-auto lg:mx-0 order-1 lg:order-2"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black to-gray-800 rotate-6 shadow-2xl"></div>
                <div className="absolute inset-0 rounded-3xl border-4 border-black bg-white shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250321-191550.Photos.jpg-r4xC8FcEfMz3i7yjnTaFfu0WTYdhQF.jpeg"
                    alt="Tathagat Kumar"
                    width={400}
                    height={400}
                    className="object-cover rounded-2xl w-full h-full"
                    priority
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-black text-white rounded-2xl p-4 shadow-2xl border-4 border-white"
                >
                  <div className="text-xs font-bold uppercase tracking-widest">Experience</div>
                  <div className="text-3xl font-black">8+ Years</div>
                  <div className="text-xs opacity-80">Building & Scaling</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t-2 border-gray-200"
          >
            {[
              { icon: Users, label: "50+ Colleges Mentored", value: "50+" },
              { icon: Award, label: "MLH Hackathons Judged", value: "5+" },
              { icon: Youtube, label: "Years as YouTuber", value: "8+" },
              { icon: TrendingUp, label: "News Features", value: "11+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-2xl font-black text-black">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-12 w-12 rounded-full border-2 border-black bg-white flex items-center justify-center">
            <ArrowRight className="h-6 w-6 rotate-90" />
          </div>
        </div>
      </section>

      <section className="py-6 bg-black text-white overflow-hidden">
        <MarqueeText speed={40} className="text-2xl md:text-3xl font-black py-4 tracking-wider">
          GROWTH STRATEGIST • TECH CATALYST • BRAND ALCHEMIST • DIGITAL MARKETER • ENTREPRENEUR • INNOVATION LEADER •
          STARTUP MENTOR • BUSINESS STRATEGIST • GROWTH STRATEGIST • TECH CATALYST • BRAND ALCHEMIST
        </MarqueeText>
      </section>

      <section id="about" className="py-32 md:py-40 relative overflow-hidden bg-gray-50">
        <div className="container px-4 md:px-6">
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
              About Me
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">My Journey & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From founding ventures to mentoring the next generation of entrepreneurs across the globe.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="rounded-3xl border-2 border-black shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-black mr-4"></div>
                    My Background
                  </h3>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      I am a driven entrepreneur with a proven track record of building and scaling ventures that make
                      an impact. As the Director of PYOB and Bragfit, I lead initiatives that drive growth, innovation,
                      and brand success, leveraging my expertise in affiliate marketing, branding, and digital strategy.
                    </p>
                    <p className="text-lg">
                      My entrepreneurial journey includes founding Tech Stockerzz, where I spent 4+ years mastering
                      content development, SEO, and digital marketing. This experience taught me the importance of
                      adaptability, creativity, and data-driven decision-making in building successful businesses.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-2 border-black shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-black mr-4"></div>
                    Skills & Expertise
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">{skill.name}</span>
                          <span className="font-black text-xl">{skill.level}%</span>
                        </div>
                        <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-black to-gray-700 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="rounded-3xl border-2 border-black shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-black mr-4"></div>
                    Achievements
                  </h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group rounded-2xl border-2 border-gray-200 p-6 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <Award className="h-6 w-6 mt-1 shrink-0 group-hover:text-white" />
                          <p className="font-medium leading-relaxed">{achievement}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-2 border-black shadow-xl bg-black text-white overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-black mb-6 flex items-center text-white">
                    <div className="h-8 w-8 rounded-full bg-white mr-4"></div>
                    Impact Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Colleges Mentored", value: "50+", icon: Users },
                      { label: "Media Features", value: "11+", icon: Newspaper },
                      { label: "YouTube Experience", value: "8+ yrs", icon: Youtube },
                      { label: "Hackathons Judged", value: "5+", icon: Award },
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center p-4 rounded-2xl border-2 border-white hover:bg-white hover:text-black transition-all group"
                      >
                        <metric.icon className="h-8 w-8 mx-auto mb-3 group-hover:text-black" />
                        <div className="text-3xl font-black mb-1">{metric.value}</div>
                        <div className="text-sm font-medium opacity-80 group-hover:opacity-100">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-black text-white">
        <div className="container px-4 md:px-6 relative">
          <SectionHeading
            badge="Experience"
            title="Professional Journey"
            description="A timeline of my entrepreneurial and professional experiences."
          />

          <div className="mx-auto max-w-4xl mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white opacity-30"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 mb-12 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse text-right" : ""
                }`}
              >
                <div className="md:w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.2 }}
                    className="h-6 w-6 rounded-full bg-white border-2 border-black"
                  ></motion.div>
                </div>
                <div className="md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-none border-2 border-white bg-black hover:bg-white hover:text-black transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? "justify-end" : ""}`}>
                        <div className="h-10 w-10 rounded-none border-2 border-white flex items-center justify-center">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="font-bold">{exp.title}</h3>
                          <p>{exp.company}</p>
                        </div>
                      </div>
                      <div className={`mt-3 space-y-1 ${index % 2 === 0 ? "text-right" : ""}`}>
                        <p className="text-sm">{exp.period}</p>
                        <p className="text-sm opacity-70">{exp.location}</p>
                      </div>
                    </CardContent>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <SectionHeading
            badge="Services"
            title="How I Can Help You"
            description="Leveraging my expertise to help your business grow and succeed."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-16">
            {[
              {
                icon: <Users className="h-10 w-10 mb-4" />,
                title: "Startup Mentorship",
                description: "Guidance for entrepreneurs to navigate challenges in building and scaling startups.",
                features: ["Business model validation", "Growth strategy development", "Team building & leadership"],
                link: "/services/startup-mentorship",
              },
              {
                icon: <Briefcase className="h-10 w-10 mb-4" />,
                title: "Brand Strategy",
                description: "Comprehensive brand development and positioning for maximum market impact.",
                features: ["Brand identity creation", "Market positioning", "Audience targeting"],
                link: "/services/brand-strategy",
              },
              {
                icon: <Laptop className="h-10 w-10 mb-4" />,
                title: "Digital Marketing",
                description: "Data-driven digital marketing strategies to boost your online presence and conversions.",
                features: ["SEO & SEM optimization", "Social media strategy", "Content marketing"],
                link: "/services/digital-marketing",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative overflow-hidden rounded-none border-2 border-black h-full group hover:bg-black hover:text-white transition-colors"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-black group-hover:bg-white"></div>
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="h-12 w-12 rounded-none border-2 border-black flex items-center justify-center mb-4 group-hover:border-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="mb-4 flex-grow">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full mt-auto rounded-none border-2 border-black text-black hover:bg-black hover:text-white group-hover:border-white group-hover:text-black group-hover:bg-white transition-colors bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colleges Section */}
      <section id="colleges" className="py-24 md:py-32 relative overflow-hidden bg-black text-white">
        <div className="container px-4 md:px-6">
          <SectionHeading
            badge="Education"
            title="Colleges I Am Mentoring"
            description="Empowering the next generation of entrepreneurs and innovators."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-16">
            {[
              {
                name: "TIET Patiala",
                logo: "/images/thapar-logo.png",
                description:
                  "Providing mentorship to engineering students at one of India's premier technical institutions, focusing on entrepreneurship and innovation.",
              },
              {
                name: "Amity University Rajasthan",
                logo: "/images/amity-logo.svg",
                description:
                  "Working with students at Amity's innovation incubator to develop entrepreneurial mindsets and launch successful startups.",
              },
            ].map((college, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-none border-2 border-white bg-black hover:bg-white hover:text-black transition-colors overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-32 w-32 relative mb-4">
                        <Image
                          src={college.logo || "/placeholder.svg"}
                          alt={`${college.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{college.name}</h3>
                      <p>{college.description}</p>
                    </div>
                  </CardContent>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="startups" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <SectionHeading
            badge="Ventures"
            title="Startups I Am Building"
            description="Innovative ventures that are disrupting industries and creating value."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-16">
            {[
              {
                name: "Bragfit",
                description:
                  "A custom clothing brand that combines style, comfort, and personalization to create unique fashion experiences.",
                icon: <Building className="h-16 w-16" />,
                link: "/startups/bragfit",
              },
              {
                name: "Foundr Flow",
                description:
                  "A mentorship platform connecting students with industry experts to foster innovation and entrepreneurship.",
                icon: <School className="h-16 w-16" />,
                link: "/startups/foundr-flow",
              },
            ].map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-none border-2 border-black h-full hover:bg-black hover:text-white transition-colors"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="h-24 w-24 rounded-none border-2 border-black flex items-center justify-center mb-4 group-hover:border-white transition-colors">
                      {startup.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
                    <p className="flex-grow">{startup.description}</p>
                    <Link href={startup.link}>
                      <Button className="mt-6 bg-black text-white rounded-none hover:bg-white hover:text-black border-2 border-black">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-black text-white">
        <div className="container px-4 md:px-6">
          <SectionHeading
            badge="Testimonials"
            title="What Clients Say"
            description="Hear from the entrepreneurs and businesses I've worked with."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-16">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-none border-2 border-white bg-black hover:bg-white hover:text-black transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="absolute -top-4 -left-4 text-5xl opacity-20">"</div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-14 w-14 rounded-none border-2 border-white flex items-center justify-center font-bold">
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm">{item.company}</p>
                      </div>
                    </div>
                    <p className="italic">"{item.testimonial}"</p>
                  </CardContent>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 border-4 border-black rotate-12" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-black -rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-black rotate-45" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block p-4 bg-black text-white rounded-full mb-6"
            >
              <Mail className="h-8 w-8" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              LET'S{" "}
              <span className="relative">
                CONNECT
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute bottom-2 left-0 h-2 bg-black"
                />
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how we can work together to achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl border-4 border-black shadow-2xl p-8 relative overflow-hidden"
              >
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you within 24 hours.</p>
                </div>

                <form action={submitContactForm} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="first-name"
                        className="text-sm font-bold leading-none uppercase tracking-wider text-gray-700"
                      >
                        First name *
                      </label>
                      <input
                        id="first-name"
                        name="first-name"
                        className="flex h-12 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300"
                        placeholder="Enter your first name"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="last-name"
                        className="text-sm font-bold leading-none uppercase tracking-wider text-gray-700"
                      >
                        Last name *
                      </label>
                      <input
                        id="last-name"
                        name="last-name"
                        className="flex h-12 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300"
                        placeholder="Enter your last name"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="email"
                      className="text-sm font-bold leading-none uppercase tracking-wider text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="flex h-12 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="company"
                      className="text-sm font-bold leading-none uppercase tracking-wider text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="flex h-12 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="message"
                      className="text-sm font-bold leading-none uppercase tracking-wider text-gray-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[140px] w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 resize-none"
                      placeholder="Tell me about your business goals and how I can help you achieve them..."
                      required
                    ></textarea>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Button
                      type="submit"
                      className="group w-full bg-black text-white rounded-xl hover:bg-gray-800 border-2 border-black transition-all duration-300 h-14 text-lg font-bold hover:scale-105 hover:shadow-xl"
                      size="lg"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Send Message
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </motion.div>
                </form>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full opacity-10" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black rounded-full opacity-5" />
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl border-4 border-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-black transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <a
                        href="mailto:mail@heytathagat.in"
                        className="text-gray-600 hover:text-black transition-colors font-medium"
                      >
                        mail@heytathagat.in
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-black transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Location</h4>
                      <p className="text-gray-600 font-medium">Punjab, India</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-black transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Response Time</h4>
                      <p className="text-gray-600 font-medium">Within 24 hours</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black text-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/heytathagat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
