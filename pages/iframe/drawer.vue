<template>
    <div class="drawer-example-iframe">
        <BoxExample class="drawer-example__box" :github="githubRepo.drawer">
            <template #tabs>
                <ETab value="design"> Design </ETab>
                <ETab value="Template"> Template </ETab>
            </template>
            <template #window-item>
                <EWindowItem value="design">
                    <e-card>
                        <div class="full-height drawer__box">
                            <e-app>
                                <e-drawer v-model="drawerProperty.model" dev-mode nav
                                    :fixed="drawerProperty.cssPosition === cssPosition.fixed"
                                    :width="drawerProperty.width ? parseInt(drawerProperty.width, 10) : undefined"
                                    :absolute="drawerProperty.cssPosition === cssPosition.absolute"
                                    :right="drawerProperty.position === drawerPosition.right">
                                    <template #prepend>
                                        <e-list-item prepend-avatar="/images/male-2.jpg" title="Jhon Smith"
                                            subtitle="smith.93@gmail.com"></e-list-item>
                                        <e-divider></e-divider>
                                    </template>
                                    <e-list>
                                        <e-list-item :prepend-icon="$icon.home" value="1">Home</e-list-item>
                                        <e-list-item :prepend-icon="$icon.accountBox" value="1">Profile</e-list-item>
                                        <e-list-item :prepend-icon="$icon.cog" value="1">Setting</e-list-item>
                                    </e-list>
                                    <template #append>
                                        <div class="pa-2">
                                            <e-button color="purple" block small>Logout</e-button>
                                        </div>
                                    </template>
                                </e-drawer>
                                <e-main>
                                    <e-container>
                                        <EForm class="mt-4">
                                            <e-switch v-model="drawerProperty.model"
                                                :label="'model-value: ' + drawerProperty.model" cols="24" />

                                            <e-radio-group v-model="drawerProperty.position" flat cols="24" row
                                                label="Position on screen:">
                                                <e-radio :model-value="drawerPosition.left" label="left" />
                                                <e-radio :model-value="drawerPosition.right" label="Right" />
                                            </e-radio-group>
                                            <e-radio-group v-model="drawerProperty.cssPosition" flat row
                                                label="CSS position:" cols="24">
                                                <e-radio :model-value="cssPosition.fixed" label="Fixed" />
                                                <e-radio :model-value="cssPosition.absolute" label="Absolute" />
                                            </e-radio-group>
                                        </EForm>
                                    </e-container>
                                </e-main>
                            </e-app>

                        </div>
                    </e-card>
                </EWindowItem>
                <EWindowItem value="Template">
                    <div class="code-conmtainer">
                        <div v-text="HTMLCode" v-prism class="full-height"></div>
                    </div>
                </EWindowItem>
            </template>
        </BoxExample>
    </div>
</template>
<script setup lang="ts">
import { default as githubRepo } from '@/external-links/github'
definePageMeta({
    layout: false,
});

enum drawerPosition {
    left = 'left',
    right = 'right'
}

enum cssPosition {
    absolute = 'absolute',
    fixed = 'fixed'
}
const drawerProperty = reactive({
    right: false,
    width: '16',
    cssPosition: cssPosition.fixed,
    position: drawerPosition.left,
    absolute: false,
    model: true,
    fixed: false,
})

const HTMLCode = computed(() => `<template>
    <e-app>        
        <e-drawer${drawerProperty.cssPosition === cssPosition.absolute ? ` absolute` : ''}${drawerProperty.position === drawerPosition.right ? ` right` : ''}${drawerProperty.cssPosition === cssPosition.fixed ? ` fixed` : ''}>
            <template #prepend>
                <e-list-item 
                    prepend-avatar="/images/male-2.jpg"
                    title="Jhon Smith"
                    subtitle="smith.93@gmail.com">
                </e-list-item>
                <e-divider></e-divider>
            </template>
            <e-list>
                <e-list-item prepend-icon="home" to="/route/1">Home</e-list-item>
                <e-list-item prepend-icon="accountBox" to="/route/2">Profile</e-list-item>
                <e-list-item prepend-icon="cog" to="/route/3">Setting</e-list-item>
            </e-list>
            <template #append>
                <div class="pa-2">
                    <e-button color="purple" block small to="/logout">Logout</e-button>
                </div>
            </template>
        </e-drawer>
        <e-main>
            <e-container> 
                <code> content </code>
            </e-container>
        </e-main>
    </e-app>
</template>`)
</script>

<style lang="scss" scoped>
.e-app {
    min-height: 100%;
}

.e-card {
    overflow: hidden;
}

.drawer-example-iframe {
    margin: 2px;
}


.e-card {
    max-height: 400px;
}

.drawer-example__box {
    .drawer__box {
        width: 100%;
        position: relative;
        transform-box: border-box;
        transform: translateX(0px);
        min-height: 400px;
    }
}
</style>