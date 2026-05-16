import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://songxiaofeng1981.github.io',
  base: '/my-blog',
  integrations: [tailwind()],
});
