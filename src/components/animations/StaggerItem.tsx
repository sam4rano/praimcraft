'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function StaggerItem({ 
  children, 
  className,
  direction = 'up'
}: StaggerItemProps) {
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
  }

  return (
    <motion.div
      variants={{
        hidden: directionVariants[direction],
        visible: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
