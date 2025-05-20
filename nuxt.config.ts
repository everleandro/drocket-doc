// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["@/assets/styles/app.scss"],
  site: {
    url: "https://drocket-doc.vercel.app",
    name: "Drocket",
  },
  app: {
    head: {
      title: "'Drocket - Vue Component Library",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          name: "keywords",
          content: "vue components, vue, nuxt, vuejs, vue3, vue 3, nuxtjs",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "description",
          content:
            "Drocket is a Vue 3 component library designed to speed up your Nuxt and Vue development with pre-designed UI components and flexible styles.",
            
        },
          { name: 'keywords', content: 'vue, vue3, nuxt, components, ui, library, drocket' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Drocket Team' },
        { property: 'og:title', content: 'Drocket - Vue Component Library' },
        { property: 'og:description', content: 'Speed up your Vue and Nuxt apps with Drocket UI components.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://drocket-doc.vercel.app' },
        { property: 'og:image', content: 'https://drocket-doc.vercel.app/og-image.png' }, // opcional
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Drocket - Vue Component Library' },
        { name: 'twitter:description', content: 'Speed up your Vue and Nuxt apps with Drocket UI components.' },
        { name: 'twitter:image', content: 'https://drocket-doc.vercel.app/og-image.png' },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-RGYB1GJW1C",
          type: "text/javascript",
          async: true,
        },
        {
          children:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-RGYB1GJW1C');",
        },
      ],
    },
  },

  vite: {
    build: {
      sourcemap: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@use "assets/styles/_global.scss" as *; @use "drocket/mixin.scss";`,
        },
      },
    },
  },

  compatibilityDate: "2024-12-02",
  modules: ["@nuxtjs/sitemap"],
});
