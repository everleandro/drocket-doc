// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["@/assets/styles/app.scss"],
  app: {
    head: {
      title: "Drocket",
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
            "Drocket is components library built on top of Vue. It offers a collection of pre-designed UI components and styles that you can easily integrate into your web applications. Install Drocket in your Vue application or Nuxt Application following step bellow.",
        },
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
          additionalData: `@import "assets/styles/_global.scss";`,
        },
      },
    },
  },
});
