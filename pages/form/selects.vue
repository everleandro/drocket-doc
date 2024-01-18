<template>
  <div class="button-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Select
      </h1>
      <p>
        You can select options from a list of multiple formats with this component
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :color="textFieldProperty.color" :github="githubRepo.select">
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
              <e-select v-model="exampleModel" :items="['item-1', 'item-2', 'item-3']" label="select"
                :outlined="textFieldProperty.outlined" :retain-color="textFieldProperty.retainColor"
                :color="textFieldProperty.color" :clearable="textFieldProperty.clearable"
                :disabled="textFieldProperty.state === textFieldState.disabled"
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
      <p>The <code class="green--text mx-2">e-select</code> With Icon component pairs a standard text input
        with a functional addon element, can be
        positioned on either the left or right side of the input field.</p>
      <BoxExample>
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
                <e-select v-model="iconFieldModel" :items="['item-1', 'item-2', 'item-3']"
                  :prepend-icon="textFieldProperty.prepenIcon?.icon" :append-icon="textFieldProperty.appendIcon?.icon"
                  :arrow-down="textFieldProperty.arrowDown?.icon" cols="24" :label="textFieldProperty.label" />
              </e-form>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="iconsTemplateCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="textFieldProperty.arrowDown" cols="24" :items="arrowIcons" return-object label="arrow-down">
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>
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
      <h2 class="text-h4 mb-2">Chips</h2>
      <p> There are different ways to use <code class="green--text mx-2">chips</code> in component.</p>
      <BoxExample>
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
                <e-select v-model="chipFieldModel" chip label="chip" cols="24" :items="['item-1', 'item-2', 'item-3']" />
                <e-select v-model="chipFieldModelMultiple" chip label="chip multiple" multiple cols="24"
                  :items="['item-1', 'item-2', 'item-3']" />

              </e-form>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="chipFieldModelTemplate" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Autocomplete</h2>
      <p>you can transform the behavior of the select using the appropriate properties and make it behave like an <code
          class="green--text mx-2">autocomplete</code>.</p>
      <BoxExample>
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
                <e-spacer />
                <ESelect v-model="autocompleteModel" v-model:search="autocompleteSearch" clearable autocomplete
                  label="Buscar" chip :items="filteredItems" cols="12" :loading="textFieldProperty.loading" />
                <e-spacer />
              </e-form>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="autocompleteTemplate" v-prism class="full-height"></div>
          </EWindowItem>
          <EWindowItem value="Ts">
            <div v-text="autocompleteTs" v-prism="{ class: 'language-ts' }" class="full-height"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Slots</h2>
      <p>You can combine the different <code class="green--text mx-2">props</code> with the component <code
          class="green--text mx-2">slots</code> to display more dynamic content </p>
      <BoxExample>
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
                <ESelect v-model="chipFieldModelMultipleWithAvatar" label="Select" chip multiple :items="availableUsers"
                  cols="24" detail="select one or more users from the list">
                  <template #selection="{ selection, attrs }">
                    <EChip v-bind="attrs" :prepend-avatar="selection?.avatar" :avatar-size="32"
                      :closable="textFieldProperty.closableChip">
                      {{ selection?.text }}
                    </EChip>
                  </template>
                  <template #item="{ attrs, item }">
                    <e-list-item v-bind="attrs" :prepend-avatar="item.avatar">
                      {{ item.text }}
                    </e-list-item>
                  </template>
                </ESelect>
              </e-form>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="chipFieldMultipleWithAvatarTemplate" v-prism class="full-height"></div>
          </EWindowItem>
          <EWindowItem value="Ts">
            <div v-text="chipFieldMultipleWithAvatarTs" v-prism="{ class: 'language-ts' }" class="full-height"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ECheckbox v-model="textFieldProperty.closableChip" cols="24" label="closable chip" />
          </EForm>
        </template>
      </BoxExample>
    </section>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Validations</h2>
      <p><code class="green--text mx-2">selects</code> use a rule-based validation system that returns
        true or a text string.</p>
      <BoxExample>
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
                <e-select v-model="rulesFieldModel" :rules="[required]" cols="24" label="option" lg="12" clearable
                  :items="['item-1', 'item-2', 'item-3']" />
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
              <td>item-text</td>
              <td>property of the list of elements that contains the text to display</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>item-value</td>
              <td>property of the list of elements which will be taken as a value</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>retain-color</td>
              <td>allows the input to maintain the color regardless of the state it is in</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>autocomplete</td>
              <td>enables the ability to use the component as an autocomplete</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>chip</td>
              <td>encapsulates the selection within the e-chip component</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>chip-closable</td>
              <td>sets the closable property of the chip within the selection to true in case the chip property is true
              </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>v-model:search</td>
              <td>v-model of the input shown in case the component is used as autocomplete</td>
              <td class="string">string | number</td>
              <td class="boolean"></td>
            </tr>
            <tr>
              <td>item-col</td>
              <td>number of columns that the elements of the drop-down list will occupy</td>
              <td class="string">string | number</td>
              <td class="boolean">1</td>
            </tr>
            <tr>
              <td>return-object</td>
              <td>returns the object instead of the value specified with <code class="string">item-value</code>.</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>Show a linear progress bar at the bottom of the component and change the status to read-only</td>
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
              <td class="string">
                string
                <e-divider class="my-2" />
                number
                <e-divider class="my-2" />
                null
                <e-divider class="my-2" />
                Record&lt;string, any>
                <e-divider class="my-2" />
                Array&lt;itemType>
                <e-divider class="my-2" />
              </td>
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
              <td>arrow-down</td>
              <td>spin icon </td>
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
const exampleModel = ref('item-1')
const iconFieldModel = ref('')
const chipFieldModel = ref('item-1')
const chipFieldModelMultiple = ref([])
const chipFieldModelMultipleWithAvatar = ref([1])
const autocompleteTimer = ref()
const rulesFieldModel = ref('item-1')
const stringItems = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6']
const filteredItems = ref([...stringItems])
const autocompleteModel = ref('')
const autocompleteSearch = ref('')

