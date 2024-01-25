<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Structure
      </h1>
      <p>
        The structure of a web page is the way in which the elements that make it up are organized. The layout and
        presentation of the elements and content is essential for a good interaction with visitors. We propose the
        following structure for your website, this way you can integrate each of the components into your layout and
        ensure that they work correctly
      </p>
    </div>
    <section class="mb-12">
      <div v-prism>{{ HTML }}</div>
    </section>


  </div>
</template>
<script lang="ts" setup>
const HTML = `<template>
  <e-app>
    <e-bar app>
      <!-- here goes the content of the bar, logo, title, etc. -->
    </e-bar>
    <e-drawer v-model="drawerModel" nav>
      <!-- here goes the content of the drawer, links, menus, etc. -->
    </e-drawer>

    <e-main>
      <e-container >
        <router-view>
          <!-- here goes the content of the page -->  
        </router-view>
      </e-container>
    </e-main>
  </e-app>
</template>
`
</script>