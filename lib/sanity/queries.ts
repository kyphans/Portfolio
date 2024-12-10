import { defineQuery } from 'next-sanity'

export const BLOGS_QUERY = defineQuery(`*[_type == "blog"] | order(_createdAt desc) {
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
  referenceLink,
  "estimatedReadingTime": round(length(pt::text(detailedDescription)) / 5 / 180)
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
  "estimatedReadingTime": round(length(pt::text(detailedDescription)) / 5 / 180) 
}`);
