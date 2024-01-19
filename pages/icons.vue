<template>
  <div class="icon-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Icons
      </h1>
      <p>
        The <code class="green--text mx-2 title">e-icon</code> component provides an easy way to display icons in
        your
        application using webfont or simply passing the
        svg code directly
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :color="iconProperty.color" :github="githubRepo.icon">
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4">
              <e-icon :color="iconProperty.color" :icon="iconProperty.path"
                :x-small="iconProperty.size === iconSize.xSmall" :small="iconProperty.size === iconSize.small"
                :x-large="iconProperty.size === iconSize.xLarge" :large="iconProperty.size === iconSize.large" />
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="iconProperty.color" cols="24" :items="colors" :color="iconProperty.color" label="color" />
            <ESelect v-model="iconProperty.size" cols="24" :items="sizes" :color="iconProperty.color" label="size" />
          </EForm>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Icon svg</h2>
      <p> You can use svg as an icon by simply passing an object of type <code
          class="green--text mx-2">IconPath</code> to the <code class="green--text mx-2">icon</code>
        property of the component.
      </p>
      <e-chip class="mb-2">svg exanple</e-chip>
      <div v-text="svgHtml" v-prism>
      </div>
      <e-chip class="my-2">path attribute example</e-chip>
      <div v-text="pathAttributeExample" v-prism="{ class: 'language-ts' }">
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Web font</h2>
      <p>The component supports the use of any web font, for example if you want to use Font Awesome, you simply modify
        the sass variables file as shown below. It is important to note that you will still need to install the font
        following the steps in the documentation.
      </p>
      <e-chip class="mb-2">variables.scss</e-chip>
      <div v-text="variableCode" v-prism="{ class: 'language-scss' }">
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Buttons</h2>
      <p>Icons can be used inside of buttons </p>
      <BoxExample :color="iconProperty.color">
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4 flex-wrap">
              <e-button color="salmon" :icon="$icon.cog" class="ma-4"></e-button>
              <e-button color="salmon" :icon="$icon.wifi" class="ma-4" text></e-button>
              <e-button color="carnation" :prepend-icon="$icon.delete" class="ma-4"> Delete</e-button>
              <e-button color="yellow-orange" :prepend-icon="$icon.send" class="ma-4">Send</e-button>
              <e-button color="primary" :append-icon="$icon.pencil" class="ma-4">Edit</e-button>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="iconHtmlCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>
    <div class="mb-12 pt-12">
      <h1 class="text-h3 my-2">
        API Reference
      </h1>
    </div>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Props</h2>
      <p>Explore the available props for the form component</p>
      <div class="responsive-table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>color</td>
              <td>Applies specified color to the component - supports only utility colors (for example <code
                  class="boolean">primary</code>
                or <code class="boolean">secondary</code>)
              </td>
              <td class="string">string</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>small</td>
              <td>applies the size configured in the sass variables for the <code
                  class="green--text">small</code> value </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>x-small</td>
              <td>applies the size configured in the sass variables for the <code
                  class="green--text">x-small</code> value </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>

            <tr>
              <td>x-large</td>
              <td>applies the size configured in the sass variables for the <code
                  class="green--text">x-large</code> value </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>object with the icon configuration or class name that corresponds to the font that has been imported
                into the project</td>
              <td class="string">Array&lt;IconPath>
                <e-divider class="my-2" /> IconPath <e-divider class="my-2" /> string
              </td>
              <td class="boolean">undefined</td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">SASS Variables</h2>
      <div class="responsive-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> $icon-font-sizes</td>
              <td>
                <div v-prism="{ class: 'language-scss' }">
                  <pre>
(
    "x-small": 18px,
    "small": 20px,
    "default": 24px,
    "large": 28px,
    "x-large": 32px,
);
</pre>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  </div>
  <section class="mb-12">
    <h2 class="text-h4 mb-2">data types</h2>
    <p> You can import all data types used in the component from the path: <code
        class="green--text">~/drocket/icon/types</code> </p>

    <e-expansion-panel>
      <e-expansion :model-value="true" v-for="(int, i) in interfaces" :key="i" :header-title="int.title" color="primary">
        <div v-text="int.code" v-prism="{ class: 'language-ts' }"></div>
      </e-expansion>
    </e-expansion-panel>
  </section>
</template>
<script lang="ts" setup>
import { default as githubRepo } from '@/external-links/github'
const { $icon } = useNuxtApp()
enum iconSize { xSmall, small, default, large, xLarge };
const iconProperty = ref({
  path: $icon.account, disabled: false, color: 'primary', size: iconSize.default
})
const sizes = [
  { text: 'x-small', value: iconSize.xSmall },
  { text: 'small', value: iconSize.small },
  { text: 'default', value: iconSize.default },
  { text: 'large', value: iconSize.large },
  { text: 'x-large', value: iconSize.xLarge },
]
const colors = ['primary', 'secondary', 'salmon', 'carnation']
const interfaces = [
  {
    title: 'IconPath',
    code: `export type IconPath { 
      d: string,
      fill?: string,
      class?: string 
}`}]

const HTMLCode = computed(() => `<template>
  <e-icon \n    name="account" \n    color="${iconProperty.value.color}"${iconProperty.value.disabled ?
    '\n    disabled' : ''}${iconProperty.value.size === iconSize.large ? '\n    large' : ''}${iconProperty.value.size === iconSize.xSmall ?
      '\n    x-small' : ''}${iconProperty.value.size === iconSize.xLarge ? '\n    x-large' : ''}${iconProperty.value.size === iconSize.small ? '\n    small' : ''}/>
</template>
`)
const svgHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <title>send</title>
  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
</svg>`
const pathAttributeExample = `import { IconPath } from "drocket";
const iconSend: IconPath = {
  title: "send",
  d: "M2,21L23,12L2,3V10L17,12L2,14V21Z",
};`
const variableCode = `$icon-class: "fas";
$icon-prefix: "fa-";
`
const iconHtmlCode = `<template">
  <e-button color="salmon" icon icon="cog"></e-button>
  <e-button color="salmon" icon icon="wifi" text></e-button>
  <e-button color="carnation" prepend-icon="delete"> Delete</e-button>
  <e-button color="yellow-orange" prepend-icon="send">Send</e-button>
  <e-button color="primary" append-icon="pencil">Edit</e-button>
</template>`
</script>
<style lang="scss">
.icon-page {}
</style>
