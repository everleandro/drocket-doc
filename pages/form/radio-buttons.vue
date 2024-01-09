<template>
  <div class="button-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Radio buttons
      </h1>
      <p>
        Radio Input Component is a user interface element used for selecting a single option from a set of mutually
        exclusive choices. It presents a list of options, and users can choose one option at a time by clicking on a radio
        button associated with each choice.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :color="checkboxProperty.color" :github="githubRepo.radio">
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
                <e-radio-group v-model="exampleModel" :label="checkboxProperty.label"
                  :outlined="checkboxProperty.outlined" :retain-color="checkboxProperty.retainColor"
                  :row="checkboxProperty.row" :color="checkboxProperty.color"
                  :disabled="checkboxProperty.state === checkboxState.disabled"
                  :hide-overlay="checkboxProperty.hideOverlay" :flat="checkboxProperty.flat"
                  :readonly="checkboxProperty.state === checkboxState.readonly">
                  <e-radio :model-value="1" label="Option 1"></e-radio>
                  <e-radio :model-value="2" label="Option 2"></e-radio>
                  <e-radio :model-value="3" label="Option 3"></e-radio>
                </e-radio-group>
              </e-form>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="checkboxProperty.color" cols="24" :items="colors" :color="checkboxProperty.color"
              label="color" />
            <ECheckbox v-model="checkboxProperty.outlined" cols="24" label="outlined" :color="checkboxProperty.color" />
            <ECheckbox v-model="checkboxProperty.hideOverlay" cols="24" label="hide-overlay"
              :color="checkboxProperty.color" />
            <ECheckbox v-model="checkboxProperty.retainColor" cols="24" label="retain-color"
              :color="checkboxProperty.color" />
            <ECheckbox v-model="checkboxProperty.row" cols="24" label="row" :color="checkboxProperty.color" />
            <ECheckbox v-model="checkboxProperty.flat" cols="24" label="flat" :color="checkboxProperty.color" />
            <ETextfield v-model="checkboxProperty.label" cols="24" label="label" :color="checkboxProperty.color"
              clearable />
            <e-radio-group v-model="checkboxProperty.state" :color="checkboxProperty.color">
              <e-radio :model-value="checkboxState.default" label="default"></e-radio>
              <e-radio :model-value="checkboxState.readonly" label="readonly"></e-radio>
              <e-radio :model-value="checkboxState.disabled" label="disabled"></e-radio>
            </e-radio-group>
          </EForm>
        </template>
      </BoxExample>
    </section>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Props</h2>
      <p>Explore the available props for the form component</p>
      <h3 class="text-h3"><code class="green--text mx-2">e-radio-group</code></h3>
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
            <tr v-for="(item, i) in radioGroupApiReference" :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-h3"><code class="green--text mx-2">e-radio</code></h3>
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
            <tr v-for="(item, i) in radioApiReference" :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { default as githubRepo } from '@/external-links/github'
import radioGroupApiReference from '@/api-reference/radio-group.json'
import radioApiReference from '@/api-reference/radio.json'
const exampleModel = ref(1)

enum checkboxState { disabled, readonly, default }
const { $icon } = useNuxtApp()

const checkboxProperty = ref({
  outlined: false, readOnly: false, disabled: false, retainColor: false, label: 'label',
  prepenIcon: { text: 'calendar', icon: $icon.calendar, value: 1 }, row: false, flat: false,
  appendIcon: { text: 'calendar', icon: $icon.calendar, value: 1 }, hideOverlay: false,
  depressed: false, block: false, rounded: false, color: 'primary', state: checkboxState.default, clearable: false
})
const colors = ['primary', 'secondary', 'salmon', 'carnation']

const HTMLCode = computed(() => `<template>
  <e-radio-group \n    v-model="example" \n    label="${checkboxProperty.value.label}" \n    color="${checkboxProperty.value.color}"${checkboxProperty.value.clearable ?
    '\n    clearable' : ''}${checkboxProperty.value.state === checkboxState.readonly ? '\n    read-only' : ''}${checkboxProperty.value.rounded ?
      '\n    rounded' : ''}${checkboxProperty.value.state === checkboxState.disabled ? '\n    disabled' : ''}${checkboxProperty.value.outlined ? '\n    outlined' : ''}${checkboxProperty.value.retainColor ?
        '\n    retain-color' : ''}${checkboxProperty.value.hideOverlay ? '\n    hide-overlay' : ''}${checkboxProperty.value.flat ? '\n    flat' : ''}${checkboxProperty.value.row ? '\n    row' : ''}
  >
    <e-radio model-value="1" label="option 1"></e-radio>
    <e-radio model-value="2" label="option 2"></e-radio>
    <e-radio model-value="3" label="option 3"></e-radio>
  </e-radio-group>
</template>
`)

</script>
