'use client'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Ready to start your next project? We&apos;d love to hear from you and discuss how we can help your business grow.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section padding="lg" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Send us a message
              </h2>
              <form id="contact-form" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>

                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  We&apos;re here to help! Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                          Email
                        </h3>
                        <p className="text-neutral-600 mb-2">
                          Send us an email and we&apos;ll respond within 24 hours.
                        </p>
                        <a
                          href="mailto:hello@praimcraft.com"
                          className="text-primary-600 hover:text-primary-700 font-medium"
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
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                          Phone
                        </h3>
                        <p className="text-neutral-600 mb-2">
                          Call us during business hours for immediate assistance.
                        </p>
                        <a
                          href="tel:+1234567890"
                          className="text-primary-600 hover:text-primary-700 font-medium"
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
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                          Office
                        </h3>
                        <p className="text-neutral-600 mb-2">
                          Visit our office for in-person meetings.
                        </p>
                        <address className="text-primary-600 not-italic">
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
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                          Live Chat
                        </h3>
                        <p className="text-neutral-600 mb-2">
                          Chat with us in real-time for quick questions.
                        </p>
                        <Button variant="outline" size="sm" onClick={() => alert('Live chat coming soon!')}>
                          Start Chat
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

      {/* Office Hours */}
      <Section padding="lg" background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Office Hours
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🕒</div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-neutral-600">
                    Monday - Friday<br />
                    9:00 AM - 6:00 PM PST
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Response Time
                  </h3>
                  <p className="text-neutral-600">
                    Email: Within 24 hours<br />
                    Phone: Immediate
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Time Zone
                  </h3>
                  <p className="text-neutral-600">
                    Pacific Standard Time<br />
                    (PST/PDT)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="lg" background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    How long does a typical project take?
                  </h3>
                  <p className="text-neutral-600">
                    Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks, while custom software development can take 2-6 months. We&apos;ll provide a detailed timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    What&apos;s included in your services?
                  </h3>
                  <p className="text-neutral-600">
                    Our services include strategy, design, development, testing, deployment, and ongoing support. We also provide training and documentation to ensure your team can manage the solution effectively.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Do you work with small businesses?
                  </h3>
                  <p className="text-neutral-600">
                    Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We tailor our solutions to fit your budget and requirements, ensuring you get the best value for your investment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    What happens after project completion?
                  </h3>
                  <p className="text-neutral-600">
                    We provide ongoing support and maintenance to ensure your solution continues to perform optimally. This includes updates, security patches, performance monitoring, and technical support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Don&apos;t wait! Contact us today and let&apos;s discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Schedule a Call
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
