import { HiInformationCircle } from 'react-icons/hi';

export const home = {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HiInformationCircle,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
