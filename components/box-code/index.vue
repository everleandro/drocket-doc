<template>
  <div>
    <div class="node-box">
      <ETabGroup v-model="tab" color="primary" class="white mb-2">
        <ETab v-for="(_, key, index) in code" :value="index" :key="index">
          {{ key }}
        </ETab>
      </ETabGroup>
      <EWindow v-model="tab" class="">
        <copy-button only-visible />
        <EWindowItem
          :value="index"
          v-for="(value, _, index) in code"
          :key="index"
        >
          <div v-text="value.code" v-prism="{ class: value.language }"></div>
        </EWindowItem>
      </EWindow>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "box-code",
};
</script>
<script lang="ts" setup>
export interface BoxCode {
  code: string;
  language: string;
}
export interface Props {
  code: Record<string, BoxCode>;
}
const props = defineProps<Props>();

const tab = ref(0);
</script>
<style lang="scss">
.node-box {
  pre[class*="language-"] {
    margin-top: 0;
  }
  .e-slide-group {
    margin-bottom: 0px !important;
  }
  .e-btn {
    text-transform: unset;
  }

  .e-window {
    border-top: 1px solid;
  }
}
</style>
