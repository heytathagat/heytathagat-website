"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Award,
  Briefcase,
  Building,
  ChevronRight,
  Laptop,
  Mail,
  MapPin,
  MessageSquare,
  Newspaper,
  School,
  Users,
  Youtube,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { submitContactForm } from "./actions"
import { SectionHeading } from "@/components/section-heading"
import { LetterReveal } from "@/components/letter-reveal"
import { DynamicText } from "@/components/dynamic-text"
import { MarqueeText } from "@/components/marquee-text"

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
      name: "Shubhash",
      company: "Overbites",
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
      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 -z-10 bg-grid"></div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="container relative px-4 md:px-6"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-none border border-black px-3 py-1 text-sm font-medium uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-black animate-pulse mr-2"></span>
                Entrepreneur & Growth Strategist
              </div>

              <div className="space-y-4">
                <LetterReveal
                  text="TATHAGAT KUMAR"
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                />
                <h2 className="text-xl font-semibold uppercase tracking-widest">
                  <DynamicText
                    words={["Growth Strategist", "Tech Catalyst", "Brand Alchemist", "Digital Marketer"]}
                    interval={2000}
                  />
                </h2>
                <p className="md:text-lg max-w-xl">
                  A driven entrepreneur with a proven track record of building and scaling ventures that make an impact.
                  Leading initiatives that drive growth, innovation, and brand success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="relative overflow-hidden rounded-none border-2 border-black bg-black px-8 py-3 text-white transition-transform hover:bg-white hover:text-black"
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="relative z-10 flex items-center font-medium">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>

                <Link href="/#contact">
                  <Button className="relative overflow-hidden rounded-none border-2 border-black bg-white px-8 py-3 text-black transition-transform hover:bg-black hover:text-white">
                    <span className="relative z-10 font-medium">Let's Connect</span>
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    11+
                  </div>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Featured in 11+ news websites</span>, a testament to innovation and
                  impact
                </div>
              </div>
            </div>

            <div className="relative mx-auto lg:mx-0">
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 rounded-none border-2 border-black"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10"
                >
                  <Image
                    src="http://media.licdn.com/dms/image/v2/D5603AQEC3QtpeXV1Mw/profile-displayphoto-shrink_200_200/B56ZSYtm7NHQAY-/0/1737728881598?e=2147483647&v=beta&t=h1yV89A-TIOI13nvFV4WXDqMuyslxYMXjeQAujhUr0U"
                    alt="Tathagat Kumar"
                    width={400}
                    height={400}
                    className="object-cover relative z-10"
                    priority
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-none p-3 shadow-lg border-2 border-black z-20"
                >
                  <div className="text-sm font-medium uppercase tracking-widest">Experience</div>
                  <div className="text-2xl font-bold">8+ Years</div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Mentored at 50+ colleges</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Judged MLH-backed hackathons</span>
            </div>
            <div className="flex items-center gap-2">
              <Youtube className="h-5 w-5" />
              <span>8+ years as YouTuber</span>
            </div>
            <div className="flex items-center gap-2">
              <Newspaper className="h-5 w-5" />
              <span>Featured in 11+ news websites</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-black text-white overflow-hidden">
        <MarqueeText speed={30} className="text-xl md:text-2xl font-bold py-2">
          GROWTH STRATEGIST • TECH CATALYST • BRAND ALCHEMIST • DIGITAL MARKETER • ENTREPRENEUR • GROWTH STRATEGIST •
          TECH CATALYST • BRAND ALCHEMIST • DIGITAL MARKETER • ENTREPRENEUR
        </MarqueeText>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <SectionHeading
            badge="About Me"
            title="My Journey & Expertise"
            description="From founding ventures to mentoring the next generation of entrepreneurs."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold">My Background</h3>
              <p>
                I am a driven entrepreneur with a proven track record of building and scaling ventures that make an
                impact. As the Director of PYOB and Bragfit, I lead initiatives that drive growth, innovation, and brand
                success, leveraging my expertise in affiliate marketing, branding, and digital strategy.
              </p>
              <p>
                My entrepreneurial journey includes founding Tech Stockerzz, where I spent 4+ years mastering content
                development, SEO, and digital marketing. This experience taught me the importance of adaptability,
                creativity, and data-driven decision-making in building successful businesses.
              </p>
              <div className="pt-4">
                <h4 className="font-semibold mb-3">Skills & Expertise</h4>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-none overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          className="h-full bg-black"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="rounded-none border-2 border-black p-4 hover:bg-black hover:text-white transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 mt-1 shrink-0" />
                        <div>
                          <p>{achievement}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Beyond Business</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-none border-2 border-black p-4 hover:bg-black hover:text-white transition-colors"
                  >
                    <div className="font-medium uppercase tracking-widest text-sm">Colleges Mentored</div>
                    <div className="text-3xl font-bold">50+</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-none border-2 border-black p-4 hover:bg-black hover:text-white transition-colors"
                  >
                    <div className="font-medium uppercase tracking-widest text-sm">Media Features</div>
                    <div className="text-3xl font-bold">11+</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-none border-2 border-black p-4 hover:bg-black hover:text-white transition-colors"
                  >
                    <div className="font-medium uppercase tracking-widest text-sm">YouTube Experience</div>
                    <div className="text-3xl font-bold">8+ yrs</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="rounded-none border-2 border-black p-4 hover:bg-black hover:text-white transition-colors"
                  >
                    <div className="font-medium uppercase tracking-widest text-sm">Hackathons Judged</div>
                    <div className="text-3xl font-bold">5+</div>
                  </motion.div>
                </div>
              </div>
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
                        className="w-full mt-auto rounded-none border-2 border-black text-black hover:bg-black hover:text-white group-hover:border-white group-hover:text-black group-hover:bg-white transition-colors"
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

      {/* Startups Section */}
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
                name: "Mentor Labs",
                description:
                  "A mentorship platform connecting students with industry experts to foster innovation and entrepreneurship.",
                icon: <School className="h-16 w-16" />,
                link: "/startups/mentor-labs",
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
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <SectionHeading
            badge="Contact"
            title="Let's Work Together"
            description="Ready to take your business to the next level? Get in touch."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-none border-2 border-black"
              >
                <CardContent className="p-6">
                  <form action={submitContactForm} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none uppercase tracking-wider"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          name="first-name"
                          className="flex h-10 w-full rounded-none border-2 border-black bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none uppercase tracking-wider"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          name="last-name"
                          className="flex h-10 w-full rounded-none border-2 border-black bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="flex h-10 w-full rounded-none border-2 border-black bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium leading-none uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        className="flex h-10 w-full rounded-none border-2 border-black bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium leading-none uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="flex min-h-[120px] w-full rounded-none border-2 border-black bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Tell me about your business and how I can help"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black text-white rounded-none hover:bg-white hover:text-black border-2 border-black transition-colors"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-none border-2 border-black flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium uppercase tracking-wider text-sm">Email</p>
                      <p>mail@heytathagat.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-none border-2 border-black flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium uppercase tracking-wider text-sm">Location</p>
                      <p>Punjab, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <p className="mb-4">
                  Schedule a free 15-minute discovery call to discuss how I can help your business grow.
                </p>
                <Button className="w-full bg-black text-white rounded-none hover:bg-white hover:text-black border-2 border-black transition-colors">
                  Book a Call
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/heytathagat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-12 w-12 rounded-none border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 transition-transform group-hover:scale-110"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group h-12 w-12 rounded-none border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 transition-transform group-hover:scale-110"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group h-12 w-12 rounded-none border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 transition-transform group-hover:scale-110"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="group h-12 w-12 rounded-none border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 transition-transform group-hover:scale-110"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
