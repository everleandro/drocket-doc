<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Schedule
      </h1>
      <p>
        Sometimes we have the need to manage the reservation of rooms, rentals or simply premises within a gym, this
        component allows us to manage the different reservations that can be made for a given space
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :github="githubRepo.schedule">
        <template #tabs>
          <ETab value="design"> Design </ETab>
          <ETab value="Template"> Template </ETab>
          <ETab value="Ts"> Ts </ETab>
          <ETab value="data"> data </ETab>
        </template>
        <template #bar>
          <e-form>
            <e-select v-model="example.scheduleMode" :items="scheduleModes"></e-select>
            <e-select v-model="example.selectedSpace" :disabled="example.scheduleMode === ScheduleMode.schedule"
              :items="spaces" item-text="label" return-object item-value="id"></e-select>
            <e-form-column>
              <EMenu origin="top right">
                <template #activator="attrs">
                  <e-button v-bind="attrs" block depressed :append-icon="$icon.menuDown">
                    {{ formatDate(example.date) }}
                  </e-button>
                </template>
                <EDatePicker v-model="example.date" no-title close-on-change />
              </EMenu>
            </e-form-column>

            <e-spacer></e-spacer>
            <e-button outlined depressed color="primary" class="ma-3" @click="example.date = new Date()">Today</e-button>
          </e-form>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="pa-4">
              <div style="max-height: 600px; overflow: auto;">
                <ESchedule v-model="example.date" v-model:selected-space="example.selectedSpace" :spaces="spaces"
                  sticky-top-header="65" :events="events" v-model:mode="example.scheduleMode" :start="60 * 60"
                  :step="60 * 60" :schedule-column="scheduleColumns" rowHeight="50"
                  @click:empty-slot="handleScheduleClick" @click:event="handleScheduleClick" />
              </div>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
          <EWindowItem value="Ts">
            <div v-text="tsCode" v-prism="{ class: 'language-js' }" class="full-height"></div>
          </EWindowItem>
          <EWindowItem value="data">
            <div v-text="dataCode" v-prism="{ class: 'language-js' }" class="full-height"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>
    <schedule-form v-model="scheduleFormObject" v-model:active="scheduleDialogModel" :spaces="spaces"
      @submit="submitEvent" />
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
            <tr v-for="(item, i) in scheduleApiReference" :key="i">
              <td>{{ item.property }}</td>
              <td v-html="item.description"> </td>
              <td :class="item.type.class" v-html="item.type.value"></td>
              <td :class="item.default.class">{{ item.default.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Slots</h2>
      <p>Explore the available slots for the form component</p>
      <e-expansion-panel>
        <e-expansion v-for="(int, i) in slots" :key="i" :header-title="int.title" color="primary">
          <div v-text="int.code" v-prism="{ class: 'language-json' }"></div>
        </e-expansion>
      </e-expansion-panel>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">data types</h2>
      <p> You can import all data types used in the component from the path: <code
          class="primary-darken-1--text">drocket</code> </p>

      <e-expansion-panel>
        <e-expansion v-for="(int, i) in interfaces" :key="i" :header-title="int.title" color="primary">
          <div v-text="int.code" v-prism="{ class: 'language-ts' }"></div>
        </e-expansion>
      </e-expansion-panel>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { default as githubRepo } from '@/external-links/github'
import { useBreakpoint, ScheduleMode, DateBuilder } from 'drocket'
import scheduleApiReference from '@/api-reference/schedule.json'            

import type { ScheduleEvent, ScheduleSpace } from 'drocket'
const { viewport } = useBreakpoint()
import { events as defaultEvents, spaces, scheduleModes, interfaces, dataCode, tsCode, HTMLCode, slots } from './schedule.data'
const scheduleDialogModel = ref(false);

const example = reactive({
  role: 1,
  loading: false,
  scheduleMode: ScheduleMode.day,
  selectedSpace: <ScheduleSpace | undefined>{ ...spaces[0] },
  date: new Date(),
})
const events = ref([...defaultEvents])
const scheduleFormObject: Ref<Partial<ScheduleEvent>> = ref({
  id: 'new',
  start: new Date(),
  end: new Date(),
  color: 'primary',
})
watch(() => example.scheduleMode, (val) => {
  if (val === ScheduleMode.schedule) {
    example.selectedSpace = undefined
  } else {
    example.selectedSpace = { ...spaces[0] }
  }
})

const scheduleColumns = computed(() => {
  if (viewport.xs) return 3
  if (viewport.sm) return 5
  if (viewport.md) return 7
  if (viewport.lg) return 10
  if (viewport.xl) return ''
})

const formatDate = (date: Date): string => new DateBuilder(date).format('month-mmmm month-D, year-YYYY')

const handleScheduleClick = (obj: { data: ScheduleEvent, nativeEvent: MouseEvent }): void => {
  scheduleFormObject.value = obj.data
  scheduleDialogModel.value = true;
}
const submitEvent = (event: ScheduleEvent): void => {
  if (event.id) {
    const index = events.value.findIndex((e) => e.id === event.id)
    events.value[index] = event
  } else {
    events.value.push({ ...event, id: events.value.length + 1 })
  }
  scheduleDialogModel.value = false;
}

</script>
<style lang="scss">
.schedule-page {
  .e-dialog {
    overflow: visible;
  }
}
</style>
