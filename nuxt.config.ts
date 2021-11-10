import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
      "nuxt-windicss"
  ],
  css: [
      'virtual:windi.css'
  ],
  head: {
      link: [
          {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com'
          },
          {
              rel: 'preconnect',
              href: 'https://fonts.gstatic.com',
              crossOriginIsolated: true,
          },
          {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Monofett&family=Pacifico&family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
          },
      ]
  },
  nitro: {
      preset: 'cloudflare'
  },
  server: {
      host: '127.0.0.1',
      port: 3000,
  },
  windicss: {
      scan: {
        dir: './*',
        include: ['**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git', '.nuxt', '.output'],
      },
  }
});
