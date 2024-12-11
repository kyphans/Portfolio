import { defineField, defineType } from 'sanity';

export const blogSchema = defineType({
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: 'details' }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      group: 'details'
    }),
    defineField({ name: "shortDescription", title: "Short Description", type: "string", group: 'details' }),
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
      validation: Rule => Rule.required().min(1).error("At least one image is required.")
    }),
    defineField({ 
      name: "referenceLink", 
      title: "Reference Links", 
      type: "array", 
      of: [{ type: "url" }], 
      group: 'details' 
    }),
    defineField({ name: "hashtags", title: "Hashtags", type: "array", of: [{ type: "string" }], group: 'details' }),
    defineField({ name: "category", title: "Category", type: "string", group: 'details' }),
  ],
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'editorial', title: 'Editorial' },
    { name: 'query', title: 'Query' },
  ]
});