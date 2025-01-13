import { defineField, defineType } from 'sanity';
import { filterAlreadyReferenced } from '../helpers';

export const homepage = defineType({
  type: 'document',
  name: 'homepage',
  title: 'Homepage',
  fields: [
    // defineField({
    //   type: 'seo',
    //   name: 'seo',
    //   title: 'SEO & Social media previews',
    // }),
    defineField({
      type: 'image',
      name: 'hero',
      title: 'Hero',
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [
        {
          name: 'productRef',
          type: 'reference',
          to: [{ type: 'product' }],
          options: {
            filter: filterAlreadyReferenced,
          },
        },
      ],
    }),
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Archive link text',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Homepage' };
    },
  },
});
