"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Home, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-black rotate-12" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-black -rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-black rotate-45" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg w-full text-center relative z-10"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
          className="relative mx-auto mb-8"
        >
          <div className="h-24 w-24 rounded-full bg-black flex items-center justify-center text-white mx-auto shadow-2xl">
            <CheckCircle className="h-12 w-12" />
          </div>
          {/* Animated rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-4 border-black"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-black"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            MESSAGE{" "}
            <span className="relative">
              SENT!
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-1 left-0 h-2 bg-black"
              />
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thank you for reaching out! Your message has been successfully submitted. I appreciate your interest and
            will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Button className="group w-full bg-black hover:bg-gray-800 text-white rounded-xl h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  <Home className="h-5 w-5" />
                  Return to Homepage
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/#services">
              <Button
                variant="outline"
                className="group w-full border-2 border-black text-black hover:bg-black hover:text-white rounded-xl h-14 text-lg font-bold transition-all duration-300 bg-transparent"
              >
                <span className="flex items-center justify-center gap-3">
                  <Briefcase className="h-5 w-5" />
                  Explore My Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-lg"
        >
          <p className="text-sm text-gray-600 font-medium">
            <strong className="text-black">What's next?</strong> I'll review your message and respond with personalized
            insights on how we can work together to achieve your business goals.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
