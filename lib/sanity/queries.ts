import { defineQuery } from 'next-sanity'

export const BLOGS_QUERY = defineQuery(`*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  images[] {
    asset-> {
      url
    }
  },
  category,
  shortDescription,
  hashtags,
  publishedAt,
  updatedAt,
  "author": author-> {
    name,
    slug,
    bio,
    avatar {
      asset-> {
        url
      }
    },
    social
  },
  metaTitle,
  metaDescription,
  focusKeyword,
  excerpt,
  "socialImageUrl": socialImage.asset->url
}`)

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(_createdAt desc) [0...20] {
  _id,
  title,
  slug,
  images[] {
    asset-> {
      url
    }
  },
  githubLink,
  shortDescription,
  detailedDescription,
  hashtags,
  category
}`)

export const BLOG_DETAIL_QUERY = defineQuery(`*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  images[] {
    asset-> {
      url
    }
  },
  category,
  shortDescription,
  detailedDescription[]{
    ...,
    asset-> {
      url
    },
    "imageUrl": asset->url
  },
  hashtags,
  referenceLink,
  publishedAt,
  updatedAt,
  "author": author-> {
    name,
    slug,
    bio,
    email,
    avatar {
      asset-> {
        url
      }
    },
    social
  },
  metaTitle,
  metaDescription,
  focusKeyword,
  excerpt,
  "socialImageUrl": socialImage.asset->url,
  "estimatedReadingTime": round(length(pt::text(detailedDescription)) / 5 / 180)
}`);

export const RELATED_POSTS_QUERY = defineQuery(`
  *[_type == "blog" && slug.current != $currentSlug] {
    _id,
    title,
    slug,
    images[] {
      asset-> {
        url
      }
    },
    category,
    shortDescription,
    hashtags,
    publishedAt,
    "categoryMatch": category == $category,
    "hashtagMatches": count((hashtags[])[@ in $hashtags])
  } | order(categoryMatch desc, hashtagMatches desc, publishedAt desc)[0...4]
`);
