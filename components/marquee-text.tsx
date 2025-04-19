"use client"

import type React from "react"

import { motion } from "framer-motion"

interface MarqueeTextProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function MarqueeText({ children, direction = "left", speed = 50, className = "" }: MarqueeTextProps) {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 1000 / speed,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="inline-block"
        style={{ paddingRight: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
