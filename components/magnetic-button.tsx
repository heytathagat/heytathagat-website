"use client"

import type React from "react"

import { useState, useRef, type MouseEvent } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const buttonVariants = {
    rest: { x: 0, y: 0 },
    hover: { x: position.x, y: position.y, transition: { type: "spring", stiffness: 150, damping: 15 } },
  }

  return (
    <motion.button
      ref={ref}
      initial="rest"
      whileHover="hover"
      animate={position.x !== 0 || position.y !== 0 ? "hover" : "rest"}
      variants={buttonVariants}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}
