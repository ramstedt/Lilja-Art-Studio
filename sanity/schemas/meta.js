export const meta = {
  name: 'meta',
  title: 'Meta data',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Texten som syns i titeln på webbläsarens fönster.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description:
        'Ikonen bör vara i .svg eller .png format och storlek 512x512 pixlar.',
      options: {
        accept: 'image/png, image/svg+xml',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Denna text syns i resultat i sökmotorer. ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'text',
      description:
        'Många och bra keywords leder bättre synlighet i sökmotorer vilket leder till fler besökare.',
      validation: (Rule) => Rule.required(),
    },
  ],
};