watch(autocompleteSearch, (value: string) => {
  if (value) {
    if (autocompleteTimer.value) clearTimeout(autocompleteTimer.value)
    autocompleteTimer.value = window?.setTimeout(() => {
      filteredItems.value = stringItems.filter(
        (text) => text.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
      )
    }, 100)
  } else {
    filteredItems.value = [...stringItems]
  }
})
enum textFieldState { disabled, readonly, default }
const { $icon } = useNuxtApp()
const icons = [
  { text: 'calendar', icon: $icon.calendar, value: 1 },
  { text: 'account', icon: $icon.account, value: 2 },
  { text: 'email', icon: $icon.email, value: 3 },
]
const availableUsers = [
  { text: 'User 1', value: 1, avatar: "/images/female-1.jpg" },
  { text: 'User 2', value: 2, avatar: "/images/male-1.jpg" },
  { text: 'User 3', value: 3, avatar: "/images/male-2.jpg" },
]
const arrowIcons = [
  { text: 'default', icon: $icon.arrowDown, value: 1 },
  { text: 'menu-down-outline', icon: $icon.menuDownOutline, value: 2 },
  { text: 'menu-down', icon: $icon.menuDown, value: 3 },
]
const textFieldProperty = ref({
  outlined: false, readOnly: false, disabled: false, retainColor: false, label: 'label',
  prepenIcon: { text: 'calendar', icon: $icon.calendar, value: 1 },
  appendIcon: { text: 'calendar', icon: $icon.calendar, value: 1 },
  arrowDown: { text: 'default', icon: $icon.arrowDown, value: 1 },
  multiple: false, closableChip: true, loading: false,
  depressed: false, block: false, rounded: false, color: 'primary', state: textFieldState.default, clearable: false
})
const required = (value: string) => !!value || 'Field is required'
const colors = ['primary', 'secondary', 'salmon', 'carnation']
const rulesTemplate = `<e-select 
  v-model="rulesFieldModel"
  :items="['item-1','item-2','item-3']"
  :rules="[required]"
  label="Option"
  clearable
/>`
// :arrow-down="textFieldProperty.arrowDown?.icon"
const rulesTs = `const required = (value: string) => !!value || 'Field is required'`
const iconsTemplateCode = computed(() => `<template>
<e-select 
    v-mdodel="model"
    label="label"
    :items="['item-1','item-2','item-3']" ${textFieldProperty.value.prepenIcon ?
    '\n    prepend-icon="' + textFieldProperty.value.prepenIcon.text + '"' : ''}${textFieldProperty.value.appendIcon ?
      '\n    append-icon="' + textFieldProperty.value.appendIcon.text + '"' : ''}${textFieldProperty.value.arrowDown.value !== 1 ? '\n    arrow-down="' + textFieldProperty.value.arrowDown.text + '"' : ''}/>  
</template>`)

