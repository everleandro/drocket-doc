<template>
  <e-app>
    <e-bar app fixed clipped color="white">
      <e-button :icon="$icon.menu" color="tertiary" large @click="closeDrawer()" />
      <h1 class="d-flex px-3 secondary--text"> Drocket
      </h1>
      <e-spacer />
    </e-bar>

    <EDrawer v-model="drawerModel" fixed nav>
      <div class="nav__body">
        <div class="main-links">
          <e-list color="primary">
            <template v-for="({ icon, text, to }, index) in mainLinks" :key="index">
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
        <slot />
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
