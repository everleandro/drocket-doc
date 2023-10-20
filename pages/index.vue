<template>
  <div>
    <div class="markdown-body css-1gvtuo9">
      <h1 class="my-4">Date Pickers - Getting Started</h1>
      <p class="description mb-7">Get started with the Date Pickers. Install the package, configure your
        application
        and start using the components.</p>

      <h2 id="installation">Installation</h2>
      <p class="mb-4">Using your favorite package manager, install:</p>
    </div>

    <boxCode :code="code"></boxCode>
    <h2>Usage</h2>
    <BoxExample />


  </div>
</template>
<script lang="ts" setup>

import { BoxCode as BC } from "@/components/app/box-code/index.vue";

const code: Record<string, BC> = {
  npm: { code: 'npm install @drocket/d-date-picker', language: 'language-ts' },
  pnpm: { code: 'pnpm add @drocket/d-date-picker', language: 'language-ts' },
  yarn: { code: 'yarn add @drocket/d-date-picker', language: 'language-ts' }
}

</script>
<style>
/**
 * Dracula Theme originally by Zeno Rocha [@zenorocha]
 * https://draculatheme.com/
 *
 * Ported for PrismJS by Albert Vallverdu [@byverdu]
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

:not(pre)>code[class*="language-"],
pre[class*="language-"] {
  background: #0F1924;
}

/* Inline code */
:not(pre)>code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #6272a4;
}

.token.punctuation {
  color: #f8f8f2;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #ff79c6;
}

.token.boolean,
.token.number {
  color: #bd93f9;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #50fa7b;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #f1fa8c;
}

.token.keyword {
  color: #8be9fd;
}

.token.regex,
.token.important {
  color: #ffb86c;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
</style>
