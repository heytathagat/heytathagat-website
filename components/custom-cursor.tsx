"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", () => setHidden(true))
    window.addEventListener("mouseenter", () => setHidden(false))

    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverStart)
      link.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", () => setHidden(true))
      window.removeEventListener("mouseenter", () => setHidden(false))

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart)
        link.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1.5px solid #000",
      mixBlendMode: "difference",
    },
    clicked: {
      height: 14,
      width: 14,
      x: position.x - 7,
      y: position.y - 7,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    hovered: {
      height: 64,
      width: 64,
      x: position.x - 32,
      y: position.y - 32,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      mixBlendMode: "difference",
    },
  }

  const dotVariants = {
    default: {
      height: 6,
      width: 6,
      x: position.x - 3,
      y: position.y - 3,
      backgroundColor: "#000",
      mixBlendMode: "difference",
    },
    clicked: {
      opacity: 0,
    },
    hovered: {
      opacity: 0,
    },
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={cursorVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{ opacity: hidden ? 0 : 1 }}
      />
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={dotVariants}
        animate={clicked ? "clicked" : linkHovered ? "hovered" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{ opacity: hidden ? 0 : 1 }}
      />
    </>
  )
}
