import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AbstractBackground } from '@/components/visual/AbstractBackground';
import { getBlogPost, getAllBlogPosts } from '@/lib/sanity/fetch';
import { PortableText } from '@portabletext/react';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/metadata';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  body?: any;
  excerpt?: string;
  author?: {
    name: string;
    image?: any;
    role?: string;
    bio?: string;
  };
  categories?: Array<{
    title: string;
    slug: { current: string };
    color?: string;
  }>;
  publishedAt: string;
  readingTime?: number;
  featuredImage?: any;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);
  
  if (!post) {
    return {
      title: 'Post Not Found | Praimcraft',
      description: 'The requested blog post could not be found.',
    };
  }

  return generateSEOMetadata({
    title: post.title,
    description: typeof post.excerpt === 'string' ? post.excerpt : 'Read this blog post on Praimcraft',
    keywords: post.categories?.map((cat: { title: any; }) => cat.title) || [],
    image: post.featuredImage?.asset?.url,
    url: `/blog/${post.slug.current}`,
    type: 'article',
    publishedTime: post.publishedAt,
    authors: post.author?.name ? [post.author.name] : ['Praimcraft Team'],
    section: post.categories?.[0]?.title,
    tags: post.categories?.map((cat: { title: any; }) => cat.title) || [],
  });
}

// Enable dynamic params to allow non-pre-rendered slugs
export const dynamicParams = true;

// Force dynamic rendering for all blog posts
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  try {
    const posts = await getAllBlogPosts();
    console.log(`[Build] Found ${posts.length} blog posts for static generation`);
    return posts.map((post: BlogPost) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.error('[Build] Error fetching blog posts for static params:', error);
    // Return empty array to allow dynamic rendering
    return [];
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);

  if (!post) {
    notFound();
  }


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="md" background="gradient">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <Link href="/blog">
                  <Button variant="outline" size="sm">
                    ← Back to Blog
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category: any, index: number) => (
                    <Badge key={category._id || `category-${index}`} variant="secondary">
                      {category.title}
                    </Badge>
                  ))}
                </div>
              )}
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                  {post.title}
                </h1>
                
                {post.excerpt && (
                  <p className="text-lg sm:text-xl text-white/95 font-light">
                    {typeof post.excerpt === 'string' ? post.excerpt : 'Preview content available'}
                  </p>
                )}
                
                <div className="flex items-center gap-6 pt-4 border-t border-white/20">
                  {post.author && (
                    <div className="flex items-center gap-3">
                      {post.author.image?.asset?.url ? (
                        <Image
                          src={post.author.image.asset.url}
                          alt={post.author.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-[#00E6FF]/20 rounded-full flex items-center justify-center border border-[#00E6FF]/30">
                          <span className="text-white font-semibold">
                            {post.author.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-white">
                          {post.author.name}
                        </p>
                        {post.author.role && (
                          <p className="text-sm text-white/70">
                            {post.author.role}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm text-white/70">
                    <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                    {post.readingTime && (
                      <p>{post.readingTime} min read</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </AbstractBackground>

      {/* Featured Image */}
      {post.featuredImage?.asset?.url && (
        <AbstractBackground variant="section" intensity="medium">
          <Section padding="lg" background="gradient">
            <Container>
              <div className="max-w-4xl mx-auto">
                <Image
                  src={post.featuredImage.asset.url}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-64 lg:h-96 object-cover rounded-lg"
                />
              </div>
            </Container>
          </Section>
        </AbstractBackground>
      )}

      {/* Content */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="lg" background="gradient">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
                  <PortableText 
                    value={post.body}
                    components={{
                      block: {
                        normal: ({children}) => <p className="mb-3 text-white/90 leading-relaxed font-light">{children}</p>,
                        h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-4 mt-6">{children}</h1>,
                        h2: ({children}) => <h2 className="text-2xl font-bold text-white mb-3 mt-5">{children}</h2>,
                        h3: ({children}) => <h3 className="text-xl font-bold text-white mb-2 mt-4">{children}</h3>,
                        h4: ({children}) => <h4 className="text-lg font-bold text-white mb-2 mt-3">{children}</h4>,
                      },
                      marks: {
                        strong: ({children}) => <strong className="font-semibold text-white">{children}</strong>,
                        em: ({children}) => <em className="italic text-white/90">{children}</em>,
                        code: ({children}) => <code className="bg-[#0A0F1F] border border-[#00E6FF]/30 px-1 py-0.5 rounded text-sm font-mono text-[#00E6FF]">{children}</code>,
                        link: ({children, value}) => {
                          const href = value?.href;
                          return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#00E6FF] hover:text-[#00E6FF]/80 hover:underline">{children}</a> : children;
                        },
                      },
                      list: {
                        bullet: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-white/90">{children}</ul>,
                        number: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-white/90">{children}</ol>,
                      },
                      listItem: {
                        bullet: ({children}) => <li className="text-white/90 font-light">{children}</li>,
                        number: ({children}) => <li className="text-white/90 font-light">{children}</li>,
                      },
                      types: {
                        image: ({value}) => (
                          value?.asset?.url && (
                            <div className="my-8">
                              <Image
                                src={value.asset.url}
                                alt={value.alt || 'Blog Image'}
                                width={800}
                                height={500}
                                className="w-full h-auto rounded-lg"
                                priority={false}
                              />
                            </div>
                          )
                        ),
                        code: ({value}) => (
                          value?.code && (
                            <pre className="bg-[#0A0F1F] border border-[#00E6FF]/30 text-white p-4 rounded-lg my-4 overflow-x-auto">
                              <code className={`language-${value.language || 'plaintext'}`}>
                                {value.code}
                              </code>
                            </pre>
                          )
                        ),
                      },
                    }}
                  />
                ) : (
                  <div className="text-center py-8">
                    <h2 className="text-2xl font-bold text-white mb-3">
                      Content Preview
                    </h2>
                    <p className="text-white/90 mb-4 font-light">
                      {typeof post.excerpt === 'string' ? post.excerpt : "This blog post is currently being prepared. Please check back soon for the full content."}
                    </p>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-6">
                      <p className="text-sm text-white/70">
                        Full content will be available soon. In the meantime, you can explore our other blog posts.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      </AbstractBackground>

      {/* Author Bio */}
      {post.author?.bio && (
        <AbstractBackground variant="section" intensity="medium">
          <Section padding="md" background="gradient">
            <Container>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/10 border border-white/20 rounded-lg p-8">
                  <div className="flex items-start gap-6">
                    {post.author.image?.asset?.url ? (
                      <Image
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        width={80}
                        height={80}
                        className="rounded-full flex-shrink-0"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-[#00E6FF]/20 rounded-full flex items-center justify-center flex-shrink-0 border border-[#00E6FF]/30">
                        <span className="text-white font-semibold text-xl">
                          {post.author.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        About {post.author.name}
                      </h3>
                      <p className="text-white/90 font-light">
                        {typeof post.author.bio === 'string' ? post.author.bio : 'Author bio available'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </AbstractBackground>
      )}

      {/* Related Posts */}
      <AbstractBackground variant="section" intensity="medium">
        <Section padding="md" background="gradient">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                More from our <span className="gradient-text">blog</span>
              </h2>
              <Link href="/blog">
                <Button size="lg">
                  View All Posts →
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </AbstractBackground>
    </div>
  );
}