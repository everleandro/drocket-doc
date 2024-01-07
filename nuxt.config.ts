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
          name: "description",
          content: "default description",
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
 
    },
  },
  resolve: {
    alias: [
      {
        // this is required for the SCSS modules
        find: /^~(.*)$/,
        replacement: "$1",
      },
    ],
  },
});
