import { Image, SEO, SocialLinks } from './common.types'

export interface Author {
  _id: string
  name: string
  slug: { current: string }
  bio?: string
  image?: Image
  role?: string
  socialLinks?: SocialLinks
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  color?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  content?: any[] // Portable Text content
  featuredImage?: Image
  author: Author
  categories?: Category[]
  tags?: string[]
  publishedAt: string
  featured?: boolean
  seo?: SEO
  readingTime?: number
}

export interface BlogPostPreview {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  featuredImage?: Image | null
  author: {
    name: string
    image?: Image | null
    role?: string
  }
  categories?: Pick<Category, 'title' | 'slug' | 'color'>[]
  publishedAt: string
  readingTime?: number
}
