export const theme = {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'secondaryBackgroundColor',
      title: 'Secondary Background Color',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headerColor',
      title: 'Header Color',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fontColor',
      title: 'Font Color',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonColor',
      title: 'Button Color',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonTextColor',
      title: 'Button Text Color',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonColorHover',
      title: 'Button Color Hover',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonTextColorHover',
      title: 'Button Text Color Hover',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkColor',
      title: 'Link Color',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkColorHover',
      title: 'Link Color Hover',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
  ],
};
