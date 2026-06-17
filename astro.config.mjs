import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    server: {
      // Yeh list Vite ko bolegi ki saare trycloudflare links allowed hain
      allowedHosts: ['.trycloudflare.com', 'localhost', '127.0.0.1']
    }
  }
});