<template>
    <div>
        <div class="box-example e-card">
            <ETabGroup v-model="tab">
                <slot name="tabs"></slot>
            </ETabGroup>
            <e-divider></e-divider>
            <ERow no-gutters>
                <ECol lg="16" class="py-12 px-4">
                    <EWindow v-model="tab" class="box-container">
                        <slot name="window-item"></slot>
                    </EWindow>
                </ECol>
                <EDivider vertical />
                <ECol lg="8" class="pa-4">
                    <slot name="form"></slot>
                </ECol>
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