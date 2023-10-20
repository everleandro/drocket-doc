<template>
    <ClientOnly>
        <EMenu v-if="viewport.lg" ref="menu" v-bind="menuProps" :id="$attrs.id" :menu-with-tabs="Boolean(slots.tabs)"
            check-offset responsive-menu @update:model-value="changeValue">
            <slot name="tabs" :attrs="{ direction: 'vertical' }"></slot>
            <slot></slot>
        </EMenu>

        <EDialog v-else :model-value="modelValue" ref="dialog" v-bind="dialogProps" @update:model-value="changeValue">
            <slot name="tabs" :attrs="{ tabAlign: 'center' }"></slot>
            <slot></slot>
        </EDialog>
    </ClientOnly>
</template>
<script lang="ts" setup>

export interface Props {
    menuProps?: any
    dialogProps?: any
    modelValue?: boolean
}

const menu = ref()
const dialog = ref()

const { viewport } = useBreakpoint()
const props = withDefaults(defineProps<Props>(), {})
const slots = useSlots()

watch(() => props.modelValue, (value: boolean) => {
    if (viewport.lg) {
        if (value) {
            const stringActivator = typeof props.menuProps?.activator === 'string'
            const activator: HTMLElement =
                (stringActivator ?
                    document.querySelector(props.menuProps?.activator as string)
                    : props.menuProps?.activator as HTMLElement)
                || document.createElement('div')

            nextTick(() => { menu.value?.openMenu() })
        } else {
            nextTick(() => { menu.value?.closeMenu() })
        }
    }
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const changeValue = (value: boolean): void => {
    emit('update:modelValue', value)
}

</script>
<style lang="scss">
.e-menu-container {
    &[menu-with-tabs="true"] {
        margin-left: -3rem;
    }

    &[responsive-menu] {

        .e-slide-group {
            position: absolute;
            right: 0;
            top: 0;
            transform: translateX(100%);
            background: white;
            box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);


            .e-tab.e-tab {
                min-width: 3rem;
            }
        }
    }
}
</style>