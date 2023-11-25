export const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      description:
        'Bilden kommer att krympas ner till max bredd: 1440px och max höjd: 600px. Försök hålla filen så liten som möjligt för snabbare laddning. Bra sida för optimering av bilder: https://squoosh.app',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description:
            'Enligt WCAG2 måste bilder ha en text som beskriver bilden för de som inte kan se. https://bernskioldmedia.com/sv/sa-skriver-du-bra-alt-texter-till-bilder-for-battre-seo-och-tillganglighet',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
