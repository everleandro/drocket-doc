import { Drocket } from "drocket";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Drocket);
});
