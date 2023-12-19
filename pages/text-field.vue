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
      <h2 class="text-h4 mb-2">Example</h2>
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
              <e-text-field v-model="exampleModel" :outlined="textFieldProperty.outlined"
                :retain-color="textFieldProperty.retainColor" :color="textFieldProperty.color"
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
            <e-radio-group v-model="textFieldProperty.state" :color="textFieldProperty.color">
              <e-radio :model-value="textFieldState.default" label="default"></e-radio>
              <e-radio :model-value="textFieldState.readonly" label="readonly"></e-radio>
              <e-radio :model-value="textFieldState.disabled" label="disabled"></e-radio>
            </e-radio-group>
          </EForm>
        </template>
      </BoxExample>
    </section>

  </div>
</template>
<script lang="ts" setup>

const exampleModel = ref('')
enum textFieldState { disabled, readonly, default }

const textFieldProperty = ref({
  outlined: false, readOnly: false, disabled: false, retainColor: false,
  depressed: false, block: false, rounded: false, color: 'primary', state: textFieldState.default
})
const colors = ['primary', 'secondary', 'salmon', 'carnation']


const HTMLCode = computed(() => `<template>
  <e-text-field \n    v-model="example" \n    color="${textFieldProperty.value.color}"${textFieldProperty.value.depressed ?
    '\n    depressed' : ''}${textFieldProperty.value.state === textFieldState.readonly ? '\n    read-only' : ''}${textFieldProperty.value.rounded ?
      '\n    rounded' : ''}${textFieldProperty.value.state === textFieldState.disabled ? '\n    disabled' : ''}${textFieldProperty.value.retainColor ?
        '\n    retain-color' : ''}${textFieldProperty.value.outlined ? '\n    outlined' : ''}${textFieldProperty.value.block ? '\n    block' : ''}
  />
</template>
`)

</script>
