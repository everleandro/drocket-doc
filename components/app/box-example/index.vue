<template>
    <div>
        <div class="box-example e-card">
            <ETabGroup v-model="tab" :color="color">
                <ETab value="component">
                    Component
                </ETab>
                <ETab value="template">
                    Template
                </ETab>
            </ETabGroup>
            <e-divider></e-divider>
            <ERow no-gutters>
                <ECol lg="16" class="py-12 px-4">
                    <EWindow v-model="tab" class="box-container">
                        <EWindowItem value="component">
                            <div class="d-flex justify-center pa-4">
                                <ECard>
                                    <EDatePicker v-model="example" :landscape="landscape" :no-title="noTitle" :color="color"
                                        :icon-prev="iconPrev" :icon-next="iconNext" />
                                </ECard>
                            </div>

                        </EWindowItem>
                        <EWindowItem value="template">
                            <div v-text="code" v-prism="{ class: 'language-html' }"></div>
                        </EWindowItem>
                    </EWindow>
                </ECol>
                <EDivider vertical />
                <ECol lg="8" class="pa-4">
                    <EForm>
                        <ECheckbox v-model="landscape" label="landscape" :color="color" />
                        <ECheckbox v-model="noTitle" label="noTitle" :color="color" />
                        <ESelect v-model="color" :items="colors" :color="color" label="color" />
                        <ESelect v-model="iconPrev" label="icon-prev" :items="icons" :color="color">
                            <template #item="{ attrs, item }">
                                <e-list-item v-bind="attrs" :prepend-icon="item">
                                    {{ item }}
                                </e-list-item>
                            </template>
                        </ESelect>
                        <ESelect v-model="iconNext" label="icon-next" :items="icons" :color="color">
                            <template #item="{ attrs, item }">
                                <e-list-item v-bind="attrs" :prepend-icon="item">
                                    {{ item }}
                                </e-list-item>
                            </template>
                        </ESelect>
                    </EForm>
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
const { $icon } = useNuxtApp()

const example = ref();
const tab = ref('component')
const landscape = ref(false)
const noTitle = ref(false)
const color = ref('carnation')
const iconNext = ref($icon.pickerIconNext)
const iconPrev = ref($icon.pickerIconPrev)
const icons = [$icon.pickerIconPrev, $icon.phone, $icon.logout]

const colors = ['primary', 'secondary', 'salmon', 'carnation']
const code = computed(() => `
<e-date-picker 
    v-model="example" ${landscape.value ? '\n    landscape' : ''} ${noTitle.value ? '\n    no-title' : ''}    
    :color="${color.value}" 
    :icon-prev="${iconNext.value}" 
    :icon-next="${iconPrev.value}" 
/>`)

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