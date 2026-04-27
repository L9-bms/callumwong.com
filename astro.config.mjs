import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import rehypeFigureTitle from "rehype-figure-title";
import rehypeGithubAlert from "rehype-github-alert";

import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
    rehypePlugins: [rehypeFigureTitle, rehypeGithubAlert],
  },

  integrations: [
    mdx(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],

  adapter: vercel({
    imageService: true,
  }),

  fonts: [
    {
      provider: fontProviders.local(),
      name: "HarmonyOS Sans TC",
      cssVariable: "--font-harmonyos-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/HarmonyOS_Sans_TC_Black.woff2"],
            weight: 900,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/HarmonyOS_Sans_TC_Bold.woff2"],
            weight: 700,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/HarmonyOS_Sans_TC_Light.woff2"],
            weight: 300,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/HarmonyOS_Sans_TC_Medium.woff2"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/HarmonyOS_Sans_TC_Regular.woff2"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/HarmonyOS_Sans_TC_Thin.woff2"],
            weight: 100,
            style: "normal",
          },
        ],
      },
      subsets: ["latin"],
    },
  ],
});
