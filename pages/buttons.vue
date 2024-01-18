<template>
  <div class="button-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Buttons
      </h1>
      <p>
        The Buttons component offers a variety of button types and sizes to meet your design needs. There are lots of
        button types for the best fits design of your application.
      </p>
    </div>
    <section class="mb-12">

      <BoxExample :color="color" :github="githubRepo.button">
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
              <e-button :color="color" :disabled="buttonProperty.disabled" :rounded="buttonProperty.rounded"
                :outlined="buttonProperty.outlined" :text="buttonProperty.text" :depressed="buttonProperty.depressed"
                :block="buttonProperty.block" :loading="buttonProperty.loading">
                Button
              </e-button>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" label="color" />
            <ECheckbox v-model="buttonProperty.outlined" cols="24" label="outlined" :color="color" />
            <ECheckbox v-model="buttonProperty.block" cols="24" label="block" :color="color" />
            <ECheckbox v-model="buttonProperty.disabled" cols="24" label="disabled" :color="color" />
            <ECheckbox v-model="buttonProperty.rounded" cols="24" label="rounded" :color="color" />
            <ECheckbox v-model="buttonProperty.loading" cols="24" label="loading" :color="color" />
            <ECheckbox v-model="buttonProperty.depressed" cols="24" label="depressed" :color="color" />
          </EForm>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Button Sizes Variant</h2>
      <p>
        Here are the available size options: <code class="green--text">x-small small large x-large</code>
      </p>

      <BoxExample :color="color">
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
            <div class="pa-4 button-container">
              <e-button x-small> x-small </e-button>
              <e-button small> small </e-button>
              <e-button> default </e-button>
              <e-button large> large </e-button>
              <e-button x-large> x-large </e-button>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="sizeHtmlCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Icon</h2>
      <p>Using the <code class="ma-2 green--text">icon</code> property property you can transform the layout of
        the component. You can learn more about how icons work on the <e-button to="/icons" text
          color="primary">Icons</e-button> page
      </p>
      <BoxExample color="primary">
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
          <ETab value="ts">
            Ts
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="pa-4 button-container">
              <e-button x-small :icon="$icon.send" />
              <e-button small :icon="$icon.send" />
              <e-button :icon="$icon.send" />
              <e-button large :icon="$icon.send" />
              <e-button x-large :icon="$icon.send" />
              <e-button text x-small :icon="$icon.music" />
              <e-button text small :icon="$icon.music" />
              <e-button text :icon="$icon.music" />
              <e-button text large :icon="$icon.music" />
              <e-button text x-large :icon="$icon.music" />
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="iconHtmlCode" v-prism class="full-height"></div>
          </EWindowItem>
          <EWindowItem value="ts">
            <div v-text="iconTsCode" v-prism="{ class: 'language-ts' }" class="full-height"></div>
          </EWindowItem>
        </template>

      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Prepend and Append icons</h2>
      <p>You have the flexibility to position icons on either the <code class="ma-2 green--text">left</code> or
        <code class="ma-2 green--text">right</code> side of the button.
      </p>
      <BoxExample color="primary">
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
            <div class="pa-4 button-container">
              <e-button :prepend-icon="$icon.delete">Delete</e-button>
              <e-button :prepend-icon="$icon.send">Send</e-button>
              <e-button :prepend-icon="$icon.alert" color="warning">warning</e-button>
              <e-button :append-icon="$icon.alertBox">Stop</e-button>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="appendPrependHtmlCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>

      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Custom icon size</h2>
      <p>Using <code class="ma-2 green--text">width</code> or
        <code class="ma-2 green--text">height</code> you can change the default size of the component
      </p>
      <BoxExample color="primary">
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
            <div class="pa-4 button-container">
              <e-button :width="150">width:150px</e-button>
              <e-button :width="200">width: 100px</e-button>
              <e-button :height="60">height: 60px</e-button>
              <e-button :height="70">height: 70px</e-button>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="customSizeHtmlCode" v-prism class="full-height"></div>
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
            <tr v-for="(item, i) in buttonApiReference" :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
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
              <td>$btn-border-radius</td>
              <td class="string">$border-radius-root !default;</td>
            </tr>
            <tr>
              <td>$btn-font-weight</td>
              <td class="string">500 !default;</td>
            </tr>
            <tr>
              <td>$btn-letter-spacing</td>
              <td class="string">0.089em !default;</td>
            </tr>
            <tr>
              <td>$btn-border-style</td>
              <td class="string">solid !default;</td>
            </tr>
            <tr>
              <td>$btn-border-width</td>
              <td class="string">2px !default;</td>
            </tr>
            <tr>
              <td>$btn-rounded-border-radius</td>
              <td class="string">28px !default;</td>
            </tr>
            <tr>
              <td>$btn-text-transform</td>
              <td class="string">uppercase !default;</td>
            </tr>
            <tr>
              <td>$btn-transition-duration</td>
              <td class="string">0.28s !default;</td>
            </tr>
            <tr>
              <td>$btn-states</td>
              <td>
                <div v-prism="{ class: 'language-scss' }">
                  <pre>
  map-merge(
  (
  "focus": 0.05,
  "hover": 0.1,
  "active": 0.3,
  ),()) !default;
