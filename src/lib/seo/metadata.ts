import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

const baseUrl = 'https://praimcraft.com' // Update with your actual domain
const defaultImage = `${baseUrl}/images/og-default.jpg`

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = defaultImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Praimcraft Team'],
  section,
  tags = [],
}: SEOProps): Metadata {
  const fullTitle = title.includes('Praimcraft') ? title : `${title} | Praimcraft`
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      'digital agency',
      'software development',
      'social media management',
      'analytics',
      'automation',
      'AI integration',
      'content creation',
      ...keywords,
    ],
    authors: authors.map(author => ({ name: author })),
    creator: 'Praimcraft',
    publisher: 'Praimcraft',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: 'Praimcraft',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@praimcraft', // Update with your actual Twitter handle
      site: '@praimcraft',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

// Predefined metadata for common pages
export const pageMetadata = {
  home: {
    title: 'Praimcraft - Digital Agency',
    description: 'Multi-service digital agency specializing in software development, social media management, analytics, automation, and AI integration.',
    keywords: ['digital agency', 'software development', 'social media management', 'analytics', 'automation', 'AI integration'],
  },
  about: {
    title: 'About Us - Praimcraft',
    description: 'Learn about Praimcraft, a digital agency helping businesses thrive in the modern world through innovative technology solutions.',
    keywords: ['about praimcraft', 'digital agency team', 'company story', 'mission'],
  },
  services: {
    title: 'Our Services - Praimcraft',
    description: 'Comprehensive digital solutions including software development, social media management, analytics, automation, and AI integration.',
    keywords: ['digital services', 'software development', 'social media management', 'analytics', 'automation', 'AI integration'],
  },
  caseStudies: {
    title: 'Case Studies - Praimcraft',
    description: 'Real results from real clients. See how we\'ve helped businesses achieve their digital goals.',
    keywords: ['case studies', 'portfolio', 'client success', 'project results'],
  },
  blog: {
    title: 'Blog - Praimcraft',
    description: 'Insights, tips, and strategies to help your business thrive in the digital world.',
    keywords: ['blog', 'digital marketing', 'technology insights', 'business tips'],
  },
  contact: {
    title: 'Contact Us - Praimcraft',
    description: 'Get in touch with Praimcraft. Ready to start your next project? We\'d love to hear from you.',
    keywords: ['contact praimcraft', 'get in touch', 'start project', 'consultation'],
  },
}
