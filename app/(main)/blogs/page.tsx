import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import { client } from "@/lib/sanity/client";
import { BLOGS_QUERY } from '@/lib/sanity/queries';
import { Inter_Tight } from "next/font/google";
import { getAbsoluteUrl } from '@/lib/metadata/utils';

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Blog | KP Portfolio',
  description: 'Explore insightful articles, tutorials, and thoughts on web development, design, and technology. Stay updated with the latest trends and best practices.',
  alternates: {
    canonical: getAbsoluteUrl('/blogs'),
  },
  openGraph: {
    title: 'Blog | KP Portfolio',
    description: 'Explore insightful articles, tutorials, and thoughts on web development, design, and technology.',
    url: getAbsoluteUrl('/blogs'),
    siteName: 'KP Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: getAbsoluteUrl('/og-default.png'),
        width: 1200,
        height: 630,
        alt: 'KP Portfolio Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | KP Portfolio',
    description: 'Explore insightful articles, tutorials, and thoughts on web development, design, and technology.',
    images: [getAbsoluteUrl('/og-default.png')],
  },
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[280px_auto_1fr_auto] lg:gap-x-6 lg:gap-y-0">
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
              hashtags={blog.hashtags}
            />
          );
        })}
      </div>
    </main>
  );
}