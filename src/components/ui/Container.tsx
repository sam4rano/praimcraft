import React from 'react'
import { cn } from '@/lib/utils/cn'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({ 
  size = 'lg', 
  className, 
  children, 
  ...props 
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn(
        'container',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
