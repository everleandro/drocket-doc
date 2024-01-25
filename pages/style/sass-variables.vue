<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Sass variables
      </h1>
      <p>
        the framework has a file that contains the variables that are used to generate the styles, this file is located in
        the path <code class="green--text mx-2 title">drocket/setting.scss</code> and can be modified to customize
        the styles of the components. In addition to this general configuration, each component has its own variables.
      </p>
    </div>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Global setting</h2>
      <p>
        Here are the available size options: <code class="green--text">x-small small large x-large</code>
      </p>
      <div style="position: relative;">
        <copy-button />
        <div v-prism="{ class: 'language-scss' }">{{ HTML }}</div>
      </div>
    </section>


  </div>
</template>
<script lang="ts" setup>
const HTML = `
$border-radius-root: 4px !default;
$root-font-size: 1rem !default;
$space-base: 12px !default;
$grid-cols: 24 !default;
$root-font-family: "Roboto", sans-serif !default;

// Some components use icons  with close functionality, this are the default sizes of the icons
$icon-close-font-size: 24px !default;

//This is usefful to include the different font icons libraries the default is material design icons
$icon-class: "mdi" !default;
$icon-prefix: "mdi-" !default;

// This are the default space sizes of the framework they are used to generate the helper classes
$space-amount: 24 !default;
$space-step: 4px !default;

// This are the default colors of the framework they are used to generate the helper classes and every
// component can use this colors as a property, you can override this colors in the variables.scss file
$colors: map-merge((
      "primary": #00af67,
      "blue": #00d3ee,
      "secondary": #4c5f68,
      "warning": #ffa21a,
      "purple": #AF2CC5,
      "success": #5cb860,
      "input": #4f636b,
      "disabled": rgba(0, 0, 0, 0.38),
      "error": #f55a4e,
      "white": white,
      "black": black),
    ()) !default;

// This are the default contrast colors of the framework they are used to set the color of the text depending on the background color 
$contrast-colors: map-merge(("white": black ),()) !default;

// This are the default breakpoints they are used to generate the media queries of the framework
$breakpoint: (
  "xs": 600px,
  "sm": 960px,
  "md": 1264px,
  "lg": 1904px,
  ) !default;

`
</script>