<template>
    <div :class="componentClass">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
    cols?: string | number; xs?: string | number; sm?: string | number;
    md?: string | number; lg?: string | number; xl?: string | number;
}>()
const { gridClass } = useGrid('e-field')

const componentClass = computed(() => gridClass.value)
</script>