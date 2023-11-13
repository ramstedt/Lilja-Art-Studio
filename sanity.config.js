/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/sanity/[[...index]].jsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input';
import { myStructure } from '@/sanity/deskStructure';

export default defineConfig({
  basePath: '/sanity',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    simplerColorInput({
      // Note: These are both optional
      defaultEnableAlpha: true,
      defaultColorList: [
        { label: 'Primary Background', value: '#fffffe' },
        { label: 'Primary Header', value: '#181818' },
        { label: 'Primary Font', value: '#2e2e2e' },
        { label: 'Primary Button', value: '#4fc4cf' },
        { label: 'Primary Button Text', value: '#181818' },
        { label: 'Primary Button Hover', value: '#4fc4cf' },
        { label: 'Primary Link', value: '#994ff3' },
        { label: 'Primary Link Hover', value: '#fbdd74' },
        { label: 'Secondary Background', value: '#f6efef' },
        { label: 'Secondary Header', value: '#181818' },
        { label: 'Secondary Font', value: '#2e2e2e' },
        { label: 'Secondary Button', value: '#f6efef' },
        { label: 'Secondary Button Text', value: '#2e2e2e' },
        { label: 'Secondary Button Hover', value: '#fbdd74' },
        { label: 'Secondary Link', value: '#fbdd74' },
        { label: 'Secondary Link Hover', value: '#994ff3' },
        { label: 'Custom...', value: 'custom' },
      ],
    }),
  ],
});
