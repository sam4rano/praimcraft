import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

// Placeholder data - will be replaced with Sanity data
const teamMembers = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'John has over 15 years of experience in digital marketing and technology. He founded Praimcraft with a vision to help businesses thrive in the digital age.',
    image: {
      _id: 'john-img',
      alt: 'John Doe',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg', _type: 'reference' }
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    },
    expertise: ['Strategy', 'Leadership', 'Digital Marketing']
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Lead Developer',
    bio: 'Jane is a full-stack developer with expertise in modern web technologies. She leads our development team and ensures all projects meet the highest standards.',
    image: {
      _id: 'jane-img',
      alt: 'Jane Smith',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg', _type: 'reference' }
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith'
    },
    expertise: ['React', 'Node.js', 'Python', 'AWS']
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    role: 'Creative Director',
    bio: 'Mike brings creativity and innovation to every project. With a background in design and marketing, he ensures our clients\' brands stand out in the digital landscape.',
    image: {
      _id: 'mike-img',
      alt: 'Mike Johnson',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg', _type: 'reference' }
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/mikejohnson',
      behance: 'https://behance.net/mikejohnson'
    },
    expertise: ['UI/UX Design', 'Branding', 'Creative Strategy']
  },
  {
    id: 'sarah-wilson',
    name: 'Sarah Wilson',
    role: 'AI Specialist',
    bio: 'Sarah is our AI and automation expert. She helps businesses leverage artificial intelligence to improve efficiency and drive growth.',
    image: {
      _id: 'sarah-img',
      alt: 'Sarah Wilson',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg', _type: 'reference' }
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahwilson',
      twitter: 'https://twitter.com/sarahwilson'
    },
    expertise: ['Machine Learning', 'Automation', 'Data Science']
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'Analytics Manager',
    bio: 'David specializes in data analysis and business intelligence. He helps our clients make data-driven decisions that drive real results.',
    image: {
      _id: 'david-img',
      alt: 'David Chen',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg', _type: 'reference' }
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidchen',
      twitter: 'https://twitter.com/davidchen'
    },
    expertise: ['Analytics', 'Data Visualization', 'Business Intelligence']
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    role: 'Content Strategist',
    bio: 'Emily creates compelling content that resonates with audiences and drives engagement. She leads our content marketing efforts and social media strategies.',
    image: {
      _id: 'emily-img',
      alt: 'Emily Rodriguez',
      asset: { _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-400x400-jpg', _type: 'reference' }
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez'
    },
    expertise: ['Content Marketing', 'Social Media', 'SEO']
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'We stay at the forefront of technology and continuously explore new ways to solve problems and create value for our clients.',
    icon: '💡'
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in everything we do, from code quality to client communication and project delivery.',
    icon: '⭐'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients as partners, ensuring their vision and goals are at the center of every project.',
    icon: '🤝'
  },
  {
    title: 'Results',
    description: 'We measure success by the tangible results we deliver for our clients, not just the work we complete.',
    icon: '📈'
  }
]

const stats = [
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '100+' },
  { label: 'Years Experience', value: '8+' },
  { label: 'Team Members', value: '25+' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              About <span className="gradient-text">Praimcraft</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              We&apos;re a team of passionate digital experts dedicated to helping businesses thrive in the modern world through innovative technology solutions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Company Story */}
      <Section padding="lg" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-700 mb-6">
                  Founded in 2016, Praimcraft began as a small team of developers and designers with a shared vision: to bridge the gap between technology and business success. We saw that many companies were struggling to adapt to the rapidly changing digital landscape.
                </p>
                <p className="text-lg text-neutral-700 mb-6">
                  Today, we&apos;ve grown into a full-service digital agency that has helped over 100 businesses transform their digital presence. From startups to enterprise companies, we&apos;ve delivered solutions that drive real results.
                </p>
                <p className="text-lg text-neutral-700">
                  Our mission is simple: to empower businesses with the tools, strategies, and technology they need to succeed in the digital age. We believe that every business, regardless of size, deserves access to world-class digital solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-strong">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-8xl mb-4">🏢</div>
                    <div className="text-xl font-semibold">Our Office</div>
                    <div className="text-sm opacity-80">Modern workspace</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section padding="lg" background="gray">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section padding="lg" background="white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section padding="lg" background="gray">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The talented individuals who make Praimcraft a success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center hover:-translate-y-1 transform transition-all duration-300">
                <CardContent className="p-8">
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-neutral-600 mb-6 text-sm">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="text-primary-600 hover:text-primary-700"
                        aria-label="LinkedIn"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">in</span>
                        </div>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        className="text-primary-600 hover:text-primary-700"
                        aria-label="Twitter"
                      >
                        <span className="sr-only">Twitter</span>
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">𝕏</span>
                        </div>
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        className="text-primary-600 hover:text-primary-700"
                        aria-label="GitHub"
                      >
                        <span className="sr-only">GitHub</span>
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">GH</span>
                        </div>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let&apos;s discuss how our team can help your business achieve its digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
