import { client } from "@/lib/sanity/client";
import { BLOG_DETAIL_QUERY, RELATED_POSTS_QUERY } from "@/lib/sanity/queries";
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import {
  generateBlogMetadata,
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  getAbsoluteUrl,
} from '@/lib/metadata/utils';
import ShareButtons from '@/components/ShareButtons';
import Breadcrumb from '@/components/Breadcrumb';
import AuthorBio from '@/components/AuthorBio';
import RelatedPosts from '@/components/RelatedPosts';

// export const dynamic = "force-dynamic";
export const revalidate = 3600; // 60min * 60s = 3600s

const components: PortableTextComponents = {
  types: {
    // Handle block images
    image: ({ value }) => {
      const imageUrl = value.asset?.url;
      return imageUrl ? (
        <div className="my-8">
          <Image
            priority
            src={imageUrl}
            alt={value.alt || "Blog Image"}
            width={800}
            height={600}
            className="h-auto w-full"
            unoptimized
          />
        </div>
      ) : null;
    },
  },
  block: {
    // Handle block text
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await client.fetch(BLOG_DETAIL_QUERY, { slug: params.slug });

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return generateBlogMetadata(blog);
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await client.fetch(BLOG_DETAIL_QUERY, { slug: params.slug });

  console.log("blog", blog);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Fetch related posts based on category and hashtags
  const relatedPosts = await client.fetch(RELATED_POSTS_QUERY, {
    currentSlug: params.slug,
    category: blog.category,
    hashtags: blog.hashtags || [],
  });

  const imageUrl = blog.images[0]?.asset?.url || "/default-image.png";
  const articleJsonLd = generateArticleJsonLd(blog);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(blog);
  const absoluteUrl = getAbsoluteUrl(`/blogs/${params.slug}`);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blogs', href: '/blogs' },
    { label: blog.title, href: `/blogs/${params.slug}` },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="container py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Article */}
        <article>
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              {blog.author && (
                <div className="flex items-center gap-2">
                  {blog.author.avatar?.asset?.url && (
                    <Image
                      src={blog.author.avatar.asset.url}
                      alt={blog.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <span>By {blog.author.name}</span>
                </div>
              )}
              {blog.publishedAt && (
                <time dateTime={blog.publishedAt}>
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {blog.estimatedReadingTime && (
                <span>{blog.estimatedReadingTime} min read</span>
              )}
            </div>

            {/* Social Share Buttons */}
            <div className="mt-6 border-t border-primary/20 pt-6">
              <ShareButtons
                title={blog.title}
                url={absoluteUrl}
                description={blog.metaDescription || blog.shortDescription}
              />
            </div>
          </header>

          {/* Hero Image */}
          <Image
            src={imageUrl}
            alt={blog.title}
            width={1200}
            height={630}
            className="mb-8 h-auto w-full rounded-lg"
            priority
          />

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <PortableText value={blog.detailedDescription} components={components} />
          </div>

          {/* Article Footer */}
          <footer className="mt-12">
            {/* Hashtags */}
            {blog.hashtags && blog.hashtags.length > 0 && (
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold text-muted">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.hashtags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Reference Links */}
            {blog.referenceLink && blog.referenceLink.length > 0 && (
              <div className="mb-8 border-t border-primary/20 pt-8">
                <h3 className="mb-4 text-sm font-semibold text-muted">
                  Reference Links
                </h3>
                <ul className="space-y-2">
                  {blog.referenceLink.map((link: string, index: number) => (
                    <li key={index}>
                      <Link
                        href={link}
                        className="text-primary hover:text-primary/80 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author Bio */}
            {blog.author && (
              <AuthorBio
                author={blog.author}
                publishedAt={blog.publishedAt}
                updatedAt={blog.updatedAt}
              />
            )}
          </footer>
        </article>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </main>
    </>
  );
}
