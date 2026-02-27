"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Heart, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { client } from "@/lib/sanity/client";
import { BLOGS_QUERY } from "@/lib/sanity/queries";

interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  slug: string;
  excerpt?: string;
  estimatedReadingTime?: number;
  readTime?: string;
  likes?: number;
  referenceLink?: string;
  hashtags?: string[];
}

interface BlogProps {
  posts?: BlogPost[];
  showMore?: boolean;
}

const samplePosts: BlogPost[] = [
  {
    id: "1",
    image: "/blogs/web-development-best-practices.webp",
    category: "Development",
    title: "Web Development Best Practices in 2024",
    slug: "web-development-best-practices",
    readTime: "5 min read",
    likes: 124,
  },
  {
    id: "2",
    image: "/blogs/ui-ux-design-principles.webp",
    category: "Design",
    title: "UI/UX Design Principles for Better Conversions",
    slug: "ui-ux-design-principles",
    readTime: "8 min read",
    likes: 210,
  },
  {
    id: "3",
    image: "/blogs/latest-tech-trends.webp",
    category: "Technology",
    title: "Latest Tech Trends: What's coming next?",
    slug: "latest-tech-trends",
    readTime: "12 min read",
    likes: 45,
  },
];

const Blog: FC<BlogProps> = ({ posts = samplePosts, showMore = false }) => {
  useEffect(() => {
    (async () => {
      const blogData = await client.fetch(BLOGS_QUERY);
    })();
  }, []);

  return (
    <div className="relative border-none bg-background py-20" id="Blog">
      <div className="container mx-auto px-4 md:px-8 xl:max-w-7xl">
        <SectionHeader
          subtitle="VISIT MY BLOG & KEEP YOUR FEED FRESH"
          title="Latest News"
          description={
            <>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
              <br className="hidden sm:block" /> suffered alteration in some
              form.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-[32px] bg-[#1c1c1c] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-white/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-6 top-6 rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <div className="mb-6 flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime || "5 min read"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes || 124}</span>
                  </div>
                </div>

                <h3 className="mb-8 line-clamp-2 text-2xl font-bold leading-snug text-white">
                  {post.title}
                </h3>

                <div className="mt-auto">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="group/link inline-flex items-center gap-3 text-sm font-bold text-primary transition-colors hover:text-white"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showMore && (
          <div className="mt-16 text-center">
            <button className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-black">
              Show More
            </button>
          </div>
        )}

        {/* Stay Updated Card */}
        <div className="mx-auto mt-24 max-w-4xl overflow-hidden rounded-[40px] bg-[#1a1a1a] p-8 sm:p-12 lg:p-16">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Stay Updated!
            </h2>
            <p className="mb-10 text-gray-400">
              Subscribe to my newsletter to get the latest web development
              trends, design tips, and personal insights delivered directly to
              your inbox.
            </p>
            <form className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full flex-1 rounded-2xl border-0 bg-[#242424] px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full shrink-0 rounded-2xl bg-primary px-8 py-4 text-sm font-bold tracking-wider text-white transition-colors hover:bg-gray-200 hover:text-black sm:w-auto"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
