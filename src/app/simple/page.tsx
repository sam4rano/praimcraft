import Link from 'next/link'

export default function SimplePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ✅ Simple Page Working!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This page has no dependencies on Sanity or complex components.
        </p>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Environment Check:</p>
          <p>NODE_ENV: {process.env.NODE_ENV}</p>
          <p>NEXT_PUBLIC_SANITY_PROJECT_ID: {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT SET'}</p>
        </div>
        <div className="mt-6">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
