import { getAllBlogPosts } from '@/lib/sanity/fetch';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BlogDebugPage() {
  let posts: any[] = [];
  let error: string | null = null;

  try {
    posts = await getAllBlogPosts();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error';
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog Debug Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Environment Check</h2>
          <div className="space-y-2 font-mono text-sm">
            <p>Project ID: {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a9x04if7'}</p>
            <p>Dataset: {process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}</p>
            <p>API Version: {process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-18'}</p>
            <p>Has Token: {process.env.SANITY_API_TOKEN ? 'Yes' : 'No'}</p>
            <p>Node ENV: {process.env.NODE_ENV}</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <h2 className="font-bold mb-2">Error Fetching Posts:</h2>
            <p className="font-mono text-sm">{error}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Blog Posts ({posts.length})</h2>
          
          {posts.length === 0 ? (
            <p className="text-gray-600">No blog posts found in Sanity.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post._id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-600">Slug: {post.slug.current}</p>
                  <Link 
                    href={`/blog/${post.slug.current}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Post →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Home
          </Link>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Blog List →
          </Link>
        </div>
      </div>
    </div>
  );
}

