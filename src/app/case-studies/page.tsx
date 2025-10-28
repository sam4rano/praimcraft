import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'

// Placeholder data - will be replaced with Sanity data
const caseStudies = [
  {
    id: 'ecommerce-platform-redesign',
    title: 'E-commerce Platform Redesign',
    client: 'TechCorp',
    industry: 'E-commerce',
    challenge: 'Outdated platform with poor user experience and low conversion rates.',
    solution: 'Complete redesign with modern UI/UX, mobile optimization, and performance improvements.',
    results: [
      { label: 'Conversion Rate Increase', value: '300%' },
      { label: 'Page Load Speed', value: '50% faster' },
      { label: 'Mobile Traffic', value: '150% increase' },
      { label: 'Customer Satisfaction', value: '4.8/5 stars' }
    ],
    testimonial: {
      quote: 'Praimcraft transformed our online presence completely. The results speak for themselves.',
      author: 'Sarah Johnson',
      role: 'CEO, TechCorp'
    },
    featuredImage: {
      _id: 'cs1',
      alt: 'E-commerce platform redesign',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
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
      }
    ],
    services: ['Software Development', 'UI/UX Design', 'Performance Optimization'],
    duration: '3 months',
    featured: true
  },
  {
    id: 'social-media-campaign-success',
    title: 'Social Media Campaign Success',
    client: 'StartupXYZ',
    industry: 'Technology',
    challenge: 'Low brand awareness and limited social media engagement.',
    solution: 'Strategic social media campaign with content creation and community management.',
    results: [
      { label: 'Follower Growth', value: '500%' },
      { label: 'Engagement Rate', value: '250% increase' },
      { label: 'Lead Generation', value: '400% increase' },
      { label: 'Brand Mentions', value: '300% increase' }
    ],
    testimonial: {
      quote: 'Our social media presence has never been stronger. The team exceeded our expectations.',
      author: 'Mike Chen',
      role: 'Marketing Director, StartupXYZ'
    },
    featuredImage: {
      _id: 'cs2',
      alt: 'Social media campaign',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
    },
    gallery: [
      {
        _id: 'cs2-g1',
        alt: 'Social media analytics',
        asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
      }
    ],
    services: ['Social Media Management', 'Content Creation', 'Analytics & Reporting'],
    duration: '6 months',
    featured: true
  },
  {
    id: 'ai-powered-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    client: 'DataFlow Inc',
    industry: 'Analytics',
    challenge: 'Manual reporting processes consuming too much time and resources.',
    solution: 'Custom AI-powered dashboard with automated insights and real-time reporting.',
    results: [
      { label: 'Reporting Time', value: '50% reduction' },
      { label: 'Data Accuracy', value: '95% improvement' },
      { label: 'User Adoption', value: '90% of team' },
      { label: 'Cost Savings', value: '$50K annually' }
    ],
    testimonial: {
      quote: 'The AI dashboard has revolutionized how we analyze data. Incredible results!',
      author: 'Dr. Lisa Wang',
      role: 'CTO, DataFlow Inc'
    },
    featuredImage: {
      _id: 'cs3',
      alt: 'AI analytics dashboard',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
    },
    gallery: [
      {
        _id: 'cs3-g1',
        alt: 'Dashboard interface',
        asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
      }
    ],
    services: ['AI Integration', 'Software Development', 'Analytics & Reporting'],
    duration: '4 months',
    featured: false
  },
  {
    id: 'workflow-automation-solution',
    title: 'Workflow Automation Solution',
    client: 'ManufacturingCo',
    industry: 'Manufacturing',
    challenge: 'Inefficient manual processes causing delays and errors.',
    solution: 'Comprehensive workflow automation system with custom integrations.',
    results: [
      { label: 'Process Efficiency', value: '75% improvement' },
      { label: 'Error Reduction', value: '90% decrease' },
      { label: 'Time Savings', value: '40 hours/week' },
      { label: 'ROI', value: '300% in first year' }
    ],
    testimonial: {
      quote: 'The automation solution has transformed our operations. Highly recommended!',
      author: 'Robert Martinez',
      role: 'Operations Manager, ManufacturingCo'
    },
    featuredImage: {
      _id: 'cs4',
      alt: 'Workflow automation',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
    },
    gallery: [],
    services: ['Workflow Automation', 'System Integration', 'Process Optimization'],
    duration: '5 months',
    featured: false
  },
  {
    id: 'content-marketing-transformation',
    title: 'Content Marketing Transformation',
    client: 'HealthTech Solutions',
    industry: 'Healthcare Technology',
    challenge: 'Low content engagement and poor SEO performance.',
    solution: 'Strategic content marketing with SEO optimization and multi-channel distribution.',
    results: [
      { label: 'Organic Traffic', value: '400% increase' },
      { label: 'Content Engagement', value: '350% improvement' },
      { label: 'Lead Quality', value: '200% better' },
      { label: 'Brand Authority', value: 'Significantly improved' }
    ],
    testimonial: {
      quote: 'Our content strategy is now a key driver of business growth. Excellent work!',
      author: 'Jennifer Adams',
      role: 'CMO, HealthTech Solutions'
    },
    featuredImage: {
      _id: 'cs5',
      alt: 'Content marketing',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
    },
    gallery: [],
    services: ['Content Creation', 'SEO Optimization', 'Analytics & Reporting'],
    duration: '8 months',
    featured: false
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    client: 'FitnessFirst',
    industry: 'Health & Fitness',
    challenge: 'Need for a mobile app to engage users and track fitness progress.',
    solution: 'Cross-platform mobile app with fitness tracking and social features.',
    results: [
      { label: 'App Downloads', value: '100K+ in first month' },
      { label: 'User Retention', value: '85% after 30 days' },
      { label: 'App Store Rating', value: '4.7/5 stars' },
      { label: 'User Engagement', value: '3x daily active users' }
    ],
    testimonial: {
      quote: 'The app has exceeded all our expectations. Users love it!',
      author: 'David Kim',
      role: 'Founder, FitnessFirst'
    },
    featuredImage: {
      _id: 'cs6',
      alt: 'Mobile app development',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-800x600-jpg', _type: 'reference' }
    },
    gallery: [],
    services: ['Mobile App Development', 'UI/UX Design', 'Backend Development'],
    duration: '6 months',
    featured: false
  }
]

