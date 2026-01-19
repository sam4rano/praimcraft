import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const services = [
  { name: 'Software Development', href: '/services/software-development' },
  { name: 'Social Media Management', href: '/services/social-media-management' },
  { name: 'Analytics & Reporting', href: '/services/analytics-reporting' },
  { name: 'Workflow Automation', href: '/services/workflow-automation' },
  { name: 'AI Integration', href: '/services/ai-integration' },
  { name: 'Content Creation', href: '/services/content-creation' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Team', href: '/about#team' },
]

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Services', href: '/services' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Support', href: '/support' },
  { name: 'Contact', href: '/contact' },
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Careers', href: '/careers' },
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/samuel-oyerinde/', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/sam4rano', icon: 'github' },
]

export function Footer() {
  return (
    <footer className="bg-[#0A0F1F] text-white border-t border-[#00E6FF]/10 relative z-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0,0,0,0.3) 0%, transparent 50%)' }}>
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">Praimcraft</span>
              </Link>
              <p className="text-white/70 mb-6 max-w-sm">
                Multi-service digital agency specializing in software development, 
                social media management, analytics, automation, and AI integration.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#00E6FF] transition-colors duration-200"
                    aria-label={item.name}
                  >
                    {item.icon === 'linkedin' ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ) : item.icon === 'github' ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    ) : null}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Praimcraft. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
