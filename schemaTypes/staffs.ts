import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'staffs',
  title: 'Staffs',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Staff Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title or Role',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Staff Image',
      type: 'image',
    }),
  ],
})