export default function CaseStudiesPage() {
  const featuredCaseStudies = caseStudies.filter(study => study.featured)
  const otherCaseStudies = caseStudies.filter(study => !study.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" size="lg" className="mb-4">Proven Results</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 mb-8 leading-relaxed">
              Real results from real clients. See how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Case Studies */}
      <Section padding="lg" background="white">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="warning" size="lg" className="mb-4">Featured Projects</Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="text-accent-600">Case Studies</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Our most impactful projects that showcase our expertise and results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study) => (
              <Card key={study.id} className="h-full hover:-translate-y-1 transform transition-all duration-300">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className="text-center text-primary-600">
                      <div className="text-6xl mb-4">📈</div>
                      <div className="text-lg font-semibold">Case Study Image</div>
                      <div className="text-sm opacity-80">{study.title}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="primary" size="sm">
                        {study.industry}
                      </Badge>
                      <span className="text-sm text-neutral-500">
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {study.title}
                    </h3>
                    
                    <p className="text-neutral-600">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <p className="text-neutral-600">
                      {study.challenge}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-primary-600">
                            {result.value}
                          </div>
                          <div className="text-sm text-neutral-600">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {study.services.map((service, index) => (
                        <Badge key={index} variant="secondary" size="sm">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-4">
                      <Link href={`/case-studies/${study.id}`}>
                        <Button size="sm" className="w-full">
                          View Full Case Study →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* All Case Studies */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">Complete Portfolio</Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              All <span className="gradient-text-alt">Case Studies</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto">
              Complete portfolio of our successful projects across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="h-full hover:-translate-y-1 transform transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className="text-center text-primary-600">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-sm font-medium">Case Study</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" size="sm">
                        {study.industry}
                      </Badge>
                      <span className="text-xs text-neutral-500">
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-neutral-900 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-600">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">
                          {study.results[0]?.value}
                        </div>
                        <div className="text-xs text-neutral-600">
                          {study.results[0]?.label}
                        </div>
                      </div>
                      <Link href={`/case-studies/${study.id}`}>
                        <Button variant="outline" size="sm">
                          View Details →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-600 via-primary-600 to-accent-600 opacity-95"></div>
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" size="lg" className="mb-6 bg-white/20 text-white border-white/30">Your Turn</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Create Your <span className="text-warning-300">Success Story?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
              Let's work together to achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Project →
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
