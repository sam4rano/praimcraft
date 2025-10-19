import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { MagneticHover } from '@/components/animations/MagneticHover';

const documentationSections = [
  {
    title: 'Getting Started',
    description: 'Everything you need to know to get up and running with our services.',
    icon: '🚀',
    articles: [
      { title: 'Quick Start Guide', description: 'Get started in 5 minutes', readTime: '5 min' },
      { title: 'Account Setup', description: 'Configure your account settings', readTime: '10 min' },
      { title: 'First Project', description: 'Create your first project', readTime: '15 min' },
      { title: 'Best Practices', description: 'Learn our recommended workflows', readTime: '20 min' }
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation for developers and integrators.',
    icon: '⚡',
    articles: [
      { title: 'Authentication', description: 'How to authenticate with our API', readTime: '10 min' },
      { title: 'Endpoints', description: 'All available API endpoints', readTime: '30 min' },
      { title: 'Rate Limits', description: 'Understanding API rate limits', readTime: '5 min' },
      { title: 'Error Handling', description: 'Common errors and how to handle them', readTime: '15 min' }
    ]
  },
  {
    title: 'Integrations',
    description: 'Connect with your favorite tools and platforms.',
    icon: '🔗',
    articles: [
      { title: 'Webhook Setup', description: 'Configure webhooks for real-time updates', readTime: '15 min' },
      { title: 'Zapier Integration', description: 'Connect with Zapier automation', readTime: '10 min' },
      { title: 'Slack Integration', description: 'Get notifications in Slack', readTime: '8 min' },
      { title: 'Custom Integrations', description: 'Build your own integrations', readTime: '25 min' }
    ]
  },
  {
    title: 'Troubleshooting',
    description: 'Common issues and their solutions.',
    icon: '🔧',
    articles: [
      { title: 'Common Issues', description: 'Frequently asked questions and solutions', readTime: '20 min' },
      { title: 'Performance Optimization', description: 'Tips to improve performance', readTime: '15 min' },
      { title: 'Debugging Guide', description: 'How to debug common problems', readTime: '25 min' },
      { title: 'Contact Support', description: 'When and how to contact our support team', readTime: '5 min' }
    ]
  }
];

const quickLinks = [
  { title: 'API Status', description: 'Check our API status and uptime', href: '/status' },
  { title: 'Changelog', description: 'Latest updates and new features', href: '/changelog' },
  { title: 'Community Forum', description: 'Connect with other users', href: '/community' },
  { title: 'Video Tutorials', description: 'Watch step-by-step tutorials', href: '/tutorials' }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Documentation
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Everything you need to know to get the most out of our services.
                From quick start guides to advanced integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Browse API Reference
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section padding="md" background="white">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Quick Links
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <RevealOnScroll key={link.title} direction="up" delay={0.1 * (index + 1)}>
                <MagneticHover>
                  <Card className="text-center h-full hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {link.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4">
                        {link.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Visit
                      </Button>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* Documentation Sections */}
      <Section padding="lg" background="gray">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Find the information you need organized by topic and difficulty level.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-12">
            {documentationSections.map((section, sectionIndex) => (
              <RevealOnScroll key={section.title} direction="up" delay={0.1 * (sectionIndex + 1)}>
                <div>
                  <div className="flex items-center mb-8">
                    <div className="text-4xl mr-4">{section.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-neutral-600">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.articles.map((article, articleIndex) => (
                      <MagneticHover key={article.title}>
                        <Card className="h-full hover:-translate-y-1 transform transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-lg font-semibold text-neutral-900">
                                {article.title}
                              </h4>
                              <Badge variant="secondary" size="sm">
                                {article.readTime}
                              </Badge>
                            </div>
                            <p className="text-neutral-600 text-sm mb-4">
                              {article.description}
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              Read More
                            </Button>
                          </CardContent>
                        </Card>
                      </MagneticHover>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* Search Section */}
      <Section padding="lg" background="white">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Search our documentation or contact our support team for personalized help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Button size="lg">
                  Search
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </div>
  );
}
