<template>
    <div :class="switchClass" :style="switchStyle">
        <span>
            <EButton v-bind="buttonAttrs(trueValue)" :color="color(trueValue)" @click="changeValue(trueValue)">
                {{ textOne }}
            </EButton>
        </span>
        <span>
            <EButton v-bind="buttonAttrs(falseValue)" :color="color(falseValue)" @click="changeValue(falseValue)">
                {{ textTwo }}
            </EButton>
        </span>
    </div>
</template>
<script lang="ts">
export enum type {
    listGrid,
    default
}

export default {
    name: 'grid-list-switch'
}

import { Props as BUttonProps } from "@/components/shared/button/index.vue"
</script>
<script lang="ts" setup>

export interface Props {
    modelValue?: boolean | number | string
    switchType?: type,
    textOne?: string,
    width?: string,
    minWidth?: string,
    textTwo?: string,
    fillHeight?: boolean,
    block?: boolean,
    trueValue?: number | string | boolean
    falseValue?: number | string | boolean
}

const props = withDefaults(defineProps<Props>(), {
    switchType: type.default, textOne: 'Lista', textTwo: 'Grid', trueValue: true, falseValue: false
})

const { $icon } = useNuxtApp()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean | number | string): void
}>()

const color = (buttonValue: any): string => {
    return buttonValue == props.modelValue ? 'primary' : 'secondary'
}

const switchClass = computed(() => {
    const classes = ['grid-list-switch']
    if (props.switchType === type.default) classes.push('grid-list-switch--default')
    if (props.switchType === type.listGrid) classes.push('grid-list-switch--list-grid')
    if (props.block) classes.push('grid-list-switch--block')
    if (props.fillHeight) classes.push('grid-list-switch--fill-height')
    return classes
})

const switchStyle = computed((): Record<string, string> => {
    const result: Record<string, string> = {};
    if (props.width) result.width = `${props.width}px`;
    if (props.minWidth) result.minWidth = `${props.minWidth}px`;
    return result
})

const buttonAttrs = (buttonValue: boolean | number | string) => {
    const result: BUttonProps = { depressed: true }
    if (props.switchType === type.listGrid) {
        result.prependIcon = buttonValue ? $icon.list : $icon.grid
        result.text = true
        result.stacked = true
    }
    else {
        result.block = true
    }
    return result;

}

const changeValue = (value: boolean | number | string) => {
    emit('update:modelValue', value)
}

</script>
<style lang="scss">
.grid-list-switch {
    min-height: 100%;

    &--block {
        flex-grow: 1;
    }

    &--list-grid {
        .e-btn {
            text-transform: capitalize;
        }
    }

    &--fill-height {
        min-height: 100%;

        .e-btn {
            min-height: 100%;
        }
    }

    .e-btn {

        &+.e-btn {
            margin: 0;
        }
    }

    &--default {
        display: flex;

        &>span {
            flex: 1 1 50%;
        }
    }
}
</style>