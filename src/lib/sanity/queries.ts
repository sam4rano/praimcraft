// GROQ queries for Sanity data fetching

// Blog Post queries
export const blogPostQueries = {
  // Get all blog posts with pagination
  all: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author->{
      name,
      image,
      role
    },
    categories[]->{
      title,
      slug,
      color
    },
    tags,
    publishedAt,
    featured,
    "readingTime": round(length(pt::text(content)) / 5 / 180)
  }`,

  // Get featured blog posts
  featured: `*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author->{
      name,
      image,
      role
    },
    categories[]->{
      title,
      slug,
      color
    },
    publishedAt,
    "readingTime": round(length(pt::text(content)) / 5 / 180)
  }`,

  // Get single blog post by slug
  bySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    author->{
      name,
      bio,
      image,
      role,
      socialLinks
    },
    categories[]->{
      title,
      slug,
      color
    },
    tags,
    publishedAt,
    featured,
    seo,
    "readingTime": round(length(pt::text(content)) / 5 / 180)
  }`,

  // Get related blog posts
  related: `*[_type == "blogPost" && _id != $excludeId && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author->{
      name,
      image
    },
    publishedAt,
    "readingTime": round(length(pt::text(content)) / 5 / 180)
  }`,

  // Get blog posts by category
  byCategory: `*[_type == "blogPost" && $categoryId in categories[]._ref] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author->{
      name,
      image
    },
    publishedAt,
    "readingTime": round(length(pt::text(content)) / 5 / 180)
  }`,
}

// Service queries
export const serviceQueries = {
  // Get all services
  all: `*[_type == "service"] | order(order asc) {
    _id,
    name,
    slug,
    description,
    icon,
    features,
    pricing,
    image,
    featured,
    order
  }`,

  // Get featured services
  featured: `*[_type == "service" && featured == true] | order(order asc) {
    _id,
    name,
    slug,
    description,
    icon,
    features,
    image
  }`,

  // Get single service by slug
  bySlug: `*[_type == "service" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    longDescription,
    icon,
    features,
    process,
    pricing,
    image
  }`,
}

// Case Study queries
export const caseStudyQueries = {
  // Get all case studies
  all: `*[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    industry,
    challenge,
    featuredImage,
    results,
    services[]->{
      name,
      slug
    },
    duration,
    publishedAt,
    featured
  }`,

  // Get featured case studies
  featured: `*[_type == "caseStudy" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    client,
    industry,
    challenge,
    featuredImage,
    results[0...3],
    services[]->{
      name,
      slug
    },
    publishedAt
  }`,

  // Get single case study by slug
  bySlug: `*[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    industry,
    challenge,
    solution,
    results,
    testimonial,
    images,
    featuredImage,
    services[]->{
      name,
      slug,
      description
    },
    duration,
    teamSize,
    technologies,
    publishedAt
  }`,
}

// Team Member queries
export const teamMemberQueries = {
  // Get all team members
  all: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    slug,
    role,
    bio,
    image,
    expertise,
    socialLinks,
    isLeadership
  }`,

  // Get leadership team
  leadership: `*[_type == "teamMember" && isLeadership == true] | order(order asc) {
    _id,
    name,
    slug,
    role,
    bio,
    image,
    expertise,
    socialLinks
  }`,
}

// Category queries
export const categoryQueries = {
  // Get all categories
  all: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }`,
}

// Author queries
export const authorQueries = {
  // Get all authors
  all: `*[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    bio,
    image,
    role,
    socialLinks
  }`,
}

// SEO Settings query
export const seoQuery = `*[_type == "seoSettings"][0] {
  siteName,
  defaultTitle,
  defaultDescription,
  defaultKeywords,
  ogImage,
  twitterHandle,
  facebookAppId,
  googleAnalyticsId,
  googleTagManagerId,
  canonicalUrl
}`
