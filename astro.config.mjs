import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import rehypeFigureTitle from "rehype-figure-title";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [rehypeFigureTitle]
  },

  integrations: [mdx()],

  adapter: vercel({
    imageService: true,
  }),
});