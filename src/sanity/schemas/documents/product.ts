import { defineField, defineType } from 'sanity';

export const product = defineType({
  type: 'document',
  name: 'product',
  title: 'Product',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      type: 'string',
      name: 'price',
      title: 'Price',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
    }),
  ],
});
