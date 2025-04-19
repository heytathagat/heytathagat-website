"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({ children, className = "", speed = 0.2, direction = "up" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yValue = useTransform(scrollYProgress, [0, 1], direction === "down" ? ["-20%", "20%"] : ["20%", "-20%"])
  const xValue = useTransform(scrollYProgress, [0, 1], direction === "right" ? ["-20%", "20%"] : ["20%", "-20%"])

  const style = direction === "up" || direction === "down" ? { y: yValue } : { x: xValue }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={style} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
