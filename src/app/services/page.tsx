import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { StaggerItem } from '@/components/animations/StaggerItem';
import { getAllServices } from '@/lib/sanity/fetch';
import { generateMetadata as generateSEOMetadata, pageMetadata } from '@/lib/seo/metadata';

export const metadata = generateSEOMetadata(pageMetadata.services);

interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  icon?: string;
}

export default async function ServicesPage() {
  // Fetch real data from Sanity with fallbacks
  const services: Service[] = await getAllServices().catch(() => []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto px-4">
              <Badge variant="primary" size="lg" className="mb-4">Our Expertise</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Comprehensive Digital Services
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600">
                We offer a wide range of digital solutions designed to elevate your brand and drive measurable results.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section padding="lg">
        <Container>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service._id}>
                <Link href={`/services/${service.slug.current}`}>
                  <Card className="h-full flex flex-col text-center group hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-8 flex flex-col items-center justify-center flex-grow">
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon || "💻"}</div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 mb-6 flex-grow">
                        {service.shortDescription}
                      </p>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Let&apos;s discuss how our expert digital services can help you achieve your goals.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Get a Free Consultation →
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}