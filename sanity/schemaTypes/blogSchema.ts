import { defineField, defineType } from 'sanity';

export const blogSchema = defineType({
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    // Basic Details
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: 'details',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      group: 'details',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      group: 'details'
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: 'details'
    }),
    defineField({
      name: "hashtags",
      title: "Hashtags",
      type: "array",
      of: [{ type: "string" }],
      group: 'details'
    }),
    defineField({
      name: "referenceLink",
      title: "Reference Links",
      type: "array",
      of: [{ type: "url" }],
      group: 'details'
    }),

    // Editorial Content
    defineField({
      name: "detailedDescription",
      title: "Detailed Description",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: 'editorial'
    }),
    defineField({
      name: "images",
      title: "Blog Images",
      type: "array",
      of: [{ type: "image" }],
      group: 'editorial',
      validation: (Rule) => Rule.required().min(1).error("At least one image is required.")
    }),

    // Author & Metadata
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'meta',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      group: 'meta',
      description: 'Last update timestamp'
    }),

    // SEO Fields
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'SEO title (50-60 chars). Leave empty to use blog title.',
      type: 'string',
      group: 'seo',
      validation: (Rule) =>
        Rule.max(60).warning('Keep between 50-60 characters for optimal SEO')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      description: 'SEO description (150-160 chars). Leave empty to use short description.',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (Rule) =>
        Rule.max(160).warning('Keep between 150-160 characters for optimal SEO')
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      description: 'Primary keyword for SEO (1-3 words)',
      type: 'string',
      group: 'seo'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Summary for social/search previews (recommended 155 characters)',
      type: 'text',
      rows: 4,
      group: 'seo',
      validation: (Rule) =>
        Rule.max(200).warning('Keep under 200 characters for best display')
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Sharing Image',
      description: 'Optimized image for social media (1200x630px recommended)',
      type: 'image',
      group: 'seo',
      options: {
        hotspot: true
      }
    })
  ],
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'editorial', title: 'Editorial' },
    { name: 'meta', title: 'Meta' },
    { name: 'seo', title: 'SEO' }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'images.0'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
        media
      }
    }
  }
});
