import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { getRelativeTime } from '@/lib/utils/date'
import { urlFor } from '@/lib/sanity/client'
import { BlogPostPreview } from '@/types/blog.types'

interface BlogCardProps {
  post: BlogPostPreview
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card hover className="h-full">
      <Link href={`/blog/${post.slug.current}`} className="block h-full">
        <div className="relative">
          {post.featuredImage && post.featuredImage.asset ? (
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <Image
                src={urlFor(post.featuredImage)
                  .width(400)
                  .height(250)
                  .url() ?? ''}
                alt={post.featuredImage.alt ? post.featuredImage.alt : post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
          ) : (
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <div className="text-4xl mb-2">📝</div>
                  <div className="text-sm font-medium">Blog Image</div>
                </div>
              </div>
            </div>
          )}
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="primary">Featured</Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-3">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.slice(0, 2).map((category, index) => (
                  <Badge
                    key={`${category.title}-${index}`}
                    variant="secondary"
                    size="sm"
                  >
                    {category.title}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-neutral-900 line-clamp-2 hover:text-primary-600 transition-colors duration-200">
              {post.title}
            </h3>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-neutral-600 line-clamp-3">
                {post.excerpt}
              </p>
            )}

            {/* Author and Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
              <div className="flex items-center space-x-3">
                {post.author.image && (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-sm">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    {post.author.name}
                  </p>
                  {post.author.role && (
                    <p className="text-xs text-neutral-500">
                      {post.author.role}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-neutral-500">
                  {getRelativeTime(post.publishedAt)}
                </p>
                {post.readingTime && (
                  <p className="text-xs text-neutral-400">
                    {post.readingTime} min read
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
