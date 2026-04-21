import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jteer.github.io',
  base: '/godot-learning',
  integrations: [react()],
});
