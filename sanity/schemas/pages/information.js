export const information = {
  name: 'information',
  title: 'Information',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'foretatuering',
      title: 'Före tatuering',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'skotselrad',
      title: 'Skötselråd',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
  ],
};
