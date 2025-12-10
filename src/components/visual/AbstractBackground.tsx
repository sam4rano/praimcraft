'use client'

import { motion } from 'framer-motion'
import { FloatingShapesBackground } from './FloatingShapes'
import { GlowEffect, PulsingGlow } from './GlowEffect'

interface AbstractBackgroundProps {
  variant?: 'hero' | 'section' | 'card'
  intensity?: 'subtle' | 'medium' | 'strong'
  className?: string
  children?: React.ReactNode
}

export function AbstractBackground({ 
  variant = 'hero', 
  intensity = 'medium',
  className = '',
  children
}: AbstractBackgroundProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'min-h-screen'
      case 'section':
        return ''
      case 'card':
        return 'p-8 rounded-2xl'
      default:
        return ''
    }
  }

  const getIntensityClasses = () => {
    switch (intensity) {
      case 'subtle':
        return 'opacity-30'
      case 'medium':
        return 'opacity-50'
      case 'strong':
        return 'opacity-70'
      default:
        return 'opacity-50'
    }
  }

  return (
    <div className={`relative ${getVariantClasses()} ${className}`}>
      {/* Floating geometric shapes */}
      <div className={`absolute inset-0 ${getIntensityClasses()}`}>
        <FloatingShapesBackground />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  )
}

export function GeometricCard({ 
  children, 
  className = '',
  glow = true 
}: { 
  children: React.ReactNode
  className?: string
  glow?: boolean 
}) {
  const CardContent = () => (
    <div className={`relative p-8 glass-card ${className}`}>
      {/* Floating mini shapes inside card */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-[#00E6FF]/60 rounded-full opacity-70 animate-pulse" />
      <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#A066FF]/50 rounded-full opacity-50" />
      <div className="absolute top-1/2 right-8 w-1 h-1 bg-[#FF2DAF]/60 rounded-full opacity-60" />
      
      {children}
    </div>
  )

  if (glow) {
    return (
      <GlowEffect intensity="medium" color="primary">
        <CardContent />
      </GlowEffect>
    )
  }

  return <CardContent />
}

export function FloatingOrb({ 
  size = 'md',
  color = 'accent',
  position = 'top-right'
}: {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'accent'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
}) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const positions = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  }

  const colors = {
    primary: 'bg-[#00E6FF]/60',
    accent: 'bg-[#A066FF]/70'
  }

  return (
    <PulsingGlow color={color}>
      <motion.div
        className={`absolute ${sizes[size]} ${positions[position]} ${colors[color]} rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </PulsingGlow>
  )
}
