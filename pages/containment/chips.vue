<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Chips
      </h1>
      <p>
        The <code class="green--text mx-2 title">e-chip</code> component allows you to show a list of items in a chip.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :github="githubRepo.chips" :color="chipProperty.color">
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="chipProperty.color" :color="chipProperty.color" cols="24" :items="colors" label="color" />
            <ECheckbox v-model="chipProperty.closable" :color="chipProperty.color" cols="24" label="closable" />
            <ECheckbox v-model="chipProperty.text" :color="chipProperty.color" cols="24" label="text" />
            <ESelect v-model="chipProperty.prependIcon" :color="chipProperty.color" cols="24" :items="icons" return-object
              label="prepend-icon" clearable>
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>
            <ESelect v-model="chipProperty.appendIcon" :color="chipProperty.color" cols="24" :items="icons" return-object
              label="append-icon" clearable>
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-avatar="item.avatar">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>
            <ESelect v-model="chipProperty.prependAvatar" :color="chipProperty.color" cols="24" :items="avatars"
              return-object label="prepend-avatar" clearable>
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>
            <ESelect v-model="chipProperty.appendAvatar" :color="chipProperty.color" cols="24" :items="avatars"
              return-object label="append-avatar" clearable>
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-avatar="item.avatar">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>
          </EForm>
        </template>

        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4">
              <e-chip :closable="chipProperty.closable" :color="chipProperty.color"
                :prepend-avatar="chipProperty.prependAvatar?.avatar" :append-avatar="chipProperty.appendAvatar?.avatar"
                :append-icon="chipProperty.appendIcon?.icon" :prepend-icon="chipProperty.prependIcon?.icon"
                :text="chipProperty.text">
                Chip
              </e-chip>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
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
            <tr v-for="( item, i ) in  chipApiReference" :key="i">
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
      <h2 class="text-h4 mb-2">Slots</h2>
      <p>Explore the available slots for the form component</p>
      <e-expansion-panel>
        <e-expansion v-for="( int, i ) in  slots " :key="i" :header-title="int.title" color="primary">
          <div v-text="int.description" class="pa-4 secondary--text"></div>
        </e-expansion>
      </e-expansion-panel>
    </section>

  </div>
</template>
<script lang="ts" setup>
import type { IconPath } from 'drocket'
import { default as githubRepo } from '@/external-links/github'
import chipApiReference from '@/api-reference/chip.json'
const colors = ['primary', 'secondary', 'salmon', 'carnation']
const { $icon } = useNuxtApp()

const chipProperty = reactive({
  color: 'primary',
  closable: false,
  text: false,
  prependAvatar: <Record<string, string> | undefined>undefined,
  appendAvatar: <Record<string, string> | undefined>undefined,
  prependIcon: <Record<string, string | IconPath> | undefined>undefined,
  appendIcon: <Record<string, string | IconPath> | undefined>undefined
})

const icons = [
  { text: 'alert', icon: $icon.alert, value: 1 },
  { text: 'wifi', icon: $icon.wifi, value: 2 },
  { text: 'email', icon: $icon.email, value: 3 },
]

const avatars = [
  { text: 'female', value: 1, avatar: "/images/female-1.jpg" },
  { text: 'male', value: 2, avatar: "/images/male-1.jpg" },
]
const slots = [
  {
    title: "append",
    description: "allows you to add custom content to the end of the chip.",
  },
  {
    title: "prepend",
    description: "allows you to add custom content to the start of the chip.",
  },
  {
    title: "default",
    description: `The default Vue slot.`
  },
]


const HTMLCode = computed(() => `<template>
  <e-chip ${chipProperty.closable ? `\n    closable` : ''}${chipProperty.color ?
    `\n    color="${chipProperty.color}"` : ''}${chipProperty.text ? `\n    text` : ''} ${chipProperty.prependAvatar ? `\n    prepend-avatar="${chipProperty.prependAvatar?.avatar}"` : ''}${chipProperty.appendAvatar ?
      `\n    append-avatar="${chipProperty.appendAvatar?.avatar}"` : ''}${chipProperty.appendIcon ? `\n    append-icon="${chipProperty.appendIcon?.text}"` : ''}${chipProperty.prependIcon ?
        `\n    prepend-icon="${chipProperty.prependIcon?.text}"` : ''}>
    Chip
  </e-chip>
</template>`)

</script>