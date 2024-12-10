"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
  referenceLink?: string;
  hashtags?: string[];
}

interface BlogProps {
  posts?: BlogPost[];
  showMore?: boolean;
}

const samplePosts = [
  {
    id: "1",
    image: "/blogs/web-development-best-practices.webp",
    category: "Development",
    title: "Web Development Best Practices",
    slug: "web-development-best-practices",
  },
  {
    id: "2",
    image: "/blogs/ui-ux-design-principles.webp",
    category: "Design",
    title: "UI/UX Design Principles",
    slug: "ui-ux-design-principles",
  },
  {
    id: "3",
    image: "/blogs/latest-tech-trends.webp",
    category: "Technology",
    title: "Latest Tech Trends",
    slug: "latest-tech-trends",
  },
];

const Blog: FC<BlogProps> = ({ posts = samplePosts, showMore = false }) => {
  useEffect(() => {
    (async () => {
      const blogData = await client.fetch(BLOGS_QUERY);
      console.log("blogData", blogData);

    })();
  }, []);

  return (
    <div className="relative border-none bg-background py-20" id="Blog">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-poppins text-5xl font-bold">Latest News</h1>
          <p className="text-muted">
            There are many variations of passages of Lorem Ipsum available,
          </p>
          <p className="text-muted">
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary p-[2px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="via-[primary/50 absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary to-primary opacity-0 blur-sm transition duration-500 group-hover:opacity-70 group-hover:blur" />

              <div className="relative h-[300px] overflow-hidden rounded-lg bg-[#191919]">
                <div className="relative h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 translate-y-[calc(100%-5rem)] transform bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition-transform duration-300 group-hover:translate-y-0">
                  <span className="mb-2 block text-sm uppercase">
                    {post.category}
                  </span>
                  <h3 className="mb-4 text-xl font-semibold">{post.title}</h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block rounded border border-white/80 px-6 py-2 transition-colors duration-300 hover:border-primary hover:bg-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showMore && (
          <div className="mt-8 text-center">
            <button className="rounded border border-primary px-6 py-2 transition-colors duration-300 hover:bg-primary hover:text-white">
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
