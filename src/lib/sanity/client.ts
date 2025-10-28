import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a9x04if7'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-18'

// Log Sanity configuration during build for debugging
if (process.env.NODE_ENV !== 'production') {
  console.log('[Sanity Client] Configuration:', {
    projectId,
    dataset,
    apiVersion,
    hasToken: !!process.env.SANITY_API_TOKEN,
  });
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN during build to ensure fresh data
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published', // Only fetch published documents
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) return builder.image('')
  return builder.image(source)
}

export { client as sanityClient }
