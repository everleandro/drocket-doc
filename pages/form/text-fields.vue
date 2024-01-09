<template>
  <div class="button-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Text Field
      </h1>
      <p>
        Input Component is a fundamental user interface element used to collect user input or data in various forms, such
        as text, numbers, dates, or selections.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :color="textFieldProperty.color" :github="githubRepo.textfield">
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
              <e-textfield v-model="exampleModel" :outlined="textFieldProperty.outlined"
                :retain-color="textFieldProperty.retainColor" :color="textFieldProperty.color"
                :clearable="textFieldProperty.clearable" :disabled="textFieldProperty.state === textFieldState.disabled"
                :readonly="textFieldProperty.state === textFieldState.readonly" />
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="textFieldProperty.color" cols="24" :items="colors" :color="textFieldProperty.color"
              label="color" />
            <ECheckbox v-model="textFieldProperty.outlined" cols="24" label="outlined" :color="textFieldProperty.color" />
            <ECheckbox v-model="textFieldProperty.retainColor" cols="24" label="retain-color"
              :color="textFieldProperty.color" />
            <ECheckbox v-model="textFieldProperty.clearable" cols="24" label="clearable"
              :color="textFieldProperty.color" />
            <e-radio-group v-model="textFieldProperty.state" :color="textFieldProperty.color">
              <e-radio :model-value="textFieldState.default" label="default"></e-radio>
              <e-radio :model-value="textFieldState.readonly" label="readonly"></e-radio>
              <e-radio :model-value="textFieldState.disabled" label="disabled"></e-radio>
            </e-radio-group>
          </EForm>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Icons</h2>
      <p>The <code class="primary-darken-1--text mx-2">e-textfield</code> With Icon component pairs a standard text input
        with a functional addon element, can be
        positioned on either the left or right side of the input field.</p>
      <BoxExample :color="textFieldProperty.color">
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
              <e-form>
                <e-textfield v-model="iconFieldModel" :prepend-icon="textFieldProperty.prepenIcon?.icon"
                  :append-icon="textFieldProperty.appendIcon?.icon" cols="24" :label="textFieldProperty.label" />
              </e-form>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="iconsTemplateCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="textFieldProperty.prepenIcon" cols="24" :items="icons" return-object clearable
              label="prepend-icon">
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>

            <ESelect v-model="textFieldProperty.appendIcon" cols="24" :items="icons" return-object clearable
              label="append-icon">
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>

          </EForm>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Validations</h2>
      <p><code class="primary-darken-1--text mx-2">Input fields</code> use a rule-based validation system that returns
        true or a text string.</p>
      <BoxExample :color="textFieldProperty.color">
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
          <ETab value="Ts">
            Ts
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4">
              <e-form>
                <e-spacer></e-spacer>
                <e-textfield v-model="rulesFieldModel" :rules="[required]" cols="24" label="Nombre" lg="12" clearable />
                <e-spacer></e-spacer>
              </e-form>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="rulesTemplate" v-prism class="full-height"></div>
          </EWindowItem>
          <EWindowItem value="Ts">
            <div v-text="rulesTs" v-prism="{ class: 'language-ts' }" class="full-height"></div>
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
              <td>retain-color</td>
              <td>allows the input to maintain the color regardless of the state it is in</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Modify the style and change the input state to disabled</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>change the input state to disabled</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>counter</td>
              <td>places a counter at the bottom of the component with the number of characters that have been entered
              </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>sets whether the component is cleanable or not </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>label-inline</td>
              <td>set the css rule <code class="string">white-space: nowrap;</code> to the label</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>detail</td>
              <td>displays an informational message below the component</td>
              <td class="string">string</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>outlined</td>
              <td>applies an outlined style</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>

            <tr>
              <td>label</td>
              <td>label associated with the input field</td>
              <td class="string">string | number</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>model-value</td>
              <td>The v-model value of the component. </td>
              <td class="string">string | number</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>input placeholder</td>
              <td class="string">string </td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>Displays suffix text.</td>
              <td class="string">string </td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>prefix</td>
              <td>Displays prefix text.</td>
              <td class="string">string </td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>input-align</td>
              <td>apply <code class="string">text-align</code> css rule to the input field</td>
              <td class="string">string </td>
              <td class="boolean"></td>
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
              <td>limit</td>
              <td>sets a character limit to the input field</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>detail-errors</td>
              <td>shows an error message below the component and changes the state</td>
              <td class="string">Array&lt;string></td>
              <td class="boolean">[]</td>
            </tr>
            <tr>
              <td>label-min-width</td>
              <td>This sets a minimum width in px for the label</td>
              <td class="string">string</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>cols</td>
              <td>Sets the default number of columns the component extends. Available options are: {1...24}. </td>
              <td class="string">string | number</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>sm</td>
              <td>Changes the number of columns on small and greater breakpoints.</td>
              <td class="string">string | number</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>md</td>
              <td>Changes the number of columns on medium and greater breakpoints.</td>
              <td class="string">string | number</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>lg</td>
              <td>Changes the number of columns on large and greater breakpoints.</td>
              <td class="string">string | number</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>icon-clear</td>
              <td>icon displayed on the button to clear the input content</td>
              <td class="string">Array&lt;IconPath>
                <e-divider class="my-2" /> IconPath <e-divider class="my-2" /> string
              </td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>append-icon</td>
              <td>icon to be displayed to the left of the component</td>
              <td class="string">Array&lt;IconPath>
                <e-divider class="my-2" /> IconPath <e-divider class="my-2" /> string
              </td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>prepend-icon</td>
              <td>icon to be displayed to the left of the component </td>
              <td class="string">Array&lt;IconPath>
                <e-divider class="my-2" /> IconPath <e-divider class="my-2" /> string
              </td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>rules</td>
              <td>Accepts a array of types <code class="string">function</code> that pass an input value as an
                argument and must return either <code class="boolean">true</code> | <code class="boolean">false</code> or
                a string containing an error message. This also change the
                input state.</td>
              <td class="string">Array&lt;(param: any)=> string | true></td>
              <td class="boolean"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>
