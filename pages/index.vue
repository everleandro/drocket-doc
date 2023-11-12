<template>
  <div>
    <div class="markdown-body css-1gvtuo9">
      <h1 class="my-4">Date Pickers - Getting Started</h1>
      <p class="description mb-7">Get started with the Date Pickers. Install the package, configure your
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
            <ECard>
              <EDatePicker v-model="example" :landscape="landscape" :no-title="noTitle" :color="color"
                :icon-prev="iconPrev" :icon-next="iconNext" />
            </ECard>
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
          <ECheckbox v-model="landscape" label="landscape" :color="color" />
          <ECheckbox v-model="noTitle" label="noTitle" :color="color" />
          <ESelect v-model="color" :items="colors" :color="color" label="color" />
          <ESelect v-model="iconPrev" label="icon-prev" :items="icons" :color="color">
            <template #item="{ attrs, item }">
              <e-list-item v-bind="attrs" :prepend-icon="item">
                {{ item }}
              </e-list-item>
            </template>
          </ESelect>
          <ESelect v-model="iconNext" label="icon-next" :items="icons" :color="color">
            <template #item="{ attrs, item }">
              <e-list-item v-bind="attrs" :prepend-icon="item">
                {{ item }}
              </e-list-item>
            </template>
          </ESelect>
        </EForm>
      </template>
    </BoxExample>
  </div>
</template>
<script lang="ts" setup>

import { BoxCode as BC } from "@/components/app/box-code/index.vue";

const installCode: Record<string, BC> = {
  npm: { code: 'npm install @drocket/d-date-picker', language: 'language-ts' },
  pnpm: { code: 'pnpm add @drocket/d-date-picker', language: 'language-ts' },
  yarn: { code: 'yarn add @drocket/d-date-picker', language: 'language-ts' }
}
const example = ref();
const landscape = ref(false)
const noTitle = ref(false)
const color = ref('carnation')
const { $icon } = useNuxtApp()
const icons = [$icon.pickerIconPrev, $icon.phone, $icon.logout]
const iconNext = ref($icon.pickerIconNext)
const iconPrev = ref($icon.pickerIconPrev)
const colors = ['primary', 'secondary', 'salmon', 'carnation']

const HTMLCode = computed(() => `<template>
  <e-date-picker 
      v-model="example" ${landscape.value ? '\n    landscape' : ''} ${noTitle.value ? '\n    no-title' : ''}    
      color="${color.value}" 
      icon-prev="${iconNext.value}" 
      icon-next="${iconPrev.value}" 
  />
</template>
`)
const TSCode = `
  import { DatePicker } from '@drocket/d-date-picker';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
  });
`

</script>
