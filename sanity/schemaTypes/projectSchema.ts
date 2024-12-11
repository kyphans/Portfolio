import { defineField, defineType } from 'sanity';

export const projectSchema = defineType({
  name: "project",
  title: "Projects",
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
      title: "Project Images",
      type: "array",
      of: [{ type: "image" }],
      group: 'editorial'
    }),
    defineField({ name: "githubLink", title: "GitHub Link", type: "url", group: 'details' }),
    defineField({ name: "hashtags", title: "Hashtags", type: "array", of: [{ type: "string" }], group: 'details' }),
    defineField({ name: "category", title: "Category", type: "string", group: 'details' })
  ],
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'editorial', title: 'Editorial' },
    { name: 'query', title: 'Query' },
  ]
});