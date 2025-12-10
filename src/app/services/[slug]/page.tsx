import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

// Placeholder data - will be replaced with Sanity data
const services = [
  {
    id: 'software-development',
    name: 'Software Development',
    description: 'Custom web and mobile applications built with modern technologies and best practices.',
    longDescription: 'We create scalable, secure, and user-friendly software solutions tailored to your business needs. From web applications to mobile apps, our development team uses cutting-edge technologies to deliver high-quality products that drive business growth.',
    icon: '💻',
    features: [
      'Custom Web Applications',
      'Mobile App Development (iOS & Android)',
      'API Development & Integration',
      'Database Design & Optimization',
      'Cloud Infrastructure Setup',
      'Code Review & Quality Assurance',
      'Performance Optimization',
      'Security Implementation',
      'Third-party Integrations',
      'Maintenance & Support'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'We analyze your requirements, understand your business goals, and create a detailed project roadmap with timelines and milestones.'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Our designers create wireframes, user flows, and interactive prototypes to ensure the final product meets your expectations.'
      },
      {
        step: 3,
        title: 'Development & Testing',
        description: 'We build your application using agile methodologies with regular testing, code reviews, and client feedback integration.'
      },
      {
        step: 4,
        title: 'Deployment & Support',
        description: 'We deploy your application to production and provide ongoing maintenance, updates, and technical support.'
      }
    ],
    pricing: {
      startingFrom: '$5,000',
      currency: 'USD'
    },
    technologies: [
      'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'
    ],
    relatedServices: ['ai-integration', 'workflow-automation', 'analytics-reporting']
  },
  {
    id: 'social-media-management',
    name: 'Social Media Management',
    description: 'Strategic social media campaigns that drive engagement and grow your online presence.',
    longDescription: 'Our social media experts help you build a strong online presence across all major platforms. We create engaging content, manage your accounts, and implement strategies that drive real business results and meaningful connections with your audience.',
    icon: '📱',
    features: [
      'Content Strategy & Planning',
      'Social Media Posting & Scheduling',
      'Community Management & Engagement',
      'Influencer Partnerships & Collaborations',
      'Social Media Advertising (Paid Campaigns)',
      'Analytics & Performance Reporting',
      'Brand Voice Development',
      'Crisis Management',
      'Platform Optimization',
      'Competitor Analysis'
    ],
    process: [
      {
        step: 1,
        title: 'Strategy Development',
        description: 'We analyze your brand, target audience, and competitors to create a comprehensive social media strategy.'
      },
      {
        step: 2,
        title: 'Content Creation',
        description: 'Our team creates engaging, platform-specific content including posts, stories, videos, and graphics.'
      },
      {
        step: 3,
        title: 'Community Engagement',
        description: 'We actively engage with your audience, respond to comments, and manage your online community.'
      },
      {
        step: 4,
        title: 'Performance Analysis',
        description: 'We track metrics, analyze performance, and optimize your strategy for better results and ROI.'
      }
    ],
    pricing: {
      startingFrom: '$2,500',
      currency: 'USD'
    },
    technologies: [
      'Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Hootsuite', 'Buffer', 'Canva', 'Adobe Creative Suite'
    ],
    relatedServices: ['content-creation', 'analytics-reporting', 'ai-integration']
  }
]

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find(s => s.id === slug)
  
  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex mb-6">
                <ol className="flex items-center space-x-2 text-sm text-white/70">
                  <li>
                    <Link href="/services" className="hover:text-[#00E6FF]">
                      Services
                    </Link>
                  </li>
                  <li className="text-white/50">/</li>
                  <li className="text-white font-medium">
                    {service.name}
                  </li>
                </ol>
              </nav>

              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="gradient-text">{service.name}</span>
              </h1>
              <p className="text-xl text-white/95 mb-8 font-light">
                {service.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" size="lg">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-strong">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E6FF]/20 to-[#A066FF]/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-8xl mb-4">{service.icon}</div>
                    <div className="text-xl font-semibold">Service Image</div>
                    <div className="text-sm opacity-80">{service.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What's Included
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive features and services to help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#00E6FF]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#00E6FF]/30">
                  <div className="w-2 h-2 bg-[#00E6FF] rounded-full"></div>
                </div>
                <p className="text-white/90">{feature}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-white/95 max-w-3xl mx-auto font-light">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00E6FF] to-[#A066FF] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-lg shadow-[#00E6FF]/30">
                    {step.step}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#00E6FF]/30 -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technologies Section */}
      {service.technologies && (
        <Section padding="lg" background="gradient">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Technologies We <span className="gradient-text">Use</span>
              </h2>
              <p className="text-lg text-white/95 font-light">
                Modern tools and technologies to deliver the best results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" size="lg">
                  {tech}
                </Badge>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Pricing Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg text-white/95 mb-8 font-light">
              Transparent pricing with no hidden fees.
            </p>
            
            <Card className="p-8">
              <CardContent>
                <div className="text-4xl font-bold text-[#00E6FF] mb-2">
                  {service.pricing.startingFrom}
                </div>
                <p className="text-white/90 mb-6">
                  Starting price for basic projects
                </p>
                <p className="text-sm text-white/70 mb-6">
                  * Final pricing depends on project scope and requirements
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full">
                    Get Custom Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-white/95 mb-8 font-light">
              Let's discuss your project and how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
