"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LetterReveal } from "./letter-reveal"

export function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 150)

    // Complete loading after progress reaches 100%
    const timer = setTimeout(() => {
      setLoading(false)
      clearInterval(interval)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative mb-12 h-24 w-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-24 w-24 rounded-full border-2 border-black"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-16 w-16 rounded-full bg-black"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <span className="text-xl font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
      <LetterReveal text="TATHAGAT KUMAR" className="text-2xl font-bold tracking-widest" delay={0.3} once={false} />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-2 text-sm font-medium uppercase tracking-widest"
      >
        Entrepreneur & Growth Strategist
      </motion.p>
    </motion.div>
  )
}