const chipFieldModelTemplate = `<e-select 
  v-model="chipFieldModel" 
  chip 
  label="chip"
  :items="['item-1', 'item-2', 'item-3']" 
/>
<e-select 
  v-model="chipFieldModelMultiple" 
  chip 
  label="chip multiple"
  multiple
  :items="['item-1', 'item-2', 'item-3']" 
/>`
const HTMLCode = computed(() => `<template>
  <e-select 
    v-model="example"
    :items="['item-1','item-2','item-3']"
    label="select"
    color="${textFieldProperty.value.color}"${textFieldProperty.value.clearable ?
    '\n    clearable' : ''}${textFieldProperty.value.state === textFieldState.readonly ? '\n    read-only' : ''}${textFieldProperty.value.rounded ?
      '\n    rounded' : ''}${textFieldProperty.value.state === textFieldState.disabled ? '\n    disabled' : ''}${textFieldProperty.value.retainColor ?
        '\n    retain-color' : ''}${textFieldProperty.value.outlined ? '\n    outlined' : ''}
  />
</template>
`)
const chipFieldMultipleWithAvatarTs = computed(() => `const chipFieldModelMultipleWithAvatar = ref([1])
const availableUsers = [
  { text: 'User 1', value: 1, avatar: "/images/female-1.jpg" },
  { text: 'User 2', value: 2, avatar: "/images/male-1.jpg" },
  { text: 'User 3', value: 3, avatar: "/images/male-2.jpg" },
]
`)
const autocompleteTemplate = `<template>
  <ESelect  v-model="autocompleteModel" 
            v-model:search="autocompleteSearch"
            clearable
            autocomplete
            label="Buscar"
            chip
            :items="filteredItems"
  />
</template>`
const autocompleteTs = `const autocompleteSearch = ref('')
const autocompleteModel = ref('')
const stringItems = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6']
const filteredItems = ref([...stringItems])

watch(autocompleteSearch, (value: string) => {
  if (value) {
    if (autocompleteTimer.value) clearTimeout(autocompleteTimer.value)
    autocompleteTimer.value = window?.setTimeout(() => {
      filteredItems.value = stringItems.filter(
        (text) => text.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
      )
    }, 100)
  } else {
    filteredItems.value = [...stringItems]
  }
})`
const chipFieldMultipleWithAvatarTemplate = computed(() => `<template>
  <ESelect  v-model="chipFieldModelMultipleWithAvatar"
            label="select"
            chip
            multiple
            :items="availableUsers"
            detail="select one or more users from the list">
        <template #selection="{ selection, attrs }">
          <EChip  v-bind="attrs" 
                  :prepend-avatar="selection?.avatar"
                  :avatar-size="32" ${textFieldProperty.value.closableChip ?
    '\n                  closable' : ''}>
              {{ selection?.text }}
          </EChip>
        </template>
        <template #item="{ attrs, item }">
          <e-list-item v-bind="attrs"
                       :prepend-avatar="item.avatar">
                    {{ item.text }}
          </e-list-item>
        </template>
    </ESelect>
</template>
`)

</script>
