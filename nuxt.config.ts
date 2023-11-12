// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/Main.scss"],
  components: [
    { path: "~/components/shared", prefix: "E" },
    { path: "~/components/shared/grid", prefix: "E" },
    { path: "~/components/shared/form", prefix: "E" },
    "~/components/app",
  ],
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
