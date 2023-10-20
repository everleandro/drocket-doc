<template>
    <div v-show="active" :class="['e-window-item', { 'e-window-item--active': active }]" disabled="false" :key="value"
        :data-value="value">
        <slot></slot>
    </div>
</template>
<script lang="ts" >
export default { name: 'EWindowItem' }
</script>
<script lang="ts" setup>
import { EWindow } from "./index.vue"

export interface Props {
    value: string | number
}
const props = defineProps<Props>()
const Group = inject<Partial<EWindow> | undefined>("EWindow", undefined);

const active = computed(() => Group?.modelValue?.value === props.value)
</script>