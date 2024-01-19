<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Lists
      </h1>
      <p>
        the <code class="green--text mx-2 title">e-list</code> component is a customizable list component that can have
        its color, elevation, and items customized through props. The list items can have icons, avatars, titles,
        subtitles, and values.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :github="githubRepo.list">
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="listProperty.color" cols="24" :items="colors" :color="listProperty.color" label="color" />
            <ECheckbox v-model="listProperty.multiple" cols="24" label="multiple-selection" :color="listProperty.color" />
            <ECheckbox v-model="listProperty.elevated" cols="24" label="elevated" :color="listProperty.color" />
            <ECheckbox v-model="listProperty.appendIcon" cols="24" label="append-icon" :color="listProperty.color" />
            <e-radio-group v-model="listProperty.state" :color="listProperty.color">
              <e-radio :model-value="listState.showAvatar" label="prepend-avatar"></e-radio>
              <e-radio :model-value="listState.showIcon" label="prepend-icon"></e-radio>
              <e-radio :model-value="listState.default" label="default"></e-radio>
            </e-radio-group>
          </EForm>
        </template>

        <template #window-item>
          <e-window-item value="design">
            <div class="full-height pa-4">
              <div class="secondary pa-3 white--text mb-3" style="min-height: 43px;">model-value: {{ listModel }}</div>
              <e-list v-model="listModel" :color="listProperty.color" :elevated="listProperty.elevated">
                <e-list-item v-for="i in 4"
                  :prepend-icon="listProperty.state === listState.showIcon ? $icon.account : null"
                  :append-icon="listProperty.appendIcon ? $icon.trash : null"
                  :prepend-avatar="listProperty.state === listState.showAvatar ? '/images/male-1.jpg' : null" :key="i"
                  :title="'Item' + i" subtitle="list example subtitle" :value="i" />
              </e-list>
            </div>
          </e-window-item>
          <e-window-item value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </e-window-item>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Sub group</h2>
      <p>By combining the <code class="green--text mx-2 title">e-list</code> and the <code
          class="green--text mx-2 title">e-list-group</code> components you can create interactive menus</p>
      <BoxExample>
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
            <div class="d-flex align-center justify-center full-height pa-4">
              <e-list v-model:group="groupExampleGroupModel" elevated color="primary" style="min-width: 300px;">
                <e-list-item :prepend-icon="$icon.cog">Setting</e-list-item>
                <e-list-group :value="1">
                  <template #activator="{ attrs }">
                    <e-list-item v-bind="attrs" :prepend-icon="$icon.account" :value="2">Users</e-list-item>
                  </template>
                  <e-list-item :value="3">admin</e-list-item>
                  <e-list-item :value="4">guest</e-list-item>
                </e-list-group>
              </e-list>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="GroupHTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>

    <section>
      <h3 class="text-h3"><code class="green--text mx-2">e-list</code></h3>
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
            <tr v-for="(item, i) in listApiReference" :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 class="text-h3"><code class="green--text mx-2">e-list-group</code></h3>
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
            <tr v-for="(item, i) in listGroupApiReference" :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 class="text-h3"><code class="green--text mx-2">e-list-item</code></h3>
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
            <tr v-for="(item, i) in listItemApiReference" :key="i">
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
import listApiReference from '@/api-reference/list.json'
import listGroupApiReference from '@/api-reference/list-group.json'
import listItemApiReference from '@/api-reference/list-item.json'
const listModel = ref<number[] | number | null>(1);
const groupExampleGroupModel = ref();
const groupExampleModel = ref();
enum listState { showAvatar, showIcon, default }
const listProperty = reactive({
  multiple: false,
  appendIcon: false,
  elevated: false,
  state: listState.default,
  color: 'primary',
  inactiveColor: 'secondary',
  model: 1,
})
const colors = ['primary', 'secondary', 'salmon', 'carnation']

watch(() => listProperty.multiple, (value: boolean) => {
  if (value) {
    listModel.value = []
  } else {
    listModel.value = null
  }
})

const HTMLCode = computed(() => `<template>
  <e-list \n    v-model="example"${listProperty.color ? `\n    color="${listProperty.color}"` : ''}${listProperty.elevated ? `\n    elevated` : ''}>
    <e-list-item v-for="i in 4"\n                 :key="i"\n                 :title="'Item' + i"\n                 subtitle="list example subtitle"\n                 :value="i" ${listProperty.state === listState.showIcon ?
    `\n                 prepend-icon="account"` : ''}${listProperty.appendIcon ? `\n                 append-icon="trash"` : ''}${listProperty.state === listState.showAvatar ? `\n                 prepend-avatar="/images/male-1.jpg"` : ''}/>
  </e-list>
</template>`)
const GroupHTMLCode = `<e-list v-model:group="example" elevated color="primary">
  <e-list-item prepend-icon="cog">Setting</e-list-item>
  <e-list-group :value="1">
    <template #activator="{ attrs }">
      <e-list-item v-bind="attrs" prepend-icon="account" :value="2">Users</e-list-item>
    </template>
    <e-list-item :value="3">admin</e-list-item>
    <e-list-item :value="4">guest</e-list-item>
  </e-list-group>
</e-list>`
</script>
<style lang="scss">
.menu-page {
  .e-menu {
    width: 100%;
  }
}
</style>