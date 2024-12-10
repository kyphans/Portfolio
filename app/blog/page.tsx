import type { Metadata } from 'next'
import BlogCard from '../../components/BlogCard'
import { client } from "@/lib/sanity/client";
import { BLOGS_QUERY } from '@/lib/sanity/queries';

export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: 'My thoughts and articles',
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
  const blogData = await client.fetch(BLOGS_QUERY);

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog: any) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            image={blog.images[0]?.asset?.url || '/default-image.png'}
            category={blog.category}
            title={blog.title}
            slug={blog.slug.current}
            shortDescription={blog.shortDescription}
            estimatedReadingTime={blog.estimatedReadingTime}
            hashtags={blog.hashtags}
            referenceLink={blog.referenceLink}
          />
        ))}
      </div>
    </main>
  )
}