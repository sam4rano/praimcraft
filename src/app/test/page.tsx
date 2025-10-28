export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ✅ Vercel Deployment Working!
        </h1>
        <p className="text-lg text-gray-600">
          If you can see this page, your Next.js app is deployed correctly.
        </p>
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Environment Variables:</h2>
          <p>NEXT_PUBLIC_SANITY_PROJECT_ID: {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT SET'}</p>
          <p>NEXT_PUBLIC_SANITY_DATASET: {process.env.NEXT_PUBLIC_SANITY_DATASET || 'NOT SET'}</p>
        </div>
      </div>
    </div>
  )
}
