import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { ParallaxScroll } from "@/components/animations/ParallaxScroll";
import { MagneticHover } from "@/components/animations/MagneticHover";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { AbstractBackground, GeometricCard, FloatingOrb } from "@/components/visual/AbstractBackground";
import { GlowEffect } from "@/components/visual/GlowEffect";
import { getAllServices, getFeaturedCaseStudies, getFeaturedBlogPosts } from "@/lib/sanity/fetch";
import { generateMetadata as generateSEOMetadata, pageMetadata } from "@/lib/seo/metadata";

export const metadata = generateSEOMetadata(pageMetadata.home);

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  author?: {
    name: string;
    image?: any;
    role?: string;
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
    color?: string;
  }>;
  publishedAt: string;
  readingTime?: number;
}

export default async function Home() {
  // Fetch real data from Sanity with fallbacks
  const [services, caseStudies, blogPosts] = await Promise.all([
    getAllServices().catch((error) => {
      console.error('Error fetching services:', error);
      return [];
    }),
    getFeaturedCaseStudies().catch((error) => {
      console.error('Error fetching case studies:', error);
      return [];
    }),
    getFeaturedBlogPosts().catch((error) => {
      console.error('Error fetching blog posts:', error);
      return [];
    }),
  ]);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AbstractBackground variant="hero" intensity="medium" className="min-h-screen">
            <RevealOnScroll direction="left" delay={0.2}>
              <div className="space-y-4 sm:space-y-4 lg:space-y-4 pt-18  text-white px-4 sm:px-2">
                <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] sm:leading-[1.1]">
                    Digital Solutions That
                    <span className="gradient-text block mt-2">Drive Results</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-lg">
                        We&apos;re a multi-service digital agency specializing in software development,
                    social media management, analytics, automation, and AI integration.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 w-full sm:w-auto">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started Today →
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900">
                      View Our Work
                    </Button>
                  </Link>
                </div>

                <RevealOnScroll direction="up" delay={0.6}>
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
                    <div className="text-center group">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-200">50+</div>
                      <div className="text-xs sm:text-sm text-neutral-300 mt-1">Projects Completed</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-200">98%</div>
                      <div className="text-xs sm:text-sm text-neutral-300 mt-1">Client Satisfaction</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-200">24/7</div>
                      <div className="text-xs sm:text-sm text-neutral-300 mt-1">Support Available</div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </RevealOnScroll>

      </AbstractBackground>

      {/* Services Section */}
      <Section padding="lg" background="white">
        <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <Badge variant="primary" size="lg" className="mb-4">What We Do</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We offer comprehensive digital solutions to help your business thrive in the modern world.
              </p>
            </div>
          </RevealOnScroll>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service: any, index: number) => (
                  <StaggerItem key={service._id}>
                    <MagneticHover strength={0.2}>
                      <GlowEffect intensity="soft" color="primary">
                        <GeometricCard className="text-center group relative overflow-hidden h-full">
                          <div className="relative z-10">
                            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                              {service.icon || "💻"}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-400 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-neutral-300 mb-8 leading-relaxed">
                              {service.shortDescription}
                            </p>
                            <Link href={`/services/${service.slug.current}`}>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="border-white text-white hover:bg-accent-500 hover:text-white hover:border-accent-500"
                              >
                                Learn More →
                              </Button>
                            </Link>
                          </div>
                          <FloatingOrb size="sm" color="accent" position="top-right" />
                        </GeometricCard>
                      </GlowEffect>
                    </MagneticHover>
                  </StaggerItem>
                ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Case Studies Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <Badge variant="secondary" size="lg" className="mb-4">Our Impact</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Success <span className="text-accent-600">Stories</span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700 max-w-3xl mx-auto">
                    See how we&apos;ve helped businesses achieve their digital goals.
              </p>
            </div>
          </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study: any, index: number) => (
                  <StaggerItem key={study._id}>
                    <Card className="group hover:-translate-y-1 transform transition-all duration-300">
                        <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-100 rounded-t-xl flex items-center justify-center">
                          <div className="text-center text-primary-600">
                            <div className="text-4xl mb-2">📈</div>
                            <div className="text-sm font-medium">Case Study Image</div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            {study.title}
                          </h3>
                          <p className="text-neutral-600 mb-4">
                            Client: {study.client}
                          </p>
                          <Badge variant="success" size="sm">
                            View Results
                          </Badge>
                        </CardContent>
                      </Card>
                  </StaggerItem>
                ))}
          </StaggerContainer>

              <FadeIn direction="up" delay={0.4}>
                <div className="text-center mt-12">
                  <Link href="/case-studies">
                    <Button size="lg">
                      View All Case Studies →
                    </Button>
                  </Link>
                </div>
              </FadeIn>
        </Container>
      </Section>

      {/* Blog Section */}
      <Section padding="lg" background="white">
        <Container>
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <Badge variant="warning" size="lg" className="mb-4">From Our Blog</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Latest <span className="gradient-text-alt">Insights</span>
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
                Stay updated with the latest trends and insights in digital marketing and technology.
              </p>
            </div>
          </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post: BlogPost, index: number) => (
                  <StaggerItem key={post._id}>
                    <Link href={`/blog/${post.slug.current}`}>
                      <Card className="h-full group hover:-translate-y-1 transform transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {post.categories && post.categories.length > 0 && (
                              <Badge variant="secondary" size="sm">
                                {post.categories[0].title}
                              </Badge>
                            )}
                            <h3 className="text-xl font-bold text-neutral-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                              {post.title}
                            </h3>
                            <p className="text-neutral-600 line-clamp-3">
                              {typeof post.excerpt === 'string' ? post.excerpt : 'Preview content available'}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                              <span className="text-sm text-neutral-500">
                                By {post.author?.name || "Unknown Author"}
                              </span>
                              <span className="text-sm text-neutral-500">
                                {new Date(post.publishedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
          </StaggerContainer>

              <FadeIn direction="up" delay={0.4}>
                <div className="text-center mt-12">
                  <Link href="/blog">
                    <Button size="lg">
                      Read Our Blog →
                    </Button>
                  </Link>
                </div>
              </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600 opacity-95"></div>
        <Container className="relative z-10">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="primary" size="lg" className="mb-6 bg-white/20 text-white border-white/30">Let's Build Together</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your <span className="text-warning-300">Digital Presence?</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
                Let&apos;s work together to create digital solutions that drive real results for your business.
              </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-white/90">
                        Start Your Project →
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-600">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>
        </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
