<template>
  <div class="button-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Buttons
      </h1>
      <p>
        The Buttons component offers a variety of button types and sizes to meet your design needs.
      </p>
    </div>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Example</h2>
      <p>
        There are lots of button types for the best fits design of your application.
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
        Here are the available size options: <code class="primary-darken-1--text">x-small small large x-large</code>
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
      <p>Using the <code class="ma-2 primary-darken-1--text">icon-path</code> or <code
          class="ma-2 primary-darken-1--text">icon-name</code> property in conjunction
        with the <code class="ma-2 primary-darken-1--text">icon</code> property you can transform the layout of
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
              <e-button x-small icon :icon-path="$icon.send" />
              <e-button small icon :icon-path="$icon.send" />
              <e-button icon :icon-path="$icon.send" />
              <e-button large icon :icon-path="$icon.send" />
              <e-button x-large icon :icon-path="$icon.send" />
              <e-button text x-small icon :icon-path="$icon.music" />
              <e-button text small icon :icon-path="$icon.music" />
              <e-button text icon :icon-path="$icon.music" />
              <e-button text large icon :icon-path="$icon.music" />
              <e-button text x-large icon :icon-path="$icon.music" />
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
      <p>You have the flexibility to position icons on either the <code class="ma-2 primary-darken-1--text">left</code> or
        <code class="ma-2 primary-darken-1--text">right</code> side of the button.
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
              <e-button :prepend-icon-path="$icon.delete">Delete</e-button>
              <e-button :prepend-icon-path="$icon.send">Send</e-button>
              <e-button :prepend-icon-path="$icon.alert" color="warning">warning</e-button>
              <e-button :append-icon-path="$icon.alertBox">Stop</e-button>
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
      <h2 class="text-h4 mb-2">Custom icon size</h2>
      <p>Using <code class="ma-2 primary-darken-1--text">width</code> or
        <code class="ma-2 primary-darken-1--text">height</code> you can change the default size of the component
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
            <div v-text="iconHtmlCode" v-prism class="full-height"></div>
          </EWindowItem>
          <EWindowItem value="ts">
            <div v-text="iconTsCode" v-prism="{ class: 'language-ts' }" class="full-height"></div>
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
              <td>disabled</td>
              <td> change button style and removes the ability to click or target the component.</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>to</td>
              <td> Denotes the target route of the link.</td>
              <td class="string">RouteLocationRaw</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>append-icon-name</td>
              <td> name of the icon to be displayed to the left of the component</td>
              <td class="string">string</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>append-icon-path</td>
              <td> path of the icon to be displayed to the left of the component</td>
              <td class="string">IconPath</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>prepend-icon-name</td>
              <td>name of the icon to be displayed to the left of the component </td>
              <td class="string">string</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>prepend-icon-path</td>
              <td> path of the icon to be displayed to the left of the component</td>
              <td class="string">IconPath</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>ripple</td>
              <td>Applies the v-ripple directive.</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>shows a spinner and removes the possibility of clicking on the component </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
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
              <td>hover-color</td>
              <td>Applies a specific color for the hover event to the component - supports only utility colors (for
                example <code class="boolean">primary</code>
                or <code class="boolean">secondary</code>)
              </td>
              <td class="string">string</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>depressed</td>
              <td>remove the box-shadow property </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>text</td>
              <td>removes the shadow from the component and inverts the <code class="primary-darken-1--text">color</code>
                and <code class="primary-darken-1--text">background-color</code> values </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>outlined</td>
              <td>applies an outlined style</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>block</td>
              <td>makes the component take up the entire width of the container</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>small</td>
              <td>applies the size configured in the sass variables for the <code
                  class="primary-darken-1--text">small</code> value </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>x-small</td>
              <td>applies the size configured in the sass variables for the <code
                  class="primary-darken-1--text">x-small</code> value </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>type</td>
              <td> The <code class="primary-darken-1--text">type</code> attribute specifies the type of button.</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>large</td>
              <td>applies the size configured in the sass variables for the <code
                  class="primary-darken-1--text">large</code> value </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>x-large</td>
              <td>applies the size configured in the sass variables for the <code
                  class="primary-darken-1--text">x-large</code> value </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>rounded</td>
              <td>applies a predefined <code class="primary-darken-1--text">border-radius</code> to the component. </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>prepares the component style to display only icons as content</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>icon-name</td>
              <td>name of the icon to be displayed</td>
              <td class="string">string</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>icon-path</td>
              <td>path of the icon to be displayed</td>
              <td class="string">Array&lt;IconPath> | IconPath</td>
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

const iconHtmlCode = `<template">
  <e-button x-small icon :icon-path="iconSend" />
  <e-button small icon :icon-path="iconSend" />
  <e-button icon :icon-path="iconSend" />
  <e-button large icon :icon-path="iconSend" />
  <e-button x-large icon :icon-path="iconSend" />
  <e-button text x-small icon icon-name="music" />
  <e-button text small icon icon-name="music" />
  <e-button text icon icon-name="music" />
  <e-button text large icon icon-name="music" />
  <e-button text x-large icon icon-name="music" />
</template>`
const iconTsCode = `import { IconPath } from "~/drocket/icon/types";
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
