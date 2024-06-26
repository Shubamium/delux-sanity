import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'idols',
  title: 'Idols',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'idol_image',
      title: 'Idol Image',
      type: 'image',
    }),
  ],
})
