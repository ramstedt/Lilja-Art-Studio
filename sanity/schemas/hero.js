import { RiLayoutTop2Fill } from 'react-icons/ri'

export const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    icon: RiLayoutTop2Fill,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'heroImage',
        title: 'Hero image',
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      },
    ],
  }
  


 