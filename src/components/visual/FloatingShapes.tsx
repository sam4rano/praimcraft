'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingShapeProps {
  delay?: number
  duration?: number
  size?: 'sm' | 'md' | 'lg'
  shape?: 'cube' | 'cylinder' | 'sphere'
  glow?: boolean
}


const sizes = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12', 
  lg: 'w-16 h-16'
}

export function FloatingShape({ 
  delay = 0, 
  duration = 4, 
  size = 'md', 
  shape = 'cube',
  glow = false 
}: FloatingShapeProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const getShapeClasses = () => {
    const baseClasses = sizes[size]
    const glowClasses = glow ? 'shadow-lg shadow-accent-500/30' : ''
    
    switch (shape) {
      case 'cube':
        return `${baseClasses} ${glowClasses} bg-gradient-to-br from-primary-600/80 to-primary-700/80 rounded-lg`
      case 'cylinder':
        return `${baseClasses} ${glowClasses} bg-gradient-to-br from-primary-500/70 to-primary-600/70 rounded-full`
      case 'sphere':
        return `${baseClasses} ${glowClasses} bg-gradient-to-br from-accent-400/80 to-accent-500/80 rounded-full`
      default:
        return `${baseClasses} ${glowClasses} bg-gradient-to-br from-primary-600/80 to-primary-700/80 rounded-lg`
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      className={`${getShapeClasses()} opacity-60`}
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

export function FloatingShapesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Cubes */}
      <div className="absolute top-20 left-10">
        <FloatingShape 
          delay={0} 
          duration={6} 
          size="lg" 
          shape="cube" 
          glow={true}
        />
      </div>
      
      <div className="absolute top-40 right-20">
        <FloatingShape 
          delay={1} 
          duration={5} 
          size="md" 
          shape="cube"
        />
      </div>

      <div className="absolute bottom-32 left-1/4">
        <FloatingShape 
          delay={2} 
          duration={7} 
          size="sm" 
          shape="cube"
        />
      </div>

      {/* Floating Cylinders */}
      <div className="absolute top-1/3 right-1/4">
        <FloatingShape 
          delay={0.5} 
          duration={4} 
          size="md" 
          shape="cylinder"
        />
      </div>

      <div className="absolute bottom-20 right-10">
        <FloatingShape 
          delay={1.5} 
          duration={6} 
          size="lg" 
          shape="cylinder"
        />
      </div>

      {/* Glowing Spheres */}
      <div className="absolute top-16 right-1/3">
        <FloatingShape 
          delay={0.8} 
          duration={3} 
          size="md" 
          shape="sphere" 
          glow={true}
        />
      </div>

      <div className="absolute bottom-40 left-1/3">
        <FloatingShape 
          delay={2.2} 
          duration={5} 
          size="sm" 
          shape="sphere" 
          glow={true}
        />
      </div>
    </div>
  )
}
