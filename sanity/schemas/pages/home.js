export const home = {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContentNoImage",
    },
    {
      name: "pricesTextAbove",
      title: "Text ovanför Prislistan",
      type: "blockContentNoImage",
    },
    {
      name: "prices",
      title: "Prislista",
      type: "table",
    },
    {
      name: "pricesTextBelow",
      title: "Text nedanför Prislistan",
      type: "blockContentNoImage",
    },
  ],
};
