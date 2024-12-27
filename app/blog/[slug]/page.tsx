import { client } from "@/lib/sanity/client";
import { BLOG_DETAIL_QUERY } from "@/lib/sanity/queries";
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from "next/image";
import Link from "next/link";

// export const dynamic = "force-dynamic";
export const revalidate = 14400; // 4 hours

const components: PortableTextComponents = {
  types: {
    // Xử lý block image
    image: ({ value }) => {
      const imageUrl = value.asset?.url; // Define a constant for the image URL
      return imageUrl ? (
        <div className="my-8">
          <Image
            priority
            src={imageUrl}
            alt={value.alt || "Blog Image"}
            width={800}
            height={600}
            className="h-auto w-full"
          />
        </div>
      ) : null;
    },
  },
  block: {
    // Xử lý block text
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
};

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await client.fetch(BLOG_DETAIL_QUERY, { slug: params.slug });

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const imageUrl = blog.images[0]?.asset?.url || "/default-image.png"; // Define a constant for the image URL

  return (
    <main className="container py-12">
      <h1 className="mb-8 text-4xl font-bold">{blog.title}</h1>
      <img
        src={imageUrl}
        alt={blog.title}
        className="mb-8 h-auto w-full"
      />
      <div className="my-6 text-sm text-gray-500">
        Estimated Reading Time: {blog.estimatedReadingTime} mins
      </div>

      <PortableText value={blog.detailedDescription} components={components} />

      <hr className="my-8" />
      <div className="text-sm text-gray-100">
        Reference Links:{" "}
        {blog.referenceLink?.map((link: string, index: number) => (
          <div className="block" key={index}>
            <Link href={link} className="mt-2 text-primary hover:text-primary/80">
              [{link}]
            </Link>
          </div>
        ))}
      </div>
      <hr className="my-8" />
      <div className="mb-8 text-sm text-gray-100">
        Hashtags:{" "}
        {blog.hashtags?.map((tag: string) => (
          <span
            key={tag}
            className="mr-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
          >
            #{tag}
          </span>
        ))}
      </div>
    </main>
  );
}