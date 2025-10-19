interface Organization {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  address: {
    '@type': string
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint: {
    '@type': string
    telephone: string
    contactType: string
    email: string
  }
  sameAs: string[]
}

interface Article {
  '@context': string
  '@type': string
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: {
    '@type': string
    name: string
    url: string
  }
  publisher: {
    '@type': string
    name: string
    logo: {
      '@type': string
      url: string
    }
  }
  mainEntityOfPage: {
    '@type': string
    '@id': string
  }
}

interface Service {
  '@context': string
  '@type': string
  name: string
  description: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  areaServed: string
  serviceType: string
}

const baseUrl = 'https://praimcraft.com' // Update with your actual domain

export function generateOrganizationSchema(): Organization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Praimcraft',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: 'Multi-service digital agency specializing in software development, social media management, analytics, automation, and AI integration.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'customer service',
      email: 'hello@praimcraft.com',
    },
    sameAs: [
      'https://twitter.com/praimcraft',
      'https://linkedin.com/company/praimcraft',
      'https://github.com/praimcraft',
    ],
  }
}

export function generateArticleSchema({
  title,
  description,
  image,
  publishedAt,
  modifiedAt,
  author,
  slug,
}: {
  title: string
  description: string
  image: string
  publishedAt: string
  modifiedAt: string
  author: string
  slug: string
}): Article {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: {
      '@type': 'Person',
      name: author,
      url: `${baseUrl}/about#team`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Praimcraft',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${slug}`,
    },
  }
}

export function generateServiceSchema({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}): Service {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Praimcraft',
      url: baseUrl,
    },
    areaServed: 'Worldwide',
    serviceType: 'Digital Services',
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}
