'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowEffectProps {
  children: ReactNode
  intensity?: 'soft' | 'medium' | 'strong'
  color?: 'primary' | 'accent' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const glowIntensities = {
  soft: 'shadow-lg',
  medium: 'shadow-xl',
  strong: 'shadow-2xl'
}

const glowColors = {
  primary: 'shadow-primary-500/30',
  accent: 'shadow-accent-500/30', 
  white: 'shadow-white/20'
}

const glowSizes = {
  sm: 'shadow-lg',
  md: 'shadow-xl',
  lg: 'shadow-2xl'
}

export function GlowEffect({ 
  children, 
  intensity = 'medium',
  color = 'primary',
  size = 'md',
  className = ''
}: GlowEffectProps) {
  const glowClass = `${glowIntensities[intensity]} ${glowColors[color]} ${glowSizes[size]}`

  return (
    <motion.div
      className={`${glowClass} ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 30px rgba(30, 41, 59, 0.4)'
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export function PulsingGlow({ 
  children, 
  color = 'primary',
  className = ''
}: Omit<GlowEffectProps, 'intensity' | 'size'>) {
  const glowColor = color === 'primary' ? 'shadow-primary-500/40' : 'shadow-accent-500/40'

  return (
    <motion.div
      className={`${glowColor} ${className}`}
      animate={{
        boxShadow: [
          '0 0 20px rgba(30, 41, 59, 0.2)',
          '0 0 40px rgba(30, 41, 59, 0.4)',
          '0 0 20px rgba(30, 41, 59, 0.2)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}
