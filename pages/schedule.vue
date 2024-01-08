<template>
  <div class="button-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Schedule
      </h1>
      <p>
        component that provides the possibility of creating schedules and managing them
      </p>
    </div>
    <section class="mb-12">
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
        </template>
        <template #bar>
          <e-form>
            <e-switch v-model="example.scheduleMode" :true-value="scheduleMode.day" :false-value="scheduleMode.week"
              :label="example.scheduleMode === scheduleMode.day ? 'Mode:  Day' : 'Mode: Week'"></e-switch>

            <EMenu origin="bottom right">
              <template #activator="attrs">
                <ETextfield :model-value="formatDate(example.date)" input-readonly v-bind="attrs" />
              </template>
              <EDatePicker v-model="example.date" close-on-change />
            </EMenu>
            <e-spacer></e-spacer>
            <e-button outlined depressed color="primary" class="ma-4" @click="example.date = new Date()">Today</e-button>
          </e-form>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="pa-4">
              <div style="max-height: 400px; overflow: auto;">
                <ESchedule v-model="example.date" v-model:selected-space="example.space" row-height="50"
                  sticky-top-header="75" :events="bookingList" :loading="example.loading"
                  v-model:mode="example.scheduleMode" :start="60 * 60" :step="60 * 60" :schedule-column="scheduleColumns"
                  @click:empty-slot="handleScheduleClick" @click:event="handleScheduleClick" />
              </div>

            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="HTMLCode" v-prism class="full-height"></div>
          </EWindowItem>
        </template>

      </BoxExample>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useBreakpoint, scheduleMode, DateBuilder } from 'drocket'
import type { ScheduleEvent } from 'drocket'
const { $icon } = useNuxtApp()
const { viewport } = useBreakpoint()
const spaces = [
  { label: 'theater', id: 1 },
  { label: 'game room', id: 2 },
  { label: 'Shared room', id: 3 },
  { label: 'gym room', id: 4 },
  { label: 'pool', id: 5 },
]
const availableModes = [
  { text: 'Day', value: scheduleMode.day },
  { text: 'Week', value: scheduleMode.week }
]


const bookingList = [{
  name: 'Ever',
  id: 1,
  subtitle: "03:30h · 6:30' - 11",
  footer: 'Pista 4',
  start: '2023-04-11T03:30:00',
  end: '2023-04-11T06:30:00',
  entityId: 300,
  user: { name: 'User 1', id: 1, email: 'as1@asd.com', phone: '123 345 678', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
  employee: { name: 'User 4', id: 4, email: 'as4@asd.com', phone: '876 895 234', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
  color: 'primary',
  product: { name: '108 horas bajo el sol', id: 1 },
},
{
  name: 'Ever',
  id: 2,
  subtitle: "03:30h · 04:30' - 13",
  footer: 'Pista 5',
  start: '2023-04-13T03:30:00',
  end: '2023-04-13T04:30:00',
  entityId: 300,
  employee: { name: 'User 4', id: 4, email: 'as4@asd.com', phone: '876 895 234', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
  user: { name: 'User 1', id: 1, email: 'as1@asd.com', phone: '123 345 678', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
  color: 'carnation',
  product: { name: 'Afrodance', id: 2 },
}]

const scheduleColumns = computed(() => {
  if (viewport.xs) return 3
  if (viewport.sm) return 5
  if (viewport.md) return 7
  if (viewport.lg) return 10
  if (viewport.xl) return ''
})
const example = reactive({
  role: 1,
  loading: false,
  scheduleMode: scheduleMode.day,
  space: spaces[0],
  date: new Date(),
})
const formatDate = (date: Date): string => {
  console.log(new DateBuilder(date).format('month-DD/month-MM/year-YYYY'))
  return new DateBuilder(date).format('month-DD/month-MM/year-YYYY')
}
const handleScheduleClick = (obj: { data: ScheduleEvent, nativeEvent: MouseEvent }): void => {
  console.log('obj', obj)
}
const HTMLCode = `<template>
  <ESchedule v-model="exampleDate" sticky-top-header="75"/>
</template>`
</script>
