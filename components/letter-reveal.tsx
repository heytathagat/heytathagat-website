"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface LetterRevealProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export function LetterReveal({ text, className = "", delay = 0, once = true }: LetterRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay },
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
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} className="inline-block" variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}
