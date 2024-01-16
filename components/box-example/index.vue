<template>
    <div>
        <e-card :class="boxClass">
            <ETabGroup v-model="tab" :color="color">
                <slot name="tabs"></slot>
                <template v-if="github">
                    <e-spacer />
                    <!-- <e-button :icon="$icon.fullScreen" @click="fullScreenAction" /> -->
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
<script lang="ts" setup>
import { ref, computed, useSlots } from 'vue'
const boxAbsolute = ref(false);
const boxClass = computed(() => {
    return { 'box-absolute': boxAbsolute.value, 'box-example': true }
})
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
const fullScreenAction = () => {
    boxAbsolute.value = !boxAbsolute.value
}
</script>
<style lang="scss">
.box {
    position: relative;

    &-absolute {
        position: fixed;
        top: 0;
        z-index: 999999;
        left: 0;
        bottom: 0;
        right: 0;
    }

    &-example {

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