"use client";

import { FC, useEffect } from "react";
import { SectionHeader } from "./SectionHeader";
import BlogCard from "./BlogCard";
import { client } from "@/lib/sanity/client";
import { BLOGS_QUERY } from "@/lib/sanity/queries";

interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  slug: string;
  shortDescription: string;
  hashtags: string[];
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
    shortDescription:
      "Explore the latest best practices in web development to build faster, more accessible, and maintainable applications.",
    hashtags: ["WebDev", "BestPractices"],
  },
  {
    id: "2",
    image: "/blogs/ui-ux-design-principles.webp",
    category: "Design",
    title: "UI/UX Design Principles for Better Conversions",
    slug: "ui-ux-design-principles",
    shortDescription:
      "Learn key UI/UX design principles that can significantly improve your website's conversion rates.",
    hashtags: ["UIUX", "Design"],
  },
  {
    id: "3",
    image: "/blogs/latest-tech-trends.webp",
    category: "Technology",
    title: "Latest Tech Trends: What's coming next?",
    slug: "latest-tech-trends",
    shortDescription:
      "Stay ahead of the curve with insights into emerging technologies shaping the future of software development.",
    hashtags: ["Tech", "Trends"],
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[280px_auto_1fr_auto] lg:gap-x-10 lg:gap-y-0">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              slug={post.slug}
              shortDescription={post.shortDescription}
              hashtags={post.hashtags}
            />
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
