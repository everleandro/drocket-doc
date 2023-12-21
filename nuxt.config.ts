// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/Main.scss"],
  components: [
    { path: "~/components/shared", prefix: "E" },
    { path: "~/components/shared/grid", prefix: "E" },
    { path: "~/components/shared/form", prefix: "E" },
    "~/components/app",
  ],
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
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "assets/styles/Variables.scss" as *; @import "assets/styles/Mixin.scss";',
        },
      },
    },
  },
});
