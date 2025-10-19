import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { BlogCard } from '@/components/content/BlogCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BlogPostPreview, Category } from '@/types/blog.types'

// Placeholder data for now - will be replaced with Sanity data
const placeholderCategories: Category[] = [
  { _id: 'cat1', title: 'AI & Technology', slug: { current: 'ai-technology' }, description: 'Articles about artificial intelligence and emerging technologies', color: 'blue' },
  { _id: 'cat2', title: 'Development', slug: { current: 'development' }, description: 'Web development, programming, and technical insights', color: 'green' },
  { _id: 'cat3', title: 'Social Media', slug: { current: 'social-media' }, description: 'Social media marketing and platform strategies', color: 'purple' },
  { _id: 'cat4', title: 'Automation', slug: { current: 'automation' }, description: 'Workflow automation and process optimization', color: 'orange' },
  { _id: 'cat5', title: 'Analytics', slug: { current: 'analytics' }, description: 'Data analysis and business intelligence', color: 'blue' },
  { _id: 'cat6', title: 'Content Marketing', slug: { current: 'content-marketing' }, description: 'Content strategy and marketing insights', color: 'pink' }
]

const placeholderPosts: BlogPostPreview[] = [
  {
    _id: '1',
    title: 'The Future of AI in Digital Marketing',
    slug: { current: 'future-ai-digital-marketing' },
    excerpt: 'Exploring how artificial intelligence is revolutionizing digital marketing strategies and what it means for businesses.',
    featuredImage: {
      _id: 'img1',
      alt: 'AI in marketing',
      asset: { _ref: 'image-1', _type: 'reference' }
    },
    author: {
      name: 'John Doe',
      image: {
        _id: 'author1',
        alt: 'John Doe',
        asset: { _ref: 'author-1', _type: 'reference' }
      },
      role: 'AI Specialist'
    },
    categories: [
      { title: 'AI & Technology', slug: { current: 'ai-technology' }, color: 'blue' }
    ],
    publishedAt: '2024-01-15T10:00:00Z',
    readingTime: 5
  },
  {
    _id: '2',
    title: 'Machine Learning for Marketing Automation',
    slug: { current: 'machine-learning-marketing-automation' },
    excerpt: 'How machine learning algorithms can automate and optimize your marketing campaigns for better results.',
    featuredImage: {
      _id: 'img2',
      alt: 'Machine learning',
      asset: { _ref: 'image-2', _type: 'reference' }
    },
    author: {
      name: 'Sarah Wilson',
      image: {
        _id: 'author2',
        alt: 'Sarah Wilson',
        asset: { _ref: 'author-2', _type: 'reference' }
      },
      role: 'ML Engineer'
    },
    categories: [
      { title: 'AI & Technology', slug: { current: 'ai-technology' }, color: 'blue' }
    ],
    publishedAt: '2024-01-12T14:30:00Z',
    readingTime: 8
  },
  {
    _id: '3',
    title: 'The Rise of Conversational AI',
    slug: { current: 'rise-conversational-ai' },
    excerpt: 'Understanding how conversational AI is changing customer service and marketing interactions.',
    featuredImage: {
      _id: 'img3',
      alt: 'Conversational AI',
      asset: { _ref: 'image-3', _type: 'reference' }
    },
    author: {
      name: 'Mike Johnson',
      image: {
        _id: 'author3',
        alt: 'Mike Johnson',
        asset: { _ref: 'author-3', _type: 'reference' }
      },
      role: 'AI Researcher'
    },
    categories: [
      { title: 'AI & Technology', slug: { current: 'ai-technology' }, color: 'blue' }
    ],
    publishedAt: '2024-01-08T09:15:00Z',
    readingTime: 6
  }
]

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  
  // Find the category by slug
  const category = placeholderCategories.find(cat => cat.slug.current === slug)
  
  if (!category) {
    notFound()
  }

  // Filter posts by category
  const categoryPosts = placeholderPosts.filter(post => 
    post.categories?.some(cat => cat.slug.current === slug)
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section padding="lg" background="gradient">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-6">
              <ol className="flex items-center space-x-2 text-sm text-neutral-600">
                <li>
                  <Link href="/blog" className="hover:text-primary-600">
                    Blog
                  </Link>
                </li>
                <li className="text-neutral-400">/</li>
                <li className="text-neutral-900 font-medium">
                  {category.title}
                </li>
              </ol>
            </nav>

            <Badge variant="primary" size="lg" className="mb-6">
              {category.title}
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {category.title} Articles
            </h1>
            
            {category.description && (
              <p className="text-xl text-neutral-600 mb-8">
                {category.description}
              </p>
            )}

            <div className="text-neutral-500">
              {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </Container>
      </Section>

      {/* Category Posts */}
      <Section padding="lg" background="white">
        <Container>
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                No articles found
              </h3>
              <p className="text-neutral-600 mb-8">
                We haven't published any articles in this category yet.
              </p>
              <Link href="/blog">
                <Button>
                  View All Articles
                </Button>
              </Link>
            </div>
          )}
        </Container>
      </Section>

      {/* Other Categories */}
      <Section padding="lg" background="gray">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {placeholderCategories
              .filter(cat => cat.slug.current !== slug)
              .map((cat) => (
                <Link
                  key={cat._id}
                  href={`/blog/category/${cat.slug.current}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-6 text-center shadow-soft hover:shadow-medium transition-shadow duration-300 group-hover:-translate-y-1 transform">
                    <div className="text-2xl mb-2">
                      {cat.title === 'AI & Technology' && '🤖'}
                      {cat.title === 'Development' && '💻'}
                      {cat.title === 'Social Media' && '📱'}
                      {cat.title === 'Automation' && '⚡'}
                      {cat.title === 'Analytics' && '📊'}
                      {cat.title === 'Content Marketing' && '✍️'}
                    </div>
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                      {cat.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      {/* Back to Blog */}
      <Section padding="sm" background="white">
        <Container>
          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                ← Back to All Articles
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  )
}
