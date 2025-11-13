import { defineField, defineType } from 'sanity'

export const authorSchema = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Author biography (portable text)'
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Author profile picture'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email()
    }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          description: 'Twitter profile URL'
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          description: 'LinkedIn profile URL'
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
          description: 'GitHub profile URL'
        }),
        defineField({
          name: 'website',
          title: 'Website',
          type: 'url',
          description: 'Personal website URL'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      media: 'avatar'
    }
  }
})
