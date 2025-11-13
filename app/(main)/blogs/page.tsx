import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import { client } from "@/lib/sanity/client";
import { BLOGS_QUERY } from '@/lib/sanity/queries';
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: 'My thoughts and articles',
}

// export const dynamic = "force-dynamic";
export const revalidate = 14400; // 4 hours  

export default async function BlogPage() {
  const blogData = await client.fetch(BLOGS_QUERY);

  return (
    <main className="container py-12">
      <div className="mb-16 w-full">
        <h1
          className={`${interTight.className} text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl`}
        >
          Blogs
        </h1>
        <div className="mt-4 h-1 w-24 bg-primary"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog: any) => {
          const imageUrl = blog.images[0]?.asset?.url || "/default-image.png"; // Define a constant for the image URL
          return (
            <BlogCard
              key={blog._id}
              id={blog._id}
              image={imageUrl}
              category={blog.category}
              title={blog.title}
              slug={blog.slug.current}
              shortDescription={blog.shortDescription}
              estimatedReadingTime={blog.estimatedReadingTime}
              hashtags={blog.hashtags}
              referenceLink={blog.referenceLink}
            />
          );
        })}
      </div>
    </main>
  );
}