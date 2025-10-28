import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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
      <Section padding="lg" background="gradient">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  ← Back to Blog
                </Button>
              </Link>
            </div>
            
            <div className="space-y-6">
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category: any) => (
                    <Badge key={category._id} variant="secondary">
                      {category.title}
                    </Badge>
                  ))}
                </div>
              )}
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-lg sm:text-xl text-neutral-600">
                  {typeof post.excerpt === 'string' ? post.excerpt : 'Preview content available'}
                </p>
              )}
              
              <div className="flex items-center gap-6 pt-6 border-t border-neutral-200">
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
                      <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                        <span className="text-neutral-500 font-semibold">
                          {post.author.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {post.author.name}
                      </p>
                      {post.author.role && (
                        <p className="text-sm text-neutral-600">
                          {post.author.role}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="text-sm text-neutral-500">
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

      {/* Featured Image */}
      {post.featuredImage?.asset?.url && (
        <Section padding="none" background="white">
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
      )}

      {/* Content */}
      <Section padding="lg" background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
                <PortableText 
                  value={post.body}
                  components={{
                    block: {
                      normal: ({children}) => <p className="mb-4 text-neutral-700 leading-relaxed">{children}</p>,
                      h1: ({children}) => <h1 className="text-3xl font-bold text-neutral-900 mb-6 mt-8">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-6">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-4">{children}</h3>,
                      h4: ({children}) => <h4 className="text-lg font-bold text-neutral-900 mb-2 mt-3">{children}</h4>,
                    },
                    marks: {
                      strong: ({children}) => <strong className="font-semibold">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                      code: ({children}) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                      link: ({children, value}) => {
                        const href = value?.href;
                        return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">{children}</a> : children;
                      },
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                      number: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({children}) => <li className="text-neutral-700">{children}</li>,
                      number: ({children}) => <li className="text-neutral-700">{children}</li>,
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
                          <pre className="bg-gray-800 text-white p-4 rounded-lg my-6 overflow-x-auto">
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
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    Content Preview
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    {typeof post.excerpt === 'string' ? post.excerpt : "This blog post is currently being prepared. Please check back soon for the full content."}
                  </p>
                  <div className="bg-neutral-50 rounded-lg p-6">
                    <p className="text-sm text-neutral-500">
                      Full content will be available soon. In the meantime, you can explore our other blog posts.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Author Bio */}
      {post.author?.bio && (
        <Section padding="lg" background="gray">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-sm">
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
                    <div className="w-20 h-20 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-neutral-500 font-semibold text-xl">
                        {post.author.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      About {post.author.name}
                    </h3>
                    <p className="text-neutral-600">
                      {typeof post.author.bio === 'string' ? post.author.bio : 'Author bio available'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Related Posts */}
      <Section padding="lg" background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              More from our blog
            </h2>
            <Link href="/blog">
              <Button size="lg">
                View All Posts
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}