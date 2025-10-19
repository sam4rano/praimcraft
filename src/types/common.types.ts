// Common types used across the application

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
}

export interface SocialLinks {
  twitter?: string
  linkedin?: string
  github?: string
  website?: string
  email?: string
}

export interface Image {
  _id: string
  alt?: string
  caption?: string
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Metadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title: string
    description: string
    image?: string
    url?: string
  }
  twitter?: {
    card: 'summary_large_image'
    title: string
    description: string
    image?: string
  }
}

export interface Pagination {
  currentPage: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export interface Breadcrumb {
  label: string
  href: string
}
