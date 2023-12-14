<template>
  <div>

    <section class="home">
      <div class="mb-12">
        <h1 class="text-h3 mb-2">
          Introduction - Drocket
        </h1>
        <p>
          Drocket is components library built on top of Vue. It offers a collection of pre-designed UI components and
          styles that you can easily integrate into your web applications. Install Drocket in your Vue application or
          Nuxt Application following step bellow.
        </p>
      </div>
      <div class="mb-12">
        <h2 class="text-h4 mb-2">Installation</h2>
        <p>
          To get started with Drocket, simply paste the following code into your terminal:
        </p>
        <boxCode :code="installCode" class="my-2" />
      </div>
      <div class="mb-12">
        <h2 class="text-h4 mb-2">
          Vue App
        </h2>
        <e-divider></e-divider>
        <div class="mt-2">
          <p class="">Setting Up Drocket in Vue Application</p>
          <e-chip class="mb-2" color="secondary"> //src/main.ts</e-chip>
          <div v-prism="{ class: 'language-js' }">{{ VueMainJs }}</div>
          <e-chip class="mb-2 mt-4" color="secondary"> // vue.config.js</e-chip>
          <div v-prism="{ class: 'language-js' }">{{ VueConfigJs }}</div>
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-h4 mb-2">
          Nuxt App
        </h2>
        <e-divider></e-divider>
        <div class="mt-2">
          <p class="">Setting Up Drocket in Nuxt Application</p>
          <e-chip class="mb-2" color="secondary"> // plugins/drocket.js</e-chip>
          <div v-prism="{ class: 'language-js' }">{{ NuxtPluginsJs }}</div>
          <e-chip class="mb-2 mt-4" color="secondary"> // nuxt.config.js</e-chip>
          <div v-prism="{ class: 'language-js' }">{{ NuxtConfigJs }}</div>
          <e-chip class="mb-2 mt-4" color="secondary"> // sass/variables.scss</e-chip>
          <div v-prism="{ class: 'language-js' }">{{ SassVariables }}</div>
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-h4 mb-2">
          Sass variables example file
        </h2>
        <e-divider></e-divider>
        <div class="mt-2">
          <p class="">
            This file overrides the default library style settings, each of the colors defined in it can be passed as a
            property to components declared in the library and also generate helper classes.
          </p>
          <e-chip class="mb-2" color="secondary"> /sass/variables.scss</e-chip>
          <div v-prism="{ class: 'language-scss' }">{{ SassVariablesExample }}</div>
          <p class="mt-4 mb-2">
            Generated classes
          </p>
          <e-divider></e-divider>
          <div v-prism="{ class: 'language-scss' }">{{ GeneratedClasses }}</div>
        </div>
      </div>

    </section>
  </div>
</template>
<script lang="ts" setup>

import { BoxCode as BC } from "@/components/app/box-code/index.vue";

const installCode: Record<string, BC> = {
  npm: { code: 'npm install @drocket', language: 'language-js' },
  pnpm: { code: 'pnpm add @drocket', language: 'language-js' },
  yarn: { code: 'yarn add @drocket', language: 'language-js' }
}



const VueMainJs = computed(() => `import "@ever.leandros91/e-vue/dist/e-vue.css";
import Vue from 'vue'
import { EVue } from '@ever.leandros91/e-vue'

// this line auto imports all components and directives
Vue.use(EVue)

`)
const VueConfigJs = `module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '
        // This is the path to your variables
        @import "@/sass/variables.scss";
        ',
      },
    },
  },
};
`


const NuxtPluginsJs = computed(() => `import Vue from 'vue'
import { EVue } from '@ever.leandros91/e-vue'
Vue.use(EVue)
`)
const NuxtConfigJs = `css: [
    '@ever.leandros91/e-vue/dist/e-vue.css',
     // This is the path to your variables
    '~sass/variables.scss',
  ],
`
const SassVariables = `@import '@ever.leandros91/e-vue/styles/override.scss';`
const SassVariablesExample = `// Globals
$border-radius-root: 4px;
$root-font-size: 2rem;

// Colors
$colors: (
  "primary": #f19933,
  "secondary": #2c373c,
  "white": white,
  "black": black,
  "disabled": rgba(0, 0, 0, 0.38),
  "success": #66bb6a,
  "red": #f44336,
  "error": #f44336,
);

$contrast-colors: (
  "white": black,
) !default;

// This is mandatory
@import "@ever.leandros91/e-vue/styles/override.scss";
`
const GeneratedClasses = `.primary {
  background-color: #f19933;
  &--text {
    color: #f19933;
  }
}
.secondary {
  background-color: #2c373c;
  &--text {
    color: #2c373c;
  }
}
// ...
`

</script>
<style lang="scss"></style>
