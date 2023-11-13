import { HiInformationCircle } from "react-icons/hi";


export const about = {
    name: 'about',
    title: 'About',
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
          }
        ]
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  }
  

      // validation: Rule => Rule.custom(doc => {
    //   // Check if a document of the specific schema already exists
    //   return client.fetch(`*[_type == "mySchema"].count() < 1`).then(count => {
    //     return count === 0 ? 'A document of this schema already exists.' : true;
    //   });
    // }),