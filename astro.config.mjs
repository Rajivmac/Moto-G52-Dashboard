import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    server: {
      allowedHosts: true // Yeh hai asli silver bullet jo check ko poori tarah bypass karega
    }
  }
});