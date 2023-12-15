<template>
    <div>
        <div class="box-example e-card">
            <ETabGroup v-model="tab" :color="color">
                <slot name="tabs"></slot>
            </ETabGroup>
            <e-divider></e-divider>
            <ERow no-gutters>
                <ECol :lg="showForm ? 16 : 24" class="py-8 px-4">
                    <EWindow v-model="tab" class="box-container">
                        <slot name="window-item"></slot>
                    </EWindow>
                </ECol>
                <template v-if="showForm">
                    <EDivider vertical />
                    <ECol lg="8" class="pa-4">
                        <slot name="form"></slot>
                    </ECol>
                </template>
            </ERow>
        </div>

    </div>
</template>
<script lang="ts">
export default {
    name: 'box-example'
}
</script>
<script lang="ts" setup>
const tab = ref('design')
const slots = useSlots()
export interface Props {
    color?: string
}
const props = defineProps<Props>()
const showForm = computed((): boolean => {
    return Boolean(slots.form)
})

</script>
<style lang="scss">
.box {
    &-example {

        pre[class*="language-"] {
            margin-top: 0;
        }

        .e-btn {
            text-transform: unset;
        }
    }
}
</style>