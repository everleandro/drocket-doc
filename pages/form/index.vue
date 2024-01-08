<template>
  <div class="date-picker-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Forms
      </h1>
      <p>
        Drocket implements a rules-based validation system making development easier
      </p>
    </div>
    <section class="mb-12">
      <p>
        The component facilitates the management of the states of each of the input fields it contains and also provides a
        Grid system to control the columns that each field will occupy.
      </p>

      <BoxExample :color="color">
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
            <div class="d-flex justify-center align-center pa-4">
              <EForm ref="form" v-model="fields.formModel" :no-gutters="formProperty.noGutters" label-min-width="79"
                :outlined="formProperty.outlined" :disabled="formProperty.state === formState.disabled" :color="color"
                :readonly="formProperty.state === formState.readonly" :retain-color="formProperty.retainColor"
                @submit="validate">
                <ETextfield v-model="fields.name" label="First Name" lg="12" />
                <ETextfield v-model="fields.lastName" label="Last name" lg="12" />
                <ETextfield v-model="fields.address" cols="24" label="Address" :rules="[required]" />

                <EFormColumn cols="24" class="mt-4">
                  <ESpacer />
                  <EButton color="secondary" width="110" @click="reset">RESET</EButton>
                  <EButton :color="color" width="110" type="submit">VALIDATE</EButton>
                </EFormColumn>
              </EForm>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism></div>
          </EWindowItem>
          <EWindowItem value="Ts">
            <div v-text="TSCode" v-prism="{ class: 'language-javascript' }"></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" label="color" />
            <ECheckbox v-model="formProperty.outlined" cols="24" label="outlined" :color="color" />
            <ECheckbox v-model="formProperty.noGutters" cols="24" label="no-gutters" :color="color" />
            <ECheckbox v-model="formProperty.retainColor" cols="24" label="retain-color" :color="color" />
            <e-radio-group v-model="formProperty.state" :color="color">
              <e-radio :model-value="formState.default" label="default"></e-radio>
              <e-radio :model-value="formState.readonly" label="readonly"></e-radio>
              <e-radio :model-value="formState.disabled" label="disabled"></e-radio>
            </e-radio-group>
          </EForm>
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
              <td>model-value</td>
              <td> The v-model value of the component. Is true only if each of the input field validations are true</td>
              <td class="string">boolean</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>noGutters</td>
              <td>Set to 0 the padding between your columns</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>outlined</td>
              <td>modify the <code class="string">outlined</code> property for each field component inside the form</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>set the component in disabled mode</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td> set the component in read only mode</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>retain-color</td>
              <td>modify the <code class="string">retain-color</code> property for each field component inside the form
              </td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>label-min-width</td>
              <td>Provide a minimum size in pixels for the width of each label inside the component</td>
              <td class="string">number | string</td>
              <td class="string">undefined</td>
            </tr>
            <tr>
              <td>color</td>
              <td>Applies specified color to the component - supports only utility colors (for example <code
                  class="boolean">primary</code>
                or <code class="boolean">secondary</code>)
              </td>
              <td class="string">string</td>
              <td class="string">undefined</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Events</h2>
      <div class="responsive-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>update:modelValue</td>
              <td>Event emitted when the form’s validity changes.</td>
              <td class="string">boolean</td>
            </tr>
            <tr>
              <td>submit</td>
              <td>The submit event fires when a <code class="string">form</code> is submitted.</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>

import type { Form } from "drocket";

const color = ref('primary')

const form = ref<Form>()
const fields = ref({
  formModel: true,
  address: "",
  name: "",
  lastName: "",
})
enum formState { readonly, disabled, default }
const formProperty = ref({
  outlined: false, noGutters: false, disabled: false, retainColor: false, labelMinWidth: 40, readonly: false, state: formState.default
})
const colors = ['primary', 'secondary', 'salmon', 'carnation']
const validate = () => {
  form.value?.validate();
}
const reset = () => {
  form.value?.reset();
}
const required = (val: string | number) => {
  return !!val || val === 0 || "field required";
}

const HTMLCode = computed(() => `<template>
  <EForm ref="form"
      :color="${color.value}"${formProperty.value.noGutters ? '\n      no-gutters' : ''}${formProperty.value.outlined ?
    '\n      outlined' : ''}${formProperty.value.state === formState.disabled ? '\n      disabled' : ''}${formProperty.value.state === formState.readonly ?
      '\n      readonly' : ''}${formProperty.value.retainColor ? '\n      retain-color' : ''} 
      @submit="validate">
    <e-textfield 
        v-model="fields.name" 
        label="First Name" 
        lg="12"
    />
    <e-textfield
        v-model="fields.lastName"
        label="Last Name"
        lg="12"
    />
    <e-textfield 
        v-model="fields.address"
        cols="24"
        label="Address"
        :rules="[required]"
    />
    <EFormColumn>
      <ESpacer />
      <EButton
          color="secondary"
          @click="reset"> Reset 
      </EButton>
      <EButton 
          :color="color" 
          type="submit"
          @click="validate"> Validate 
      </EButton>
    </EFormColumn>
  </EForm>
</template>
`)

const TSCode = `import { Form } from "drocket";
const form = ref<Form>()
const validate = () => {
  form.value?.validate();
}
const reset = () => {
  form.value?.reset();
}
const required = (val: string | number) => {
return !!val || "field required";
}`

</script>
