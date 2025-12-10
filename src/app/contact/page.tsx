'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AbstractBackground } from '@/components/visual/AbstractBackground'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AbstractBackground variant="hero" intensity="medium" className="min-h-[60vh]">
        <Section padding="lg" background="gradient">
          <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" size="lg" className="mb-4">Let's Talk</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 leading-relaxed font-light">
              Ready to start your next project? We&apos;d love to hear from you and discuss how we can help your business grow.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge variant="secondary" size="md" className="mb-4">Quick Response</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Send us a <span className="gradient-text">message</span>
              </h2>
              <form id="contact-form" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 glass-soft border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-white placeholder:text-white/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 glass-soft border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-white placeholder:text-white/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 glass-soft border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-white placeholder:text-white/50"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 glass-soft border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-white placeholder:text-white/50"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/90 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 glass-soft border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-white bg-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">Software Development</option>
                    <option value="social-media-management">Social Media Management</option>
                    <option value="analytics-reporting">Analytics & Reporting</option>
                    <option value="workflow-automation">Workflow Automation</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="content-creation">Content Creation</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white/90 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 glass-soft border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-white bg-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Let&apos;s discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 glass-soft border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 text-white placeholder:text-white/50"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message →
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  We&apos;re here to help! Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00E6FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#00E6FF]/30">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          Email
                        </h3>
                        <p className="text-white/80 mb-2">
                          Send us an email and we&apos;ll respond within 24 hours.
                        </p>
                        <a
                          href="mailto:hello@praimcraft.com"
                          className="text-[#00E6FF] hover:text-[#00E6FF]/80 font-medium"
                        >
                          hello@praimcraft.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00E6FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#00E6FF]/30">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          Phone
                        </h3>
                        <p className="text-white/80 mb-2">
                          Call us during business hours for immediate assistance.
                        </p>
                        <a
                          href="tel:+1234567890"
                          className="text-[#00E6FF] hover:text-[#00E6FF]/80 font-medium"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00E6FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#00E6FF]/30">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          Office
                        </h3>
                        <p className="text-white/80 mb-2">
                          Visit our office for in-person meetings.
                        </p>
                        <address className="text-[#00E6FF] not-italic">
                          123 Business Street<br />
                          Suite 100<br />
                          San Francisco, CA 94105
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#00E6FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#00E6FF]/30">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          Live Chat
                        </h3>
                        <p className="text-white/80 mb-2">
                          Chat with us in real-time for quick questions.
                        </p>
                        <Button variant="outline" size="md" onClick={() => alert('Live chat coming soon!')}>
                          Start Chat →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          </Container>
        </Section>
      </AbstractBackground>

      {/* Office Hours */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="lg" background="gradient">
          <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Office <span className="gradient-text">Hours</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🕒</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Business Hours
                  </h3>
                  <p className="text-white/80">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM PST
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Response Time
                  </h3>
                  <p className="text-white/80">
                    Email: Within 24 hours<br />
                    Phone: Immediate
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Time Zone
                  </h3>
                  <p className="text-white/80">
                    Pacific Standard Time<br />
                    (PST/PDT)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          </Container>
        </Section>
      </AbstractBackground>

      {/* FAQ Section */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="lg" background="gradient">
          <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How long does a typical project take?
                  </h3>
                  <p className="text-white/80">
                    Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while custom software development can take 2-6 months. We&apos;ll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What&apos;s included in your services?
                  </h3>
                  <p className="text-white/80">
                    Our services include strategy, design, development, testing, deployment, and ongoing support. We also provide training and documentation to ensure your team can manage the solution effectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Do you work with small businesses?
                  </h3>
                  <p className="text-white/80">
                    Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We tailor our solutions to fit your budget and requirements, ensuring you get the best value for your investment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What happens after project completion?
                  </h3>
                  <p className="text-white/80">
                    We provide ongoing support and maintenance to ensure your solution continues to perform optimally. This includes updates, security patches, performance monitoring, and technical support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          </Container>
        </Section>
      </AbstractBackground>

      {/* CTA Section */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="lg" background="gradient">
          <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-white/95 mb-8 font-light">
              Don&apos;t wait! Contact us today and let&apos;s discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Your Project →
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Schedule a Call
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      </AbstractBackground>
    </div>
  )
}
