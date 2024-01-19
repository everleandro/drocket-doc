<template>
  <div class="button-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Checkbox
      </h1>
      <p>
        The <code class="green--text mx-2 title">e-checkbox</code> component is a user interface element that allows users
        to toggle between two states, typically
        representing selection or deselection. It consists of a small box that can be checked (selected) or unchecked
        (deselected). The Checkbox component can be used to represent both single and multiple selections.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :color="checkboxProperty.color" :github="githubRepo.checkbox">
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
                <e-checkbox v-model="exampleModel" :label="checkboxProperty.label" :outlined="checkboxProperty.outlined"
                  :retain-color="checkboxProperty.retainColor" :color="checkboxProperty.color"
                  :disabled="checkboxProperty.state === checkboxState.disabled"
                  :hide-overlay="checkboxProperty.hideOverlay"
                  :readonly="checkboxProperty.state === checkboxState.readonly" />
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
            <ETextfield v-model="checkboxProperty.label" cols="24" label="label" :color="checkboxProperty.label" />
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
            <tr v-for="(item, i) in checkboxApiReference" :key="i">
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
import checkboxApiReference from '@/api-reference/checkbox.json'
import { default as githubRepo } from '@/external-links/github'
const exampleModel = ref(false)

enum checkboxState { disabled, readonly, default }
const { $icon } = useNuxtApp()

const checkboxProperty = ref({
  outlined: false, readOnly: false, disabled: false, retainColor: false, label: 'label',
  prepenIcon: { text: 'calendar', icon: $icon.calendar, value: 1 },
  appendIcon: { text: 'calendar', icon: $icon.calendar, value: 1 }, hideOverlay: false,
  depressed: false, block: false, rounded: false, color: 'primary', state: checkboxState.default, clearable: false
})
const colors = ['primary', 'secondary', 'salmon', 'carnation']

const HTMLCode = computed(() => `<template>
  <e-checkbox \n    v-model="example" \n    label="${checkboxProperty.value.label}" \n    color="${checkboxProperty.value.color}"${checkboxProperty.value.clearable ?
    '\n    clearable' : ''}${checkboxProperty.value.state === checkboxState.readonly ? '\n    read-only' : ''}${checkboxProperty.value.rounded ?
      '\n    rounded' : ''}${checkboxProperty.value.state === checkboxState.disabled ? '\n    disabled' : ''}${checkboxProperty.value.retainColor ?
        '\n    retain-color' : ''}${checkboxProperty.value.outlined ? '\n    outlined' : ''}${checkboxProperty.value.retainColor ?
          '\n    retain-color' : ''}${checkboxProperty.value.hideOverlay ? '\n    hide-overlay' : ''}
  />
</template>
`)

</script>
