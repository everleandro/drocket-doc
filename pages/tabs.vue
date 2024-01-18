<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Tabs
      </h1>
      <p>
        The tabs component shows a list of tabs useful for showing different content hidden behind each tab.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :github="githubRepo.tab">
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="tabProperty.color" cols="24" :items="colors" :color="tabProperty.color" label="color" />
            <ESelect v-model="tabProperty.inactiveColor" cols="24" :items="colors" :color="tabProperty.color"
              label="inactive-color" />
            <ECheckbox v-model="tabProperty.grow" cols="24" label="grow" />
          </EForm>
        </template>

        <template #window-item>
          <e-window-item value="design">
            <div class="full-height pa-4">
              <e-tab-group v-model="tabProperty.model" :color="tabProperty.color"
                :inactive-color="tabProperty.inactiveColor" :grow="tabProperty.grow">
                <e-tab v-for="i in 3" :key="i" :value="i"> Option {{ i }} </e-tab>
              </e-tab-group>
              <EWindow v-model="tabProperty.model">
                <e-window-item v-for="i in 3" :key="i" :value="i">
                  <div class="pa-4">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae possimus et cumque
                      eveniet nihil qui ab nesciunt eaque sapiente error, laboriosam, veniam temporibus, at quas
                      consequatur quae minima harum!</p>
                  </div>
                </e-window-item>
              </EWindow>
            </div>
          </e-window-item>
          <e-window-item value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </e-window-item>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Stacked Buttons</h2>
      <p>You can use <code class="green--text mx-2">e-tab-group</code> with the same properties as the <code
          class="green--text mx-2">e-button</code></p>
      <BoxExample>
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>
        <template #window-item>
          <e-window-item value="design">
            <div class="full-height pa-4">
              <e-tab-group v-model="stackedExampleModel">
                <e-tab :value="1" :prepend-icon="$icon.heart" stacked> Favorites</e-tab>
                <e-tab :value="2" :prepend-icon="$icon.history" stacked> Recents</e-tab>
                <e-tab :value="3" :prepend-icon="$icon.accountBox" stacked> Contacts</e-tab>
                <e-tab :value="4" :prepend-icon="$icon.dialpad" stacked> Keypad</e-tab>
              </e-tab-group>
              <EWindow v-model="stackedExampleModel">
                <e-window-item v-for="i in 4" :key="i" :value="i">
                  <div class="pa-4">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae possimus et cumque
                      eveniet nihil qui ab nesciunt eaque sapiente error, laboriosam, veniam temporibus, at quas
                      consequatur quae minima harum!</p>
                  </div>
                </e-window-item>
              </EWindow>
            </div>
          </e-window-item>
          <e-window-item value="Template">
            <div v-text="IconExampleHTML" v-prism class="full-height"></div>
          </e-window-item>
        </template>
      </BoxExample>
    </section>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Alignment</h2>
      <p>By using the vertical property we can change the orientation of the tabs</p>
      <BoxExample>
        <template #tabs>
          <e-tab value="design"> Design </e-tab>
          <e-tab value="Template"> Template </e-tab>
        </template>
        <template #window-item>
          <e-window-item value="design">
            <div class="full-height d-flex pa-4">
              <e-tab-group v-model="algimentExampleModel" vertical>
                <e-tab v-for="i in 3" :key="i" :value="i">Option {{ i }}</e-tab>
              </e-tab-group>
              <e-window v-model="algimentExampleModel">
                <e-window-item v-for="i in 3" :key="i" :value="i">
                  <div class="pa-4">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae possimus et cumque
                      eveniet nihil qui ab nesciunt eaque sapiente error, laboriosam, veniam temporibus, at quas
                      consequatur quae minima harum!</p>
                  </div>
                </e-window-item>
              </e-window>
            </div>
          </e-window-item>
          <e-window-item value="Template">
            <div v-text="algimentExample" v-prism class="full-height"></div>
          </e-window-item>
        </template>
      </BoxExample>
    </section>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Props</h2>
      <p>Explore the available props for the form component <code
          class="green--text mx-2"><span class="title">e-tab-group</span></code></p>
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
            <tr v-for="( item, i ) in  tabGroupApiReference" :key="i">
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
      <h2 class="text-h4 mb-2">Props</h2>
      <p>The <code class="green--text mx-2"><span class="title">e-tab</span></code> component inherits the same properties
        of the <e-button color="primary" text to="/buttons" target="_blank"
          :append-icon="$icon.externalLink">e-button</e-button> component</p>
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
            <tr v-for="( item, i ) in  tabsApiReference" :key="i">
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
import tabsApiReference from '@/api-reference/tab.json'
import tabGroupApiReference from '@/api-reference/tab-group.json'
const stackedExampleModel = ref(1);
const algimentExampleModel = ref(1);
const tabProperty = reactive({
  grow: false,
  color: 'primary',
  inactiveColor: 'secondary',
  model: 1,
})
const colors = ['primary', 'secondary', 'salmon', 'carnation']

const HTMLCode = computed(() => `<template>
  <div>
    <e-tab-group\n    v-model="model" ${tabProperty.color ? `\n    color="${tabProperty.color}"` : ''}${tabProperty.inactiveColor ?
    `\n    inactive-color="${tabProperty.inactiveColor}"` : ''}${tabProperty.grow ? `\n    grow` : ''}>
      <e-tab v-for="i in 3" :key="i" :value="i"> Option {{ i }} </e-tab>
    </e-tab-group>
    <e-window v-model="model">
      <e-window-item v-for="i in 3" :key="i" :value="i">
        <div class="pa-4">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae possimus et cumque
            eveniet nihil qui ab nesciunt eaque sapiente error, laboriosam, veniam temporibus, at quas
            consequatur quae minima harum!</p>
        </div>
      </e-window-item>
    </e-window>
  </div>
</template>`)
const IconExampleHTML = `<div class="full-height pa-4">
  <e-tab-group v-model="example">
    <e-tab :value="1" prepend-icon="heart" stacked> Favorites</e-tab>
    <e-tab :value="2" prepend-icon="history" stacked> Recents</e-tab>
    <e-tab :value="3" prepend-icon="accountBox" stacked> Contacts</e-tab>
    <e-tab :value="4" prepend-icon="dialpad" stacked> Keypad</e-tab>
  </e-tab-group>
  <EWindow v-model="example">
    <e-window-item v-for="i in 4" :key="i" :value="i">
      <div class="pa-4">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae possimus et cumque
          eveniet nihil qui ab nesciunt eaque sapiente error, laboriosam, veniam temporibus, at quas
          consequatur quae minima harum!</p>
      </div>
    </e-window-item>
  </EWindow>
</div>`
const algimentExample = `<div class="full-height d-flex pa-4">
  <e-tab-group v-model="example" vertical>
    <e-tab v-for="i in 3" :key="i" :value="i">Option {{ i }}</e-tab>
  </e-tab-group>
  <e-window v-model="example">
    <e-window-item v-for="i in 3" :key="i" :value="i">
      <div class="pa-4">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae possimus et cumque
          eveniet nihil qui ab nesciunt eaque sapiente error, laboriosam, veniam temporibus, at quas
          consequatur quae minima harum!</p>
      </div>
    </e-window-item>
  </e-window>
</div>`
</script>
<style lang="scss">
.menu-page {
  .e-menu {
    width: 100%;
  }
}
</style>