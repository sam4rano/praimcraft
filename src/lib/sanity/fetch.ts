import { client } from './client'
import { groq } from 'next-sanity'

// Blog Posts
export async function getAllBlogPosts() {
  const query = groq`
    *[_type == "blogPost"] | order(publishedAt desc) {
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
      readingTime,
      featured
    }
  `
  return await client.fetch(query)
}

export async function getBlogPost(slug: string) {
  const query = groq`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      featuredImage,
      author->{
        name,
        image,
        role,
        bio
      },
      categories[]->{
        title,
        slug,
        color
      },
      tags,
      publishedAt,
      readingTime,
      featured,
      seo
    }
  `
  return await client.fetch(query, { slug })
}

export async function getFeaturedBlogPosts() {
  const query = groq`
    *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
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
      readingTime
    }
  `
  return await client.fetch(query)
}

export async function getAllBlogPostsSlugs() {
  const query = groq`
    *[_type == "blogPost"] {
      "slug": slug.current
    }
  `
  return await client.fetch(query)
}

// Categories
export async function getAllCategories() {
  const query = groq`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      color
    }
  `
  return await client.fetch(query)
}

// Case Studies
export async function getAllCaseStudies() {
  const query = groq`
    *[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client,
      challenge,
      solution,
      results,
      technologies,
      mainImage,
      gallery,
      testimonial,
      featured
    }
  `
  return await client.fetch(query)
}

export async function getCaseStudy(slug: string) {
  const query = groq`
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      challenge,
      solution,
      results,
      technologies,
      mainImage,
      gallery,
      testimonial,
      featured,
      seo
    }
  `
  return await client.fetch(query, { slug })
}

export async function getFeaturedCaseStudies() {
  const query = groq`
    *[_type == "caseStudy" && featured == true] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      client,
      mainImage,
      challenge
    }
  `
  return await client.fetch(query)
}

export async function getAllCaseStudiesSlugs() {
  const query = groq`
    *[_type == "caseStudy"] {
      "slug": slug.current
    }
  `
  return await client.fetch(query)
}

// Services
export async function getAllServices() {
  const query = groq`
    *[_type == "service"] | order(title asc) {
      _id,
      title,
      slug,
      shortDescription,
      longDescription,
      icon,
      features,
      technologies,
      pricing
    }
  `
  return await client.fetch(query)
}

export async function getService(slug: string) {
  const query = groq`
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      shortDescription,
      longDescription,
      icon,
      features,
      technologies,
      pricing
    }
  `
  return await client.fetch(query, { slug })
}

export async function getAllServicesSlugs() {
  const query = groq`
    *[_type == "service"] {
      "slug": slug.current
    }
  `
  return await client.fetch(query)
}

// Authors
export async function getAllAuthors() {
  const query = groq`
    *[_type == "author"] | order(name asc) {
      _id,
      name,
      slug,
      image,
      role,
      bio
    }
  `
  return await client.fetch(query)
}

export async function getAuthor(slug: string) {
  const query = groq`
    *[_type == "author" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      image,
      role,
      bio
    }
  `
  return await client.fetch(query, { slug })
}