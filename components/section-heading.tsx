"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { TextReveal } from "./text-reveal"

interface SectionHeadingProps {
  badge: string
  title: string
  description?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ badge, title, description, align = "center" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignmentClasses[align]} space-y-4`}
    >
      <Badge className="mb-2 bg-black text-white hover:bg-gray-800 border-none uppercase tracking-widest">
        {badge}
      </Badge>
      <TextReveal text={title} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" />
      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
          className="mx-auto max-w-[700px] md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
