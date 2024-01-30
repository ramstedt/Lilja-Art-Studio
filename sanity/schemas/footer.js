export const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'contact',
      title: 'Kontakt',
      type: 'blockContentPlain',
    },
    {
      name: 'address',
      title: 'Adress',
      type: 'blockContentPlain',
    },
    {
      name: 'gmapsUrl',
      title: 'Hitta hit',
      type: 'url',
      description:
        "För att få fram en url, sök fram adressen på Google maps, klicka på 'dela' och kopiera länken.",
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
          description:
            'Enligt WCAG2 måste bilder ha en text som beskriver bilden för de som inte kan se. https://bernskioldmedia.com/sv/sa-skriver-du-bra-alt-texter-till-bilder-for-battre-seo-och-tillganglighet',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
