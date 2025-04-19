"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

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
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className={`fixed top-0 z-50 w-full ${
          scrolled ? "bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/50" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="group relative flex items-center gap-2 font-bold text-xl">
            <span className="relative z-10">TATHAGAT KUMAR</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 left-0 h-[6px] w-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, i) => (
              <Link key={item.name} href={item.href} className="group relative text-sm font-medium transition-colors">
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/#contact"
              className="relative overflow-hidden rounded-none border-2 border-black bg-black px-6 py-2 text-sm font-medium text-white transition-transform duration-300 hover:bg-white hover:text-black"
            >
              Let's Connect
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-none bg-black text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[60] flex flex-col bg-black text-white md:hidden"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                TATHAGAT KUMAR
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-white text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-8 p-6">
              {menuItems.map((item, i) => (
                <motion.div key={item.name} custom={i} variants={linkVariants}>
                  <Link
                    href={item.href}
                    className="text-3xl font-bold tracking-tight hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={menuItems.length} variants={linkVariants}>
                <Link
                  href="/#contact"
                  className="mt-4 inline-block rounded-none border-2 border-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Connect
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
