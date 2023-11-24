import { RiLayoutBottom2Fill } from 'react-icons/ri';

export const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adress',
      type: 'blockContentNoImage',
    },
    {
      name: 'gmapsUrl',
      title: 'Hitta hit',
      type: 'url',
      description:
        "För att få fram en url, sök fram adressen på Google maps, klicka på 'dela' och kopiera länken.",
    },
    {
      name: 'orgnumber',
      title: 'Organisationsnummer',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    },
    {
      name: 'logo',
      title: 'Logo',
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
