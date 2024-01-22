<template>
  <div class="drawer-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Drawer
      </h1>
      <p title="drawer description">
        The <code class="green--text mx-2 title">e-drawer</code> component is a panel that slides in from the edge of the
        viewport, is designed to structure the page and it is recommended to use it as a direct child of the <code
          class="green--text mx-2 title">e-app</code> component.
      </p>
    </div>
    <section class="mb-12" style="height: 540px;">
      <iframe src="/iframe/drawer-example" frameborder="0" width="100%" height="100%"></iframe>
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
            <tr v-for="(item, i) in drawerApiReference" :key="i">
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
import drawerApiReference from '@/api-reference/drawer.json'
const slots = [
  {
    title: "append",
    description: "allows you to add custom content to the end of the drawer.",
  },
  {
    title: "prepend",
    description: "allows you to add custom content to the start of the drawer.",
  },
  {
    title: "default",
    description: `The default Vue slot.`
  },
]

</script>