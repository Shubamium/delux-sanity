import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'discography',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'category_name',
      title: 'Category Name',
      type: 'string',
    }),
    defineField({
      name: 'discography',
      title: 'Discography List',
      type: 'array',
      of: [
        defineField({
          name: 'discogrpahy',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'video_id',
              title: 'Youtube Video Id',
              description:
                'Video ID from the url after the = in the url (www.youtube.com/watch?v=[video_id])',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
