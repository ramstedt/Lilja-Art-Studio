import { BsFillPeopleFill } from 'react-icons/bs';

export const tatuerare = {
  name: 'tatuerare',
  title: 'Tatuerare',
  type: 'document',
  icon: BsFillPeopleFill,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};

// validation: Rule => Rule.custom(doc => {
//   // Check if a document of the specific schema already exists
//   return client.fetch(`*[_type == "mySchema"].count() < 1`).then(count => {
//     return count === 0 ? 'A document of this schema already exists.' : true;
//   });
// }),
