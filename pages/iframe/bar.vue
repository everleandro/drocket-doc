<template>
  <div class="bar-example-iframe">
    <BoxExample class="bar-example__box" :github="githubRepo.bar">
      <template #tabs>
        <ETab value="design"> Design </ETab>
        <ETab value="Template"> Template </ETab>
      </template>

      <template #window-item>
        <EWindowItem value="design">
          <e-card class="design-container">
            <div class="full-height bar__box">
              <e-app>
                <e-bar app :dense="barProperty.dense" :outlined="barProperty.outlined" :fixed="barProperty.fixed"
                  :depressed="barProperty.depressed" :clipped="barProperty.clipped" :color="barProperty.color">
                  <e-button :icon="$icon.menu" text :color="barProperty.color === 'white' ? 'secondary' : 'white'"
                    @click="drawerModel = !drawerModel" /></e-bar>
                <e-drawer v-model="drawerModel" dev-mode nav>
                  <e-list>
                    <e-list-item :prepend-icon="$icon.home" value="1">Home</e-list-item>
                    <e-list-item :prepend-icon="$icon.accountBox" value="1">Profile</e-list-item>
                    <e-list-item :prepend-icon="$icon.cog" value="1">Setting</e-list-item>
                  </e-list>
                  <template #append>
                    <div class="pa-2">
                      <e-button color="purple" block small>Logout</e-button>
                    </div>
                  </template>
                </e-drawer>
                <e-main>
                  <e-container>
                    <EForm>
                      <ESelect v-model="barProperty.color" cols="24" :items="colors" label="color"
                        placehodler="default" />
                      <ECheckbox v-model="barProperty.dense" label="dense" />
                      <ECheckbox v-model="barProperty.outlined" label="outlined" />
                      <ECheckbox v-model="barProperty.fixed" label="fixed" />
                      <ECheckbox v-model="barProperty.depressed" label="depressed" />
                      <ECheckbox v-model="barProperty.clipped" label="clipped" />
                    </EForm>
                  </e-container>
                </e-main>
              </e-app>

            </div>
          </e-card>

        </EWindowItem>
        <EWindowItem value="Template">
          <div v-text="HTMLCode" v-prism class="full-height"></div>
        </EWindowItem>
      </template>
    </BoxExample>
  </div>
</template>
<script lang="ts" setup>
import { default as githubRepo } from '@/external-links/github'
const colors = ['primary', 'white', 'secondary', 'blue', 'warning', 'purple']
definePageMeta({
  layout: false,
});
const drawerModel = ref(false);
const barProperty = reactive({
  dense: false,
  outlined: false,
  fixed: false,
  depressed: false,
  clipped: false,
  color: 'primary',
})

const HTMLCode = computed(() => `<e-app>
  <e-bar app${barProperty.dense ? `\n         dense` : ''}${barProperty.outlined ?
    `\n         outlined` : ''}${barProperty.fixed ? `\n         fixed` : ''}${barProperty.depressed ?
      `\n         depressed` : ''}${barProperty.clipped ? `\n         clipped` : ''}${barProperty.color ? `\n         color="${barProperty.color}"` : ''}/>
  <e-drawer v-model="drawerModel" nav>
    drawer-content here
  </e-drawer>
  <e-main>
    <e-container> app-content here </e-container>
  </e-main>
</e-app>`)
</script>

<style lang="scss" scoped>
.e-card {
  overflow: hidden;
}

.bar-example-iframe {
  margin: 2px;
}

.e-app {
  min-height: auto;
  height: 440px;
  overflow: auto;
}

.e-drawer {
  transition-property: transform, visibility, width, padding;
}

.code-conmtainer,
.design-container {
  max-height: 440px;
}

.e-main {
  // height: 400px;
  // overflow: auto;

  height: 600px;

}

.bar-example__box {
  .bar__box {
    width: 100%;
    position: relative;
    transform-box: border-box;
    transform: translateX(0px);
    min-height: 400px;
  }
}
</style>