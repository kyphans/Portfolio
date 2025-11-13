import { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const SITE_NAME = 'KP Portfolio'

export function getAbsoluteUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalizedPath}`
}

export function getSocialImageUrl(blog: any): string {
  // Priority: socialImageUrl > first blog image > default OG image
  return (
    blog.socialImageUrl ||
    blog.images?.[0]?.asset?.url ||
    getAbsoluteUrl('/og-default.png')
  )
}

export function generateBlogMetadata(blog: any): Metadata {
  // Multi-layer fallback strategy
  const title = blog.metaTitle || blog.title
  const description =
    blog.metaDescription || blog.excerpt || blog.shortDescription || ''
  const imageUrl = getSocialImageUrl(blog)
  const canonicalUrl = getAbsoluteUrl(`/blogs/${blog.slug.current}`)
  const publishedTime = blog.publishedAt
  const modifiedTime = blog.updatedAt || blog.publishedAt

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: blog.author?.name ? [blog.author.name] : undefined,
      tags: blog.hashtags || [],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: blog.author?.social?.twitter
        ? `@${blog.author.social.twitter.split('/').pop()}`
        : undefined,
    },
    authors: blog.author?.name
      ? [{ name: blog.author.name, url: blog.author.social?.website }]
      : undefined,
    keywords: blog.hashtags?.join(', '),
  }
}

export function generateArticleJsonLd(blog: any) {
  const imageUrl = getSocialImageUrl(blog)
  const canonicalUrl = getAbsoluteUrl(`/blogs/${blog.slug.current}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.excerpt || blog.shortDescription,
    image: imageUrl,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,
    author: blog.author
      ? {
          '@type': 'Person',
          name: blog.author.name,
          url: blog.author.social?.website,
          image: blog.author.avatar?.asset?.url,
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: getAbsoluteUrl('/logo.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: blog.hashtags?.join(', '),
  }
}

export function generateBreadcrumbJsonLd(blog: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: getAbsoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs',
        item: getAbsoluteUrl('/blogs'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: getAbsoluteUrl(`/blogs/${blog.slug.current}`),
      },
    ],
  }
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: getAbsoluteUrl('/logo.png'),
    sameAs: [
      // Add your social media profiles here
      'https://twitter.com/yourhandle',
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourprofile',
    ],
  }
}
