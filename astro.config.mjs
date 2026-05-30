import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://integraw.in',
  integrations: [
    tailwind(),
    mdx(),
    react(),
  ],
});
