import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

// Placeholder data - will be replaced with Sanity data
const caseStudies = [
  {
    id: 'ecommerce-platform-redesign',
    title: 'E-commerce Platform Redesign',
    client: 'TechCorp',
    industry: 'E-commerce',
    challenge: 'TechCorp was struggling with an outdated e-commerce platform that had poor user experience, slow loading times, and low conversion rates. Their existing system was built on legacy technology and wasn\'t mobile-responsive, leading to significant revenue loss.',
    solution: 'We completely redesigned their e-commerce platform from the ground up, implementing modern UI/UX principles, mobile-first design, and performance optimizations. The new platform features a streamlined checkout process, advanced search functionality, and personalized product recommendations.',
    results: [
      { label: 'Conversion Rate Increase', value: '300%', description: 'From 1.2% to 4.8%' },
      { label: 'Page Load Speed', value: '50% faster', description: 'From 8s to 4s average' },
      { label: 'Mobile Traffic', value: '150% increase', description: 'Mobile users doubled' },
      { label: 'Customer Satisfaction', value: '4.8/5 stars', description: 'Based on 500+ reviews' },
      { label: 'Revenue Growth', value: '250% increase', description: 'Year-over-year growth' },
      { label: 'Cart Abandonment', value: '40% reduction', description: 'Improved checkout flow' }
    ],
    testimonial: {
      quote: 'Praimcraft transformed our online presence completely. The results speak for themselves - we\'ve seen a 300% increase in conversions and our customers love the new experience. The team was professional, responsive, and delivered beyond our expectations.',
      author: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      company: 'TechCorp'
    },
    featuredImage: {
      _id: 'cs1',
      alt: 'E-commerce platform redesign',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-1200x800-jpg', _type: 'reference' }
    },
    gallery: [
      {
        _id: 'cs1-g1',
        alt: 'Before and after comparison',
        asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
      },
      {
        _id: 'cs1-g2',
        alt: 'Mobile optimization',
        asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
      },
      {
        _id: 'cs1-g3',
        alt: 'Checkout process',
        asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
      }
    ],
    services: ['Software Development', 'UI/UX Design', 'Performance Optimization', 'Mobile Development'],
    duration: '3 months',
    team: ['Project Manager', 'UI/UX Designer', 'Frontend Developer', 'Backend Developer', 'QA Engineer'],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Redis'],
    featured: true
  }
]

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudies.find(s => s.id === slug)
  
  if (!study) {
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
                <ol className="flex items-center space-x-2 text-sm text-neutral-600">
                  <li>
                    <Link href="/case-studies" className="hover:text-primary-600">
                      Case Studies
                    </Link>
                  </li>
                  <li className="text-neutral-400">/</li>
                  <li className="text-neutral-900 font-medium">
                    {study.title}
                  </li>
                </ol>
              </nav>

              <div className="space-y-4 mb-8">
                <Badge variant="primary" size="lg">
                  {study.industry}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900">
                  {study.title}
                </h1>
                <p className="text-xl text-neutral-600">
                  <strong>Client:</strong> {study.client}
                </p>
                <p className="text-lg text-neutral-600">
                  <strong>Duration:</strong> {study.duration}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {study.services.map((service, index) => (
                  <Badge key={index} variant="secondary" size="sm">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-strong">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-8xl mb-4">📈</div>
                    <div className="text-xl font-semibold">Case Study Image</div>
                    <div className="text-sm opacity-80">{study.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge Section */}
      <Section padding="lg" background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              The Challenge
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed">
                {study.challenge}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution Section */}
      <Section padding="lg" background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Our Solution
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      <Section padding="lg" background="white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              The Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {study.results.map((result, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {result.value}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {result.label}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery Section */}
      {study.gallery && study.gallery.length > 0 && (
        <Section padding="lg" background="gray">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
                Project Gallery
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-soft">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                      <div className="text-center text-primary-600">
                        <div className="text-4xl mb-2">🖼️</div>
                        <div className="text-sm font-medium">Project Image</div>
                        <div className="text-xs opacity-80">{image.alt}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Technologies Section */}
      {study.technologies && (
        <Section padding="lg" background="white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Technologies Used
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Modern tools and technologies that powered this project.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {study.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" size="lg">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Testimonial Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-strong">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-2xl font-medium text-neutral-900 mb-8 leading-relaxed">
                "{study.testimonial.quote}"
              </blockquote>
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-lg font-semibold text-neutral-900">
                  {study.testimonial.author}
                </p>
                <p className="text-neutral-600">
                  {study.testimonial.role}
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  {study.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Details */}
      <Section padding="lg" background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Project Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Project Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Client:</span>
                      <span className="font-medium">{study.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Industry:</span>
                      <span className="font-medium">{study.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Duration:</span>
                      <span className="font-medium">{study.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Services:</span>
                      <span className="font-medium">{study.services.length} services</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Team
                  </h3>
                  <div className="space-y-2">
                    {study.team.map((member, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-neutral-700">{member}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gray">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let's discuss how we can help your business achieve its digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                View More Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section padding="sm" background="white">
        <Container>
          <div className="flex justify-between items-center">
            <Button variant="outline">
              ← Previous Case Study
            </Button>
            <Link href="/case-studies">
              <Button variant="outline">
                Back to Case Studies
              </Button>
            </Link>
            <Button variant="outline">
              Next Case Study →
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  )
}
