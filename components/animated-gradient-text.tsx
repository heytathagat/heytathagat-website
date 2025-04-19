"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export function AnimatedGradientText({ text, className = "" }: AnimatedGradientTextProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1
      ref={ref}
      className={`bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="mr-[0.25em] inline-block" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
