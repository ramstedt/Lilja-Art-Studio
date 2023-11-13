import { RiLayoutBottom2Fill } from 'react-icons/ri'

export const footer = {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: RiLayoutBottom2Fill,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'footerImage',
        title: 'Footer image',
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
  


 