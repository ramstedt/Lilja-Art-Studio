import { RiLayoutTop2Fill } from 'react-icons/ri';

export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: RiLayoutTop2Fill,
  __experimental_actions: ['update', 'publish'], // enable these actions
  options: { singleInstance: true }, // set singleInstance to true
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
