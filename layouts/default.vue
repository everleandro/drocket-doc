<template>
  <e-app>
    <e-bar app fixed clipped color="secondary">
      <h1 class="d-flex px-3 primary--text">
        <EIcon :name="$icon.dashboard" class="mr-3" /> Drocket
      </h1>
      <e-spacer />
      <e-button
        :icon="$icon.menu"
        color="tertiary"
        large
        @click="closeDrawer()"
      />
    </e-bar>

    <EDrawer v-model="drawerModel" fixed nav class="secondary">
      <div class="nav__body">
        <div class="main-links">
          <e-list>
            <template
              v-for="({ icon, text, to }, index) in mainLinks"
              :key="index"
              color="white"
            >
              <e-list-item :to="to" :prepend-icon="icon">
                <slot name="item-text">
                  {{ text }}
                </slot>
              </e-list-item>
            </template>
          </e-list>
        </div>
      </div>
    </EDrawer>

    <EMain>
      <EContainer class="mt-8">
        <NuxtPage />
      </EContainer>
    </EMain>
  </e-app>
</template>
<script lang="ts" setup>
import { mainLinks } from "./constants";
const drawerModel = ref(true);

const closeDrawer = () => {
  drawerModel.value = !drawerModel.value;
};
</script>
<style lang="scss" src="./default.style.scss"></style>
