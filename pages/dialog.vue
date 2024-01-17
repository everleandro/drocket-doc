<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Dialog
      </h1>
      <p>
        A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for
        a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed,
        dismissed, or a required action has been taken.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :github="githubRepo.dialog">
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
        </template>
        <template #form>
          <EForm>
            <ETextfield v-model="dialogProperty.maxWidth" cols="24" label="max-width" suffix="px" type="number" />
            <ECheckbox v-model="dialogProperty.fullscreen" cols="24" label="fullscreen" />
            <ECheckbox v-model="dialogProperty.absolute" cols="24" label="absolute" />
            <ECheckbox v-model="dialogProperty.persistent" cols="24" label="persistent" />
          </EForm>
        </template>

        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center align-center full-height pa-4">
              <e-dialog v-model="dialogProperty.model" :persistent="dialogProperty.persistent"
                :fullscreen="dialogProperty.fullscreen" :absolute="dialogProperty.absolute"
                :max-width="dialogProperty.maxWidth">
                <div class="pa-4">
                  <h1 class="dialog-title mt-0 mb-3"> Dialog title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure unde beatae reiciendis animi
                    consequatur corrupti, enim ipsum. Libero dignissimos maxime assumenda, deleniti eaque adipisci dolore
                    possimus. Adipisci suscipit deserunt iste.</p>
                  <div class="d-flex justify-flex-end full-width">
                    <e-button color="primary" text @click="dialogProperty.model = false">close</e-button>
                  </div>
                </div>
              </e-dialog>
              <e-button color="primary" width="150" @click="dialogProperty.model = true">
                open dialog
              </e-button>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Props</h2>
      <p>Explore the available props for the form component</p>
      <div class="responsive-table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="( item, i ) in  dialogApiReference " :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>


  </div>
</template>
<script lang="ts" setup>
import { default as githubRepo } from '@/external-links/github'
import dialogApiReference from '@/api-reference/dialog.json'

const dialogProperty = reactive({
  maxWidth: '500',
  fullscreen: false,
  model: false,
  absolute: false,
  persistent: false,
})

const HTMLCode = computed(() => `<template>
  <e-button color="primary" width="150" @click="example = true">
      menu
  </e-button>
  <e-dialog 
    v-model="example"${dialogProperty.maxWidth ? `\n    max-width="${dialogProperty.maxWidth}"` : ''}${dialogProperty.fullscreen ?
    `\n    fullscreen` : ''}${dialogProperty.absolute ? `\n    absolute` : ''}${dialogProperty.persistent ?
      `\n    persistent` : ''}>
    <div class="pa-4">
      <h1 class="dialog-title mt-0 mb-3"> Dialog title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure unde beatae
        reiciendis animi consequatur corrupti, enim ipsum. Libero dignissimos maxime
        assumenda, deleniti eaque adipisci dolore possimus. Adipisci suscipit deserunt iste.
      </p>
      <div class="d-flex justify-flex-end full-width">
        <e-button color="primary" text @click="example = false">close</e-button>
      </div>
    </div>
  </e-dialog>
</template>`)
</script>