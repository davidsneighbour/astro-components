// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import starlight from '@astrojs/starlight';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'Astro Components by @davidsneighbour',
      social: [{
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/davidsneighbour/astro-components'
      }],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),

    react(), mdx(), sitemap(),
  ],
});
