import { GiIceCreamCone } from 'react-icons/gi';

export const theme = {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  icon: GiIceCreamCone,
  fields: [
    {
      name: 'primary',
      title: 'Primary Colors',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'simplerColor',
        },
        {
          name: 'fontColor',
          title: 'Font Color',
          type: 'simplerColor',
        },
        {
          name: 'headerColor',
          title: 'Header Color',
          type: 'simplerColor',
        },
        {
          name: 'linkColor',
          title: 'Link Color',
          type: 'simplerColor',
        },
        {
          name: 'linkColorHover',
          title: 'Link Color Hover',
          type: 'simplerColor',
        },
        {
          name: 'buttonColor',
          title: 'Button Color',
          type: 'simplerColor',
        },
        {
          name: 'buttonColorHover',
          title: 'Button Color Hover',
          type: 'simplerColor',
        },
        {
          name: 'buttonTextColor',
          title: 'Button Text Color',
          type: 'simplerColor',
        },
      ],
    },
    {
      name: 'secondary',
      title: 'Secondary Colors',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'simplerColor',
        },
        {
          name: 'fontColor',
          title: 'Font Color',
          type: 'simplerColor',
        },
        {
          name: 'headerColor',
          title: 'Header Color',
          type: 'simplerColor',
        },
        {
          name: 'linkColor',
          title: 'Link Color',
          type: 'simplerColor',
        },
        {
          name: 'linkColorHover',
          title: 'Link Color Hover',
          type: 'simplerColor',
        },
        {
          name: 'buttonColor',
          title: 'Button Color',
          type: 'simplerColor',
        },
        {
          name: 'buttonColorHover',
          title: 'Button Color Hover',
          type: 'simplerColor',
        },
        {
          name: 'buttonTextColor',
          title: 'Button Text Color',
          type: 'simplerColor',
        },
      ],
    },
  ],
};
