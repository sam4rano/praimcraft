import React from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  ariaLabel?: string
  ariaDescribedBy?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ariaLabel,
  ariaDescribedBy,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn'
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm sm:text-base min-h-[44px] sm:min-h-[40px] touch-manipulation',
    md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-base min-h-[48px] sm:min-h-[44px] touch-manipulation',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[52px] sm:min-h-[56px] touch-manipulation',
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        'focus-visible',
        className
      )}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {children}
    </button>
  )
}
