import React from 'react'
import { cn } from '@/lib/utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

export function Badge({ 
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props 
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full'
  
  const variantClasses = {
    default: 'glass-soft text-white/95 border-white/15',
    primary: 'glass-button text-white border-white/20',
    secondary: 'glass text-white/95 border-white/15',
    success: 'bg-emerald-500/20 border-emerald-400/30 text-emerald-200',
    warning: 'bg-amber-500/20 border-amber-400/30 text-amber-200',
    error: 'bg-red-500/20 border-red-400/30 text-red-200',
  }
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
