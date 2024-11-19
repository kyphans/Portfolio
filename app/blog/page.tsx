import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: 'My thoughts and articles',
}

export default async function BlogPage() {
  // Fetch blog posts from your CMS here
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {/* Add your blog posts list here */}
      </div>
    </main>
  )
} 