"use client"

import type React from "react"

import { useState, useRef, type MouseEvent } from "react"
import { motion } from "framer-motion"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
  hoverScale?: number
}

export function Card3D({
  children,
  className = "",
  glareColor = "rgba(255, 255, 255, 0.4)",
  hoverScale = 1.02,
}: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [mouseOver, setMouseOver] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const { left, top, width, height } = card.getBoundingClientRect()

    // Calculate rotation based on mouse position
    const mouseX = e.clientX - left
    const mouseY = e.clientY - top

    const rotateXValue = ((mouseY - height / 2) / (height / 2)) * 5
    const rotateYValue = ((mouseX - width / 2) / (width / 2)) * -5

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)

    // Calculate glare position
    const glareX = (mouseX / width) * 100
    const glareY = (mouseY / height) * 100
    setGlarePosition({ x: glareX, y: glareY })
  }

  const handleMouseEnter = () => {
    setMouseOver(true)
  }

  const handleMouseLeave = () => {
    setMouseOver(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: mouseOver ? hoverScale : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    >
      {children}

      {/* Glare effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor} 0%, rgba(255, 255, 255, 0) 60%)`,
          opacity: mouseOver ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
