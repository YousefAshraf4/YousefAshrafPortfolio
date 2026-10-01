import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://YousefAshraf4.github.io',
  base: '/YousefAshrafPortfolio',
  integrations: [react()],
});