import React from 'react'
import { cn } from '@/lib/utils/cn'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'gradient'
}

export function Section({ 
  padding = 'lg',
  background = 'white',
  className,
  children,
  ...props 
}: SectionProps) {
  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24 lg:py-32',
    xl: 'py-20 md:py-32 lg:py-40',
  }

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    gradient: 'gradient-bg',
  }

  return (
    <section
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
