import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { MagneticHover } from '@/components/animations/MagneticHover';

const faqItems = [
  {
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! Simply contact us through our contact form or schedule a free consultation. We\'ll discuss your needs and create a customized plan for your project.',
    category: 'Getting Started'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary depending on scope and complexity. A typical web development project takes 4-8 weeks, while social media campaigns can start showing results within 2-4 weeks. We\'ll provide a detailed timeline during our initial consultation.',
    category: 'Project Management'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We offer comprehensive support packages including maintenance, updates, and technical support. Our support plans are designed to keep your digital solutions running smoothly and up-to-date.',
    category: 'Support'
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with modern technologies including React, Next.js, Node.js, Python, and various cloud platforms. We also specialize in popular CMS platforms like Sanity, WordPress, and headless solutions.',
    category: 'Technical'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain regular communication through weekly check-ins, project management tools, and direct communication channels. You\'ll always know the status of your project and can reach us when needed.',
    category: 'Communication'
  },
  {
    question: 'What if I need changes to my project?',
    answer: 'We understand that requirements can evolve. We have a flexible change management process that allows for adjustments while keeping the project on track and within budget.',
    category: 'Project Management'
  }
];

const supportChannels = [
  {
    title: 'Email Support',
    description: 'Get help via email within 24 hours',
    icon: '📧',
    contact: 'support@praimcraft.com',
    responseTime: '24 hours'
  },
  {
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    icon: '💬',
    contact: 'Available 9 AM - 6 PM EST',
    responseTime: 'Immediate'
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our team',
    icon: '📞',
    contact: '+1 (555) 123-4567',
    responseTime: 'Immediate'
  },
  {
    title: 'Video Call',
    description: 'Schedule a video consultation',
    icon: '📹',
    contact: 'Book online',
    responseTime: 'Scheduled'
  }
];

const resources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials',
    href: '/docs',
    icon: '📚'
  },
  {
    title: 'Knowledge Base',
    description: 'Search our extensive knowledge base',
    href: '/knowledge-base',
    icon: '🔍'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    href: '/tutorials',
    icon: '🎥'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users',
    href: '/community',
    icon: '👥'
  }
];

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Support Center
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                We're here to help! Get the support you need to make the most of our services.
                From quick answers to detailed assistance, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Contact Support
                </Button>
                <Button variant="outline" size="lg">
                  Browse FAQ
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* Support Channels */}
      <Section padding="lg">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you. We're available through multiple channels to ensure you get the help you need.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <RevealOnScroll key={channel.title} direction="up" delay={0.1 * (index + 1)}>
                <MagneticHover>
                  <Card className="text-center h-full hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-5xl mb-4">{channel.icon}</div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        {channel.title}
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        {channel.description}
                      </p>
                      <div className="space-y-2 mb-6">
                        <p className="text-sm font-medium text-neutral-900">
                          {channel.contact}
                        </p>
                        <Badge variant="secondary" size="sm">
                          {channel.responseTime}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Now
                      </Button>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="lg" background="gray">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Find quick answers to the most common questions about our services and processes.
              </p>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <RevealOnScroll key={item.question} direction="up" delay={0.1 * (index + 1)}>
                <MagneticHover>
                  <Card className="hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                          {item.question}
                        </h3>
                        <Badge variant="secondary" size="sm">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-neutral-600">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* Resources Section */}
      <Section padding="lg" background="white">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Self-Service Resources
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Explore our comprehensive resources to find answers and learn more about our services.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <RevealOnScroll key={resource.title} direction="up" delay={0.1 * (index + 1)}>
                <MagneticHover>
                  <Card className="text-center h-full hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-5xl mb-4">{resource.icon}</div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        {resource.title}
                      </h3>
                      <p className="text-neutral-600 mb-6">
                        {resource.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Explore
                      </Button>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section padding="lg" background="gradient">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our support team is ready to assist you with any questions or issues you may have.
                Don't hesitate to reach out - we're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Contact Support
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </div>
  );
}