</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td>$btn-font-sizes</td>
              <td>
                <div v-prism="{ class: 'language-scss' }">
                  <pre>
map-merge(
  (
    "x-small": 0.625rem,
    "small": 0.75rem,
    "default": 0.875rem,
    "large": 0.875rem,
    "x-large": 1rem,
  ), ()) !default;
</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td>$btn-height</td>
              <td>
                <div v-prism="{ class: 'language-scss' }">
                  <pre>
map-merge(
  (
    "x-small": 2.187rem,
    "small": 2.5rem,
    "default": 3rem,
    "large": 3.125rem,
    "x-large": 3.4375rem,
  ), ()) !default;
</pre>
                </div>
              </td>
            </tr>
            <tr>
              <td> $icon-font-sizes</td>
              <td>
                <div v-prism="{ class: 'language-scss' }">
                  <pre>
map-merge(
  (
    "x-small": 1.25rem,
    "small": 1.3rem,
    "default": 1.625rem,
    "large": 2rem,
    "x-large": 2.375rem,
  ), ()) !default;
</pre>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import buttonApiReference from '@/api-reference/button.json'
import { default as githubRepo } from '@/external-links/github'

const color = ref('primary')

const buttonProperty = ref({
  outlined: false, loading: false, disabled: false,
  depressed: false, block: false, rounded: false, text: false
})
const colors = ['primary', 'secondary', 'salmon', 'carnation']


const HTMLCode = computed(() => `<template>
  <e-button \n    color="${color.value}"${buttonProperty.value.depressed ?
    '\n    depressed' : ''}${buttonProperty.value.loading ? '\n    loading' : ''}${buttonProperty.value.rounded ?
      '\n    rounded' : ''}${buttonProperty.value.disabled ? '\n    disabled' : ''}${buttonProperty.value.text ?
        '\n    text' : ''}${buttonProperty.value.outlined ? '\n    outlined' : ''}${buttonProperty.value.block ? '\n    block' : ''}>
    button
  </e-button>
</template>
`)

const sizeHtmlCode = `<template>
  <e-button x-small> x-small </e-button>
  <e-button small> small </e-button>
  <e-button> default </e-button>
  <e-button large> large </e-button>
  <e-button x-large> x-large </e-button>
</template>`

const appendPrependHtmlCode = `<template>
  <e-button prepend-icon="delete">Delete</e-button>
  <e-button prepend-icon="send">Send</e-button>
  <e-button prepend-icon="alert" color="warning">warning</e-button>
  <e-button append-icon="alertBox">Stop</e-button>
</template>`

const customSizeHtmlCode = `<template>
  <e-button width="150">width:150px</e-button>
  <e-button width="200">width: 100px</e-button>
  <e-button height="60">height: 60px</e-button>
  <e-button height="70">height: 70px</e-button>
</template>`

const iconHtmlCode = `<template">
  <e-button x-small :icon="iconSend" />
  <e-button small :icon="iconSend" />
  <e-button :icon="iconSend" />
  <e-button large :icon="iconSend" />
  <e-button x-large :icon="iconSend" />
  <e-button text x-small icon="music" />
  <e-button text small icon="music" />
  <e-button text icon="music" />
  <e-button text large icon="music" />
  <e-button text x-large icon="music" />
</template>`
const iconTsCode = `import { IconPath } from "drocket";
const iconSend: IconPath = {
  title: "send",
  d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
};`
</script>
<style lang="scss">
.button-page {
  .button-container {
    .e-btn {
      margin: 12px;
    }
  }
}
</style>
