import Link from 'next/link'

export default async function SafeHomePage() {
  // Test Sanity connection safely
  let sanityStatus = 'Unknown';
  let services = [];
  let caseStudies = [];
  let blogPosts = [];

  try {
    const { getAllServices, getFeaturedCaseStudies, getFeaturedBlogPosts } = await import('@/lib/sanity/fetch');
    
    const [servicesResult, caseStudiesResult, blogPostsResult] = await Promise.allSettled([
      getAllServices(),
      getFeaturedCaseStudies(), 
      getFeaturedBlogPosts()
    ]);

    services = servicesResult.status === 'fulfilled' ? servicesResult.value : [];
    caseStudies = caseStudiesResult.status === 'fulfilled' ? caseStudiesResult.value : [];
    blogPosts = blogPostsResult.status === 'fulfilled' ? blogPostsResult.value : [];
    
    sanityStatus = 'Connected';
  } catch (error) {
    console.error('Sanity connection error:', error);
    sanityStatus = 'Error: ' + (error as Error).message;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            Praimcraft - Digital Agency
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">System Status</h2>
            <div className="space-y-2">
              <p><strong>Sanity Status:</strong> <span className={sanityStatus.includes('Error') ? 'text-red-600' : 'text-green-600'}>{sanityStatus}</span></p>
              <p><strong>Services Count:</strong> {services.length}</p>
              <p><strong>Case Studies Count:</strong> {caseStudies.length}</p>
              <p><strong>Blog Posts Count:</strong> {blogPosts.length}</p>
              <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Services</h3>
              {services.length > 0 ? (
                <ul className="space-y-2">
                  {services.slice(0, 3).map((service: any) => (
                    <li key={service._id} className="text-gray-600">{service.title}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No services loaded</p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Case Studies</h3>
              {caseStudies.length > 0 ? (
                <ul className="space-y-2">
                  {caseStudies.slice(0, 3).map((study: any) => (
                    <li key={study._id} className="text-gray-600">{study.title}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No case studies loaded</p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Blog Posts</h3>
              {blogPosts.length > 0 ? (
                <ul className="space-y-2">
                  {blogPosts.slice(0, 3).map((post: any) => (
                    <li key={post._id} className="text-gray-600">{post.title}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No blog posts loaded</p>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Original Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
