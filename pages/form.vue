<template>
  <div>
    <div class="markdown-body css-1gvtuo9">
      <h1 class="my-4">Form - Getting Started</h1>
      <p class="description mb-7">Get started with the Form Component. Install the package, configure your
        application
        and start using the component.</p>

      <h2 id="installation">Installation</h2>
      <p class="mb-4">Using your favorite package manager, install:</p>
    </div>
    <boxCode :code="installCode">
    </boxCode>
    <h2>Usage</h2>
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
          <div class="d-flex justify-center pa-4">
            <EDialog v-model="dialogBirthDate" maxWidth="290">
              <EDatePicker v-model="fields.birthDate" close-on-change :color="color" />
            </EDialog>
            <EForm ref="form" v-model="fields.formModel" :no-gutters="formProperty.noGutters" label-min-width="79"
              :outlined="formProperty.outlined" :disabled="formProperty.disabled" :color="color">
              <e-text-field v-model="fields.name" label="First Name" lg="12" md="16" :rules="[required]"></e-text-field>
              <e-text-field :model-value="birthDateFormatted" inputAlign="right" label="Birth Date"
                placeholder="mm/dd/yyyy" md="12" @click="dialogBirthDate = true" />
              <e-text-field v-model="fields.surname" label="Last Name" md="12" lg="12"></e-text-field>
              <e-text-field v-model="fields.dni" md="12" lg="12" prepend-icon="phone" placeholder="+00 0000 0000"
                inputAlign="right"></e-text-field>
              <e-text-field v-model="fields.address" md="12" lg="18" label="Address"></e-text-field>
              <e-text-field v-model="fields.pc" md="12" lg="6" label="Z.C." inputAlign="right" limit="4"
                placeholder="0000"></e-text-field>
              <EFormColumn>
                <ESpacer />
                <div class="mt-4">
                  <EButton color="secondary" @click="reset">RESET</EButton>
                  <EButton :color="color" @click="validate">VALIDATE</EButton>
                </div>
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
          <ECheckbox v-model="formProperty.noGutters" cols="24" label="noGutters" :color="color" />
          <ECheckbox v-model="formProperty.outlined" cols="24" label="outlined" :color="color" />
          <ECheckbox v-model="formProperty.disabled" cols="24" label="disabled" :color="color" />
        </EForm>
      </template>
    </BoxExample>
  </div>
</template>
<script lang="ts" setup>

import { BoxCode as BC } from "@/components/app/box-code/index.vue";
import { Form } from "@/components/shared/form/types";

const installCode: Record<string, BC> = {
  npm: { code: 'npm install @drocket/d-form', language: 'language-ts' },
  pnpm: { code: 'pnpm add @drocket/d-form', language: 'language-ts' },
  yarn: { code: 'yarn add @drocket/d-form', language: 'language-ts' }
}
import UtilDate from '@/models/date'

const color = ref('primary')
const dialogBirthDate = ref(false)

const form = ref<Form>()
const fields = ref({
  formModel: true,
  email: "",
  select: "",
  agree: false,
  birthDate: new Date(),
  address: "",
  name: "",
  dni: "",
  pc: "",
  phone: "",
  phone2: "",
  surname: "",
  secondName: "",
  gender: "M",
  acceptRules: false,
})
const birthDateFormatted = computed(() => new UtilDate(fields.value.birthDate).format('month-DD/month-MM/year-YYYY'))
const formProperty = ref({
  outlined: false, noGutters: false, disabled: false, retainColor: true, labelMinWidth: 40
})
const { $icon } = useNuxtApp()

const iconNext = ref($icon.pickerIconNext)
const iconPrev = ref($icon.pickerIconPrev)
const colors = ['primary', 'secondary', 'salmon', 'carnation']

const HTMLCode = computed(() => `<template>
  <EDialog v-model="dialogBirthDate" maxWidth="290">
    <EDatePicker v-model="fields.birthDate" close-on-change :color="color" />
  </EDialog>
  <EForm ref="form"${formProperty.value.noGutters ? ' no-gutters' : ''}${formProperty.value.outlined ? ' outlined' : ''}${formProperty.value.disabled ? ' disabled' : ''} :color="${color.value}">
      <e-text-field 
          v-model="name" 
          label="First Name" 
          lg="12" 
          :rules="[required]"
      />
      <e-text-field 
          :model-value="birthDateFormatted" 
          inputAlign="right" 
          label="Birth Date"
          placeholder="mm/dd/yyyy" 
          md="12" 
          @click="dialogBirthDate = true" 
      />
      <e-text-field 
          v-model="fields.surname" 
          label="Last Name" 
          lg="12"
      />
      <e-text-field 
          v-model="phone"lg="12"
          prepend-icon="phone" 
          placeholder="+00 0000 0000"
          inputAlign="right"
      />
      <e-text-field 
          v-model="fields.address"
          lg="18" 
          label="Address"
      />
      <e-text-field
          v-model="zp" 
          lg="6"
          label="Z.C."
          inputAlign="right" 
          limit="4"
          placeholder="0000"
      />
      <EFormColumn>
        <ESpacer />
        <div class="mt-4">
          <EButton color="secondary" @click="reset">RESET</EButton>
          <EButton :color="color" @click="validate">VALIDATE</EButton>
        </div>
      </EFormColumn>
  </EForm>
</template>
`)
const validate = () => {
  form.value?.validate();
}
const reset = () => {
  form.value?.reset();
}
const required = (val: string | number) => {
  return !!val || val === 0 || "field required";
}

const TSCode = `
  import { Form } from '@drocket/d-form';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
`

</script>