<script lang="ts" setup>
import { default as githubRepo } from '@/external-links/github'
const exampleModel = ref('')
const iconFieldModel = ref('')
const rulesFieldModel = ref('')
enum textFieldState { disabled, readonly, default }
const { $icon } = useNuxtApp()
const icons = [
  { text: 'calendar', icon: $icon.calendar, value: 1 },
  { text: 'account', icon: $icon.account, value: 2 },
  { text: 'email', icon: $icon.email, value: 3 },
]

const textFieldProperty = ref({
  outlined: false, readOnly: false, disabled: false, retainColor: false, label: 'label',
  prepenIcon: { text: 'calendar', icon: $icon.calendar, value: 1 },
  appendIcon: { text: 'calendar', icon: $icon.calendar, value: 1 },
  depressed: false, block: false, rounded: false, color: 'primary', state: textFieldState.default, clearable: false
})
const required = (value: string) => !!value || 'Field is required'
const colors = ['primary', 'secondary', 'salmon', 'carnation']
const rulesTemplate = `<e-textfield 
  v-model="rulesFieldModel"
  :rules="[required]"
  label="Nombre"
  clearable
/>`
const rulesTs = `const required = (value: string) => !!value || 'Field is required'`
const iconsTemplateCode = computed(() => `<template>
<e-textfield 
    v-mdodel="model" ${textFieldProperty.value.prepenIcon ?
    '\n    prepend-icon="' + textFieldProperty.value.prepenIcon.text + '"' : ''}${textFieldProperty.value.appendIcon ?
      '\n    append-icon="' + textFieldProperty.value.appendIcon.text + '"' : ''}/>  
</template>`)
const HTMLCode = computed(() => `<template>
  <e-textfield \n    v-model="example" \n    color="${textFieldProperty.value.color}"${textFieldProperty.value.clearable ?
    '\n    clearable' : ''}${textFieldProperty.value.state === textFieldState.readonly ? '\n    read-only' : ''}${textFieldProperty.value.rounded ?
      '\n    rounded' : ''}${textFieldProperty.value.state === textFieldState.disabled ? '\n    disabled' : ''}${textFieldProperty.value.retainColor ?
        '\n    retain-color' : ''}${textFieldProperty.value.outlined ? '\n    outlined' : ''}
  />
</template>
`)

</script>
