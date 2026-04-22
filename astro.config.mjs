import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://varyagtech.com',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
