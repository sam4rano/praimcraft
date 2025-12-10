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
    sm: 'py-6 sm:py-8 md:py-10',
    md: 'py-8 sm:py-10 md:py-12 lg:py-16',
    lg: 'py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24',
    xl: 'py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32',
  }

  const backgroundClasses = {
    white: 'relative bg-transparent',
    gray: 'relative bg-transparent',
    gradient: 'relative bg-transparent',
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
