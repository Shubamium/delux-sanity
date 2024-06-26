import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset Id',
      description: "Set the active one as 'main' without the quote",
      type: 'string',
    }),
    defineField({
      name: 'home_banner',
      title: 'Home Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'banner_type',
          title: 'Banner Type',
          type: 'string',
          options: {
            list: ['image', 'video'],
          },
        }),
        defineField({
          name: 'src',
          title: 'Source',
          type: 'file',
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        defineField({
          name: 'banner',
          type: 'image',
        }),
        defineField({
          name: 'description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'page_descriptions',
      title: 'Page Descriptions',
      type: 'object',
      fields: [
        defineField({
          name: 'idols_desc',
          title: 'Idols Description',
          type: 'text',
        }),
        defineField({
          name: 'credits_desc',
          title: 'Credits Description',
          type: 'text',
        }),

        defineField({
          name: 'staffs_desc',
          title: 'Staffs Description',
          type: 'text',
        }),
        defineField({
          name: 'discography_desc',
          title: 'Discography Description',
          type: 'text',
        }),
      ],
    }),
  ],
})
