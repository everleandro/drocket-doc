<template>
  <e-app>
    <e-bar app fixed clipped color="white">
      <e-button :icon="$icon.menu" text color="tertiary" large @click="closeDrawer()" />
      <h1 class="app-logo"> <e-icon :icon="$icon.logo" color="primary" class="mr-2"></e-icon> Drocket
      </h1>
      <e-spacer />
      <e-button :prepend-icon="$icon.gitHub" text :to="githubRepo.root.url" target="_blank" class="mr-1">
        view on GitHub
      </e-button>
    </e-bar>
    <EDrawer v-model="drawerModel" fixed nav>
      <div class="nav__body">
        <div class="main-links">
          <e-list color="primary">
            <template v-for="({ text, to, divider }, index) in mainLinks" :key="index">
              <template v-if="divider">
                <e-divider></e-divider>
                <e-list-item class="e-list-item--text">
                  {{ text }}
                </e-list-item>
              </template>
              <e-list-item v-else :to="to">
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
        <router-view></router-view>
      </EContainer>
    </EMain>
  </e-app>
</template>
<script lang="ts" setup>
import { mainLinks } from "./constants";
import { default as githubRepo } from '@/external-links/github'
const drawerModel = ref(true);
import { useBreakpoint } from 'drocket'
const { viewport } = useBreakpoint()
const router = useRouter()

watch(() => router, () => {
  if (drawerModel.value && (viewport.xs || viewport.sm || viewport.md)) {
    drawerModel.value = false
  }

}, { deep: true, immediate: true });

const closeDrawer = () => {
  drawerModel.value = !drawerModel.value;
};
</script>
<style lang="scss" src="./default.style.scss"></style>
