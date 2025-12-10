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
            <Container className="relative z-10">
            <RevealOnScroll direction="left" delay={0.2}>
              <div className="space-y-8 sm:space-y-10 lg:space-y-12 pt-20 sm:pt-24 lg:pt-32 text-white">
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
                    Digital Solutions That
                    <span className="gradient-text block mt-4 sm:mt-5 lg:mt-6">Drive Results</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 leading-relaxed max-w-2xl font-light">
                        We&apos;re a multi-service digital agency specializing in software development,
                    social media management, analytics, automation, and AI integration.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 w-full sm:w-auto pt-2">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
                      Get Started Today →
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
                      View Our Work
                    </Button>
                  </Link>
                </div>

                <RevealOnScroll direction="up" delay={0.6}>
                  <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-12 sm:pt-16 lg:pt-20">
                    <div className="text-center group">
                      <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00E6FF] group-hover:scale-110 transition-transform duration-200 mb-2 sm:mb-3 drop-shadow-[0_0_10px_rgba(0,230,255,0.5)]">50+</div>
                      <div className="text-sm sm:text-base lg:text-lg text-white/95 mt-2 font-medium">Projects Completed</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#A066FF] group-hover:scale-110 transition-transform duration-200 mb-2 sm:mb-3 drop-shadow-[0_0_10px_rgba(160,102,255,0.5)]">98%</div>
                      <div className="text-sm sm:text-base lg:text-lg text-white/95 mt-2 font-medium">Client Satisfaction</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FF2DAF] group-hover:scale-110 transition-transform duration-200 mb-2 sm:mb-3 drop-shadow-[0_0_10px_rgba(255,45,175,0.5)]">24/7</div>
                      <div className="text-sm sm:text-base lg:text-lg text-white/95 mt-2 font-medium">Support Available</div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </RevealOnScroll>
            </Container>
      </AbstractBackground>

      {/* Services Section */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="lg" background="gradient">
          <Container>
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center mb-20">
              <Badge variant="primary" size="lg" className="mb-4">What We Do</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
                We offer comprehensive digital solutions to help your business thrive in the modern world.
              </p>
            </div>
          </RevealOnScroll>

              {services.length > 0 ? (
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
                              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E6FF] transition-colors duration-300">
                                {service.title}
                              </h3>
                              <p className="text-white/95 mb-8 leading-relaxed font-light">
                                {service.shortDescription}
                              </p>
                              <Link href={`/services/${service.slug.current}`}>
                                <Button 
                                  variant="outline" 
                                  size="sm"
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
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">💼</div>
                  <p className="text-white/80">Services information coming soon.</p>
                </div>
              )}
          </Container>
        </Section>
      </AbstractBackground>

      {/* Case Studies Section */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="lg" background="gradient">
          <Container>
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <Badge variant="secondary" size="lg" className="mb-4">Our Impact</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto font-light">
                    See how we&apos;ve helped businesses achieve their digital goals.
              </p>
            </div>
          </FadeIn>

              {caseStudies.length > 0 ? (
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies.map((study: any, index: number) => (
                    <StaggerItem key={study._id}>
                      <Card className="group hover:-translate-y-1 transform transition-all duration-300">
                          <div className="relative h-48 bg-gradient-to-br from-[#00E6FF]/20 to-[#A066FF]/20 rounded-t-xl flex items-center justify-center border-b border-[#00E6FF]/20">
                            <div className="text-center text-white">
                              <div className="text-4xl mb-2">📈</div>
                              <div className="text-sm font-medium">Case Study Image</div>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {study.title}
                            </h3>
                            <p className="text-white/90 mb-4 font-light">
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
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">📊</div>
                  <p className="text-white/80">Case studies coming soon.</p>
                </div>
              )}

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
      </AbstractBackground>

      {/* Blog Section */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="lg" background="gradient">
          <Container>
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <Badge variant="warning" size="lg" className="mb-4">From Our Blog</Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Latest <span className="gradient-text">Insights</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto font-light">
                Stay updated with the latest trends and insights in digital marketing and technology.
              </p>
            </div>
          </FadeIn>

              {blogPosts.length > 0 ? (
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
                              <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-[#00E6FF] transition-colors duration-200">
                                {post.title}
                              </h3>
                              <p className="text-white/90 line-clamp-3 font-light">
                                {typeof post.excerpt === 'string' ? post.excerpt : 'Preview content available'}
                              </p>
                              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                <span className="text-sm text-white/80">
                                  By {post.author?.name || "Unknown Author"}
                                </span>
                                <span className="text-sm text-white/80">
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
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">📝</div>
                  <p className="text-white/80">Blog posts coming soon.</p>
                </div>
              )}

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
      <Section padding="xl" background="gradient" className="relative overflow-hidden">
        <Container className="relative z-10">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="primary" size="lg" className="mb-6">Let's Build Together</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your <span className="gradient-text">Digital Presence?</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/95 mb-10 leading-relaxed font-light">
                Let&apos;s work together to create digital solutions that drive real results for your business.
              </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button size="lg" className="w-full sm:w-auto">
                        Start Your Project →
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>
                  </div>
                </FadeIn>
          </Container>
        </Section>
      </AbstractBackground>
    </div>
  );
}
