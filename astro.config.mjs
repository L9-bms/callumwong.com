import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import rehypeFigureTitle from "rehype-figure-title";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [rehypeFigureTitle]
  },

  integrations: [mdx()]
});