"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface DynamicTextProps {
  words: string[]
  interval?: number
  className?: string
  highlight?: boolean
}

export function DynamicText({ words, interval = 3000, className = "", highlight = false }: DynamicTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 500) // Half a second for the fade out effect
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [words, interval])

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block ${className} ${highlight ? "text-white bg-black px-2" : ""}`}
          >
            {words[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
