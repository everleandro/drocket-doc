<template>
    <div>
        <e-card class="box-example">
            <ETabGroup v-model="tab" :color="color">
                <slot name="tabs"></slot>
                <template v-if="github">
                    <e-spacer />
                    <e-button :prepend-icon="$icon.gitHub" text small :to="github.url" target="_blank" class="mr-1">
                        view on GitHub
                    </e-button>
                </template>
            </ETabGroup>
            <e-divider></e-divider>
            <template v-if="showBar">
                <e-bar depressed class="mb-0" style="z-index: 3;">
                    <slot name="bar"></slot>
                </e-bar>
                <e-divider></e-divider>
            </template>
            <ERow no-gutters>
                <ECol :lg="showForm ? 16 : 24" cols="24" class="py-8 px-4">
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
        </e-card>

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
interface githubInterface {
    title: string;
    url: string;
}
export interface Props {
    color?: string,
    github?: githubInterface,
}
defineProps<Props>()
const showForm = computed((): boolean => {
    return Boolean(slots.form)
})
const showBar = computed((): boolean => {
    return Boolean(slots.bar)
})

</script>
<style lang="scss">
.box {



    &-example {
        position: relative;

        .e-slide-group {
            width: 100%;

            &__content {
                align-items: center;
            }
        }

        .e-row .e-divider {
            display: none;

            @include _from_lg {
                display: block;
            }
        }

        &>.e-row {
            max-width: 100%;

        }

        pre[class*="language-"] {
            margin-top: 0;
        }

        .e-window,
        .language-markup,
        .e-window-item {
            height: 100%;
        }

        .e-window-item>div {
            height: 100%;
        }

        .e-btn {
            text-transform: unset;
        }
    }
}
</style>