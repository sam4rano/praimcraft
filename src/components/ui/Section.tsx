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
    sm: 'py-8 sm:py-10 md:py-12',
    md: 'py-10 sm:py-14 md:py-16 lg:py-20',
    lg: 'py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32',
    xl: 'py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48',
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
