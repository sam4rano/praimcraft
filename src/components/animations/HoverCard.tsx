'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  scale?: number
  rotate?: number
  duration?: number
}

export function HoverCard({ 
  children, 
  className,
  scale = 1.05,
  rotate = 0,
  duration = 0.3
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale,
        rotate,
        transition: {
          duration,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
