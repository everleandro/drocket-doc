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
          <e-list v-model:group="listModel" color="primary">
            <template v-for="({ text, to, group, items }, index) in mainLinks" :key="index">
              <e-list-group v-if="group" :value="index">
                <template #activator="{ attrs }">
                  <e-list-item v-bind="attrs">{{ text }}</e-list-item>
                </template>
                <e-list-item v-for="item in items" :to="item.to">
                  {{ item.text }}
                </e-list-item>
              </e-list-group>
              <e-list-item v-else :to="to"> {{ text }} </e-list-item>
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
const listModel = ref([])
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
