<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Menu
      </h1>
      <p>
        The menu component shows a menu with a list of options.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :github="githubRepo.menu">
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="menuProperty.origin" cols="24" :items="originOptions" label="origin" clearable
              placehodler="default" />
            <ESelect v-model="menuProperty.transition" cols="24" :items="transitionOptions" label="origin" clearable
              placeholder="default" />
            <ECheckbox v-model="menuProperty.closeOnContentClick" cols="24" label="close-on-content-click" />
            <ECheckbox v-model="menuProperty.fullWidth" cols="24" label="full-width" />
            <ECheckbox v-model="menuProperty.disableMenu" cols="24" label="disable-menu" />
          </EForm>
        </template>

        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4">
              <EMenu v-model="menuProperty.model" :origin="menuProperty.origin" :open-on-hover="menuProperty.openOnHover"
                :disable-menu="menuProperty.disableMenu" :full-width="menuProperty.fullWidth"
                :close-on-content-click="menuProperty.closeOnContentClick" :transition="menuProperty.transition">
                <template #activator="attrs">
                  <e-button v-bind="attrs" color="primary" width="150">
                    menu
                  </e-button>
                </template>
                <e-list color="primary" class="white">
                  <e-list-item>Option 1</e-list-item>
                  <e-list-item>Option 2</e-list-item>
                  <e-list-item>Option 3</e-list-item>
                </e-list>
              </EMenu>

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
            <tr v-for="( item, i ) in  menuApiReference " :key="i">
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

          <div v-if="int.code" v-text="int.code" v-prism="{ class: 'language-json' }"></div>
          <div v-else v-text="int.description" class="pa-4 secondary--text"></div>

        </e-expansion>
      </e-expansion-panel>
    </section>

  </div>
</template>
<script lang="ts" setup>
import { default as githubRepo } from '@/external-links/github'
import menuApiReference from '@/api-reference/menu.json'

const menuProperty = reactive({
  closeOnContentClick: false,
  fullWidth: false,
  disableMenu: false,
  openOnHover: false,
  model: false,
  transition: 'fade',
  origin: 'bottom right',
})
const slots = [
  {
    title: "activator",
    code: `{
  "attrs": "ElementAttrs", // /The activator slot is used to customize the activator button.
}`,
  },
  {
    title: "default",
    description: `The default Vue slot.`
  },
]
const originOptions = ['top left', 'top right', 'bottom left', 'bottom right']
const transitionOptions = ['fade', 'scale']

const HTMLCode = computed(() => `<e-menu ${menuProperty.origin ? `\n    origin="${menuProperty.origin}"` : ''}${menuProperty.disableMenu ?
  `\n    disable-menu` : ''}${menuProperty.fullWidth ? `\n    full-width` : ''}${menuProperty.closeOnContentClick ?
    `\n    close-on-content-click` : ''}${menuProperty.transition ? `\n    transition="${menuProperty.transition}"` : ''}>
  <template #activator="attrs">
    <e-button v-bind="attrs" color="primary" width="150">
      menu
    </e-button>
  </template>
  <e-list color="primary" class="white">
    <e-list-item>Option 1</e-list-item>
    <e-list-item>Option 2</e-list-item>
    <e-list-item>Option 3</e-list-item>
  </e-list>
</e-menu>`)
const MultiplePanelsHTMLCode = `<e-expansion-panel>
  <e-expansion v-for="i in 5 " 
               color="primary"
               :header-title="'option: ' + i">
    <div class="ma-4 secondary--text">
      <code> content {{ i }} </code>
    </div>
  </e-expansion>`
</script>
<style lang="scss">
.menu-page {
  .e-menu {
    width: 100%;
  }
}
</style>