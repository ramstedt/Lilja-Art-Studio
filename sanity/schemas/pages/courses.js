export const courses = {
  name: "courses",
  title: "Kurser",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(25),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContentNoImage",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "object",
          name: "galleryObject",
          fields: [
            {
              name: "media",
              type: "array",
              title: "Media (Image or Video)",
              of: [
                {
                  type: "image",
                  title: "Image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description:
                        "According to WCAG2, images must have alt text for accessibility.",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
                {
                  type: "file",
                  title: "Video",
                  fields: [
                    {
                      name: "altText",
                      title: "Alternative text",
                      type: "string",
                      description:
                        "According to WCAG2, videos must have alt text for accessibility.",
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                  options: {
                    accept: "video/*", // Only allow video files
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
