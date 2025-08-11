"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Zap, Mail, MapPin, ExternalLink } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white border-t-4 border-black py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black rotate-45" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-black rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-black -rotate-12" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">TATHAGAT KUMAR</h3>
            </div>
            <p className="max-w-md text-gray-600 leading-relaxed">
              Media-Featured Growth Strategist, Tech Catalyst, and Brand Alchemist helping businesses scale and succeed
              through innovative strategies and proven methodologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://www.linkedin.com/in/heytathagat",
                  icon: "linkedin",
                  label: "LinkedIn",
                },
                {
                  href: "#",
                  icon: "twitter",
                  label: "Twitter",
                },
                {
                  href: "#",
                  icon: "instagram",
                  label: "Instagram",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white transition-all duration-300 hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon === "linkedin" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-wider border-b-2 border-black pb-2">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Startups", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="group flex items-center text-gray-600 transition-all duration-300 hover:text-black hover:translate-x-2"
                  >
                    <ArrowUpRight className="mr-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    <span className="font-medium">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-wider border-b-2 border-black pb-2">Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Startup Mentorship", href: "/services/startup-mentorship" },
                { name: "Brand Strategy", href: "/services/brand-strategy" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-600 transition-all duration-300 hover:text-black hover:translate-x-2"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-lg font-bold uppercase tracking-wider border-b-2 border-black pb-2">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:mail@heytathagat.in"
                  className="group flex items-center text-gray-600 transition-all duration-300 hover:text-black"
                >
                  <Mail className="mr-3 h-5 w-5 text-black" />
                  <span className="font-medium group-hover:underline">mail@heytathagat.in</span>
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="mr-3 h-5 w-5 text-black" />
                <span className="font-medium">Punjab, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center justify-between border-t-2 border-black pt-8 md:flex-row"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm font-semibold">© {currentYear} Tathagat Kumar. All rights reserved.</p>
            <div className="h-1 w-1 bg-black rounded-full hidden md:block" />
            <p className="text-sm text-gray-600">Crafted with passion & precision</p>
          </div>

          <div className="mt-6 md:mt-0 flex gap-8">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-black bg-black px-8 py-4 text-white font-bold transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
            >
              <span>Ready to Transform Your Business?</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
