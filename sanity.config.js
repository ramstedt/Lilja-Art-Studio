import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { myStructure } from "@/sanity/deskStructure";
import { table } from "@sanity/table"; // Correct Plugin Import

export default defineConfig({
  basePath: "/sanity",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    simplerColorInput({
      defaultEnableAlpha: true,
      defaultColorList: [
        { label: "Background", value: "#fffffe" },
        { label: "Secondary Background", value: "#f6efef" },
        { label: "Header", value: "#181818" },
        { label: "Font", value: "#2e2e2e" },
        { label: "Button", value: "#181818" },
        { label: "Button Text", value: "#fffffe" },
        { label: "Button Hover", value: "#fffffe" },
        { label: "Button Text Hover", value: "#181818" },
        { label: "Link", value: "#994ff3" },
        { label: "Link Hover", value: "#f4c725" },
        { label: "Custom...", value: "custom" },
      ],
    }),
    table(), // Correct plugin usage
  ],
});
