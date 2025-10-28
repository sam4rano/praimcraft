import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { MagneticHover } from '@/components/animations/MagneticHover';

const openPositions = [
  {
    id: 'senior-developer',
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    description: 'Join our engineering team to build cutting-edge web applications and digital solutions.',
    requirements: [
      '5+ years of experience with React, Node.js, and TypeScript',
      'Experience with modern web frameworks (Next.js, Express)',
      'Strong understanding of database design and optimization',
      'Experience with cloud platforms (AWS, Vercel)',
      'Excellent problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible remote work',
      'Health, dental, and vision insurance',
      'Professional development budget',
      'Unlimited PTO'
    ]
  },
  {
    id: 'marketing-manager',
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Hybrid',
    description: 'Lead our digital marketing efforts and drive growth through innovative campaigns.',
    requirements: [
      '3+ years of digital marketing experience',
      'Proficiency in Google Ads, Facebook Ads, and LinkedIn Ads',
      'Experience with marketing automation tools',
      'Strong analytical and reporting skills',
      'Creative thinking and strategic planning abilities'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Hybrid work arrangement',
      'Health and wellness benefits',
      'Marketing conference attendance',
      'Creative freedom and autonomy'
    ]
  },
  {
    id: 'ui-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    description: 'Create beautiful and intuitive user experiences that delight our clients and their users.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, and Adobe Creative Suite',
      'Strong portfolio showcasing web and mobile design',
      'Understanding of design systems and accessibility',
      'Experience with user research and testing'
    ],
    benefits: [
      'Competitive salary and design tools budget',
      'Fully remote work',
      'Health and dental insurance',
      'Design conference and course budget',
      'Collaborative and creative environment'
    ]
  }
];

const companyValues = [
  {
    title: 'Innovation',
    description: 'We embrace new technologies and creative solutions to solve complex problems.',
    icon: '🚀'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.',
    icon: '🤝'
  },
  {
    title: 'Growth',
    description: 'We invest in our team\'s professional development and career advancement.',
    icon: '📈'
  },
  {
    title: 'Quality',
    description: 'We deliver exceptional work that exceeds client expectations.',
    icon: '⭐'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Join Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Be part of a dynamic team that's building the future of digital solutions.
                We're looking for passionate individuals who want to make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>

      {/* Company Values */}
      <Section padding="lg">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <Badge variant="primary" size="lg" className="mb-4">Our Culture</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="gradient-text-alt">Values</span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <RevealOnScroll key={value.title} direction="up" delay={0.1 * (index + 1)}>
                <MagneticHover>
                  <Card className="text-center h-full hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-5xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-neutral-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section padding="lg" background="gradient">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <Badge variant="warning" size="lg" className="mb-4">Start Your Journey</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Open <span className="text-accent-600">Positions</span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto">
                Ready to join our team? Check out our current openings and find your perfect role.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <RevealOnScroll key={position.id} direction="up" delay={0.1 * (index + 1)}>
                <MagneticHover>
                  <Card className="overflow-hidden hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{position.department}</Badge>
                            <Badge variant="secondary">{position.type}</Badge>
                            <Badge variant="secondary">{position.location}</Badge>
                          </div>
                          <p className="text-neutral-600 text-lg">
                            {position.description}
                          </p>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-8">
                          <Button size="lg">
                            Apply Now
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                <span className="text-neutral-600">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {position.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-600 mr-2">•</span>
                                <span className="text-neutral-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MagneticHover>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600 via-primary-600 to-warning-600 opacity-95"></div>
        <Container className="relative z-10">
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="primary" size="lg" className="mb-6 bg-white/20 text-white border-white/30">Still Interested?</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Don't See Your <span className="text-secondary-300">Role?</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <Button size="lg">
                Send Your Resume
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </div>
  );
}
