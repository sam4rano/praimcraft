'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="glass-nav sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-2.5 lg:space-x-3 touch-manipulation">
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-[#00E6FF] to-[#A066FF] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#00E6FF]/30">
              <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">P</span>
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Praimcraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-[#00E6FF] transition-colors duration-200 font-medium"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2.5 rounded-lg text-white hover:text-white hover:bg-white/20 focus-visible touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div id="mobile-menu" className="md:hidden border-t border-white/20 py-4 bg-[#0A0F1F]/95" role="navigation" aria-label="Mobile navigation">
                <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3.5 text-base font-medium text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-white/20 mt-4 px-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="outline" size="md" className="w-full justify-center">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button size="md" className="w-full justify-center">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
