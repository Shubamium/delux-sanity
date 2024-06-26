import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'credits',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title Or Role',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
