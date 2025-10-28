import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/sanity/fetch';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    
    return NextResponse.json({
      success: true,
      postsCount: posts.length,
      posts: posts.map((post: any) => ({
        id: post._id,
        title: post.title,
        slug: post.slug.current,
        publishedAt: post.publishedAt,
      })),
      environment: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a9x04if7',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-18',
        hasToken: !!process.env.SANITY_API_TOKEN,
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      environment: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a9x04if7',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-18',
        hasToken: !!process.env.SANITY_API_TOKEN,
      },
    }, { status: 500 });
  }
}

