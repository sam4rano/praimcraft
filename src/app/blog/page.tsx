import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getAllBlogPosts, getAllCategories } from '@/lib/sanity/fetch';
import { generateMetadata as generateSEOMetadata, pageMetadata } from '@/lib/seo/metadata';

export const metadata = generateSEOMetadata(pageMetadata.blog);

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

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
}

export default async function BlogPage() {
  // Fetch real data from Sanity with fallbacks
  const [posts, categories] = await Promise.all([
    getAllBlogPosts().catch(() => []),
    getAllCategories().catch(() => []),
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 mb-8">
              Insights, tips, and strategies to help your business thrive in the digital world.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categories Filter */}
      <Section padding="sm" background="white">
        <Container>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button variant="primary" size="sm">
              All Posts
            </Button>
            {categories.map((category: Category) => (
              <Button key={category._id} variant="outline" size="sm">
                {category.title}
              </Button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section padding="lg" background="white">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: BlogPost) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                  <Card className="h-full hover:-translate-y-1 transform transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {post.categories && post.categories.length > 0 && (
                          <Badge variant="secondary" size="sm">
                            {post.categories[0].title}
                          </Badge>
                        )}
                        <h3 className="text-xl font-bold text-neutral-900 line-clamp-2 hover:text-primary-600 transition-colors duration-200">
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
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                No blog posts yet
              </h3>
              <p className="text-neutral-600 mb-8">
                Check back soon for our latest insights and updates.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {posts.length > 0 && (
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Posts
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section padding="lg" background="gray">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Get the latest insights and tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                readOnly
              />
              <Button size="lg" disabled>
                Subscribe →
              </Button>
            </div>
            <p className="text-sm text-neutral-500 mt-2">
              Newsletter signup coming soon
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}