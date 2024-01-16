import { DateBuilder, ScheduleMode } from "drocket";
import type { ScheduleEvent, ScheduleSpace } from "drocket";

export const spaces: Array<ScheduleSpace> = [
  { label: "cardiovascular area", id: 1 },
  { label: "weight room", id: 2 },
  { label: "fitness class room", id: 3 },
  { label: "spa area", id: 4 },
];

export const events: Array<ScheduleEvent> = [
  {
    name: "Jhon Smith",
    color: "primary",
    start: new Date(),
    id: 1,
    end: new DateBuilder().add(3, "hours").date,
    entityId: 1,
  },
];

export const scheduleModes = [
  { text: "Day", value: ScheduleMode.day },
  { text: "Week", value: ScheduleMode.week },
  { text: "Schedule", value: ScheduleMode.schedule },
];
export const interfaces = [
  {
    title: "ScheduleSpace",
    code: `export interface ScheduleSpace {
  label: string;
  id: string | number;
}`,
  },
  {
    title: "ScheduleSlotEvent",
    code: `export interface ScheduleSlotEvent {
  name: string;
  entityId: number | string;
  start: Date | string;
  end: Date | string;
  color: string;
}`,
  },
  {
    title: "ScheduleEvent",
    code: `export interface ScheduleEvent extends ScheduleSlotEvent {
  footer?: string | number | null;
  subtitle?: string | number | null;
  id: string | number;
}`,
  },
  {
    title: "Point",
    code: `export interface Point {
  x: number;
  y: number;
}`,
  },
  {
    title: "ScheduleMode",
    code: `export enum ScheduleMode {
  day,
  week,
  month,
  year,
  schedule,
}`,
  },
];
export const slots = [
  {
    title: "event",
    code: `{
    "event": "ScheduleEvent";
}`,
  },
  {
    title: "empty-slot",
    code: `{
    "data": "ScheduleSlotEvent";
}`,
  },
];
export const dataCode = `import { DateBuilder, ScheduleMode } from "drocket";
import type { ScheduleEvent, ScheduleSpace } from "drocket";

export const spaces: Array<ScheduleSpace> = [
  { label: "cardiovascular area", id: 1 },
  { label: "weight room", id: 2 },
  { label: "fitness class room", id: 3 },
  { label: "spa area", id: 4 },
];

export const events: Array<ScheduleEvent> = [
  {
    name: "Jhon Smith",
    color: "primary",
    start: new Date(),
    id: 1,
    end: new DateBuilder().add(3, "hours").date,
    entityId: 1,
  },
];

export const scheduleModes = [
  { text: "Day", value: ScheduleMode.day },
  { text: "Week", value: ScheduleMode.week },
  { text: "Schedule", value: ScheduleMode.schedule },
];`;

export const tsCode = `
import { useBreakpoint, ScheduleMode, DateBuilder } from 'drocket'

import type { ScheduleEvent } from 'drocket'
import { events as defaultEvents, spaces, scheduleModes } from './schedule.data'
const scheduleDialogModel = ref(false);

const example = reactive({
  role: 1,
  loading: false,
  scheduleMode: ScheduleMode.day,
  selectedSpace: { ...spaces[0] },
  date: new Date(),
})
const events = ref([...defaultEvents])
const scheduleFormObject: Ref<Partial<ScheduleEvent>> = ref({
  id: 'new',
  start: new Date(),
  end: new Date(),
  color: 'primary',
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
}`;

export const HTMLCode = `<template>
  <EBar>
    <e-form>
      <ESelect 
        v-model="example.scheduleMode" 
        :items="scheduleModes" 
      />
      <ESelect 
        v-model="example.selectedSpace"
        :items="spaces"
        item-text="label"
        return-object
        item-value="id"
      />
      <EFormColumn>
        <EMenu origin="top right">
          <template #activator="attrs">
            <EButton 
              v-bind="attrs"
              block
              depressed
              :append-icon="$icon.menuDown">
              {{ formatDate(example.date) }}
            </EButton>
          </template>
          <EDatePicker v-model="example.date" no-title close-on-change />
        </EMenu>
      </EFormColumn>

      <ESpacer></ESpacer>
      <EButton 
        outlined 
        depressed 
        color="primary" 
        class="ma-3" 
        @click="example.date = new Date()">
        Today
      </EButton>
    </e-form>
  </EBar>
  <div style="max-height: 600px; overflow: auto;">
    <ESchedule  v-model="example.date" 
                v-model:selected-space="example.selectedSpace"
                v-model:mode="example.scheduleMode"
                :spaces="spaces"
                sticky-top-header="65"
                :events="events"
                :start="60 * 60"
                :step="60 * 60"
                rowHeight="50"
                @click:empty-slot="handleScheduleClick"
                @click:event="handleScheduleClick"
    />
    <schedule-form v-model="scheduleFormObject" v-model:active="scheduleDialogModel" :spaces="spaces"
      @submit="submitEvent" />
  </div>
</template>`;
