import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import rehypeFigureTitle from "rehype-figure-title";
import rehypeGithubAlert from "rehype-github-alert";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
    rehypePlugins: [rehypeFigureTitle, rehypeGithubAlert]
  },

  integrations: [mdx(), icon()],

  adapter: vercel({
    imageService: true,
  }),
});