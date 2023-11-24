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
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Denna text syns i resultat i sökmotorer. ',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'text',
      description:
        'Många och bra keywords leder bättre synlighet i sökmotorer vilket leder till fler besökare.',
    },
  ],
};
