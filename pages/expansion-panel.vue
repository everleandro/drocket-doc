<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Expansion Panel
      </h1>
      <p>
        The Expansion Panel component is a container that can be expanded to reveal content. It is useful for reducing
        vertical space with large amounts of information.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :github="githubRepo.expansionPanel" :color="expansionProperty.color">
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="expansionProperty.color" cols="24" :items="colors" :color="expansionProperty.color"
              label="color" />
            <ETextfield v-model="expansionProperty.title" cols="24" label="header-title"
              :color="expansionProperty.color" />
            <ECheckbox v-model="expansionProperty.model" cols="24" :label="'v-model: ' + expansionProperty.model"
              :color="expansionProperty.color" />
          </EForm>
        </template>

        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4">

              <e-expansion v-model="expansionProperty.model" :color="expansionProperty.color"
                :header-title="expansionProperty.title">
                <div class="ma-4 secondary--text"><code> content </code></div>
              </e-expansion>

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
      <p>Multiple panels</p>
      <BoxExample>
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>

        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4">
              <e-expansion-panel>
                <e-expansion v-for="i in 5 " color="primary" :header-title="'option: ' + i">
                  <div class="ma-4 secondary--text"><code> content {{ i }} </code></div>
                </e-expansion>
              </e-expansion-panel>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="MultiplePanelsHTMLCode" v-prism class="full-height"></div>
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
            <tr v-for="( item, i ) in  expansionApiReference " :key="i">
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
import { default as githubRepo } from '@/external-links/github'
import expansionApiReference from '@/api-reference/expansion-panel.json'
const colors = ['primary', 'secondary', 'salmon', 'carnation']

const expansionProperty = reactive({
  title: 'header title',
  color: 'primary',
  model: false
})

const slots = [
  {
    title: "header",
    description: "The header slot is used to customize the header of the expansion panel."
  },
  {
    title: "default",
    description: `The default Vue slot.`
  },
]

const HTMLCode = `<e-expansion 
    v-model="expansionProperty.model" 
    color="${expansionProperty.color}"
    header-title="${expansionProperty.title}"
  >
    <div class="ma-4 secondary--text">
      <code> content </code>
    </div>
</e-expansion>`
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
.e-expansion {
  width: 100%;

  &-panels {
    width: 100%;
  }
}
</style>