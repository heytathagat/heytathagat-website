"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap, ArrowRight } from "lucide-react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Startups", href: "/#startups" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 50, y: 20 },
    open: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div
          className={`h-1 w-full bg-gradient-to-r from-black via-gray-600 to-black transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <motion.div variants={logoVariants}>
            <Link href="/" className="group relative flex items-center gap-3 font-black text-xl tracking-tight">
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="relative z-10 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                TATHAGAT KUMAR
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-12 h-[3px] w-0 bg-black rounded-full"
              />
            </Link>
          </motion.div>

          <motion.nav variants={navItemVariants} className="hidden md:flex items-center gap-10">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group relative text-sm font-semibold transition-all duration-300 hover:text-gray-600"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 h-[3px] w-0 bg-black rounded-full transition-all duration-300 group-hover:w-full" />
                  <motion.span
                    className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-lg bg-gray-100 opacity-0 -z-10"
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/#contact"
                className="group relative overflow-hidden rounded-full border-2 border-black bg-black px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.nav>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-black text-white md:hidden hover:scale-110 transition-all duration-300 hover:shadow-lg"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 transition-transform group-hover:rotate-90" />
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 z-[60] w-full max-w-sm bg-black text-white md:hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex h-20 items-center justify-between px-6 border-b border-gray-800">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-black text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                      <Zap className="h-4 w-4 text-black" />
                    </div>
                    TATHAGAT KUMAR
                  </Link>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-1 flex-col justify-center gap-2 p-6">
                {menuItems.map((item, i) => (
                  <motion.div key={item.name} variants={linkVariants}>
                    <Link
                      href={item.href}
                      className="group block rounded-2xl p-4 text-2xl font-bold tracking-tight hover:bg-white/10 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                        <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {/* CTA Button */}
                <motion.div variants={linkVariants} className="mt-8">
                  <Link
                    href="/#contact"
                    className="group block rounded-2xl border-2 border-white bg-white text-black p-4 text-center text-lg font-bold hover:bg-transparent hover:text-white transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Let's Connect
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="p-6 border-t border-gray-800"
              >
                <p className="text-sm text-gray-400 text-center">Ready to transform your business?</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
