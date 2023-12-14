<template>
  <div class="date-picker-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Date Piceker
      </h1>
      <p>
        The component offers an intuitive way for users to select dates
        from a calendar.
      </p>
    </div>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Example</h2>
      <p>
        With this component,
        users can easily navigate through months and years to pick specific dates. The Date Picker supports a range of
        customization options, allowing developers to control date formats, highlight specific dates, set minimum and
        maximum selectable dates, and more.
      </p>
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex justify-center pa-4">
              <ECard>
                <EDatePicker v-model="example" :landscape="landscape" :no-title="noTitle" :color="color"
                  v-model:view="viewMode" :week-start="weekStart" :icon-prev="iconPrev" :icon-next="iconNext" />
              </ECard>
            </div>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="DefaultCode" v-prism></div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm label-min-width="85">
            <ECheckbox v-model="landscape" label="landscape" :color="color" />
            <ECheckbox v-model="noTitle" label="noTitle" :color="color" />
            <ESelect v-model="color" :items="colors" :color="color" label="color" />
            <ESelect v-model="weekStart" :items="weekStartOptions" :color="color" label="week-start" />
            <ESelect v-model="viewMode" :items="viewModeOptions" :color="color" label="view" />
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
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Disabled and Highlighted dates</h2>
      <p>Specify disabled and highlighted dates using objects or functions. based on <code
          class="primary--text mx2 code ">DatesConfiguration </code>interface</p>
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
          <ETab value="Ts">
            Ts Code
          </ETab>
          <ETab value="interface">
            Interface
          </ETab>
          <ETab value="css">
            Css
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <e-row>
              <e-col class="d-flex justify-center">
                <ECard>
                  <EDatePicker v-model="disabledDatesModel" :disabled="disabledDates" />
                </ECard>
              </e-col>
              <e-col class="d-flex justify-center">
                <ECard>
                  <EDatePicker v-model="disabledDatesModel" :highlighted="highlightedDates" />
                </ECard>
              </e-col>

            </e-row>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="DisabledDatesTemplate" v-prism="{ class: 'language-html' }"></div>
          </EWindowItem>
          <EWindowItem value="Ts">
            <div v-text="DisabledDatesTsCode" v-prism="{ class: 'language-js' }"></div>
          </EWindowItem>
          <EWindowItem value="interface">
            <div v-text="DisabledDatesInterface" v-prism="{ class: 'language-ts' }"></div>
          </EWindowItem>
          <EWindowItem value="css">
            <div v-text="HighlightedDatesCss" v-prism="{ class: 'language-css' }"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Year and Month pickers</h2>
      <p>A Year and month Picker is a user interface component that allows users to select a specific date from a list.
      </p>
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <e-row>
              <e-col class="d-flex justify-center">
                <ECard class="ma-1">
                  <EDatePicker v-model="yearPickerModel" only-year />
                </ECard>
              </e-col>
              <e-col class="d-flex justify-center">
                <ECard class="ma-1">
                  <EDatePicker v-model="monthPickerModel" only-month />
                </ECard>
              </e-col>
            </e-row>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="yearAndMonthPickerTemplate" v-prism="{ class: 'language-html' }"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Integration</h2>
      <p>DatePicker is also easily integrated with the rest of Drocket components.</p>
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <EDialog v-model="integrationDialogModel" max-width="290">
              <EDatePicker v-model="integrationPickerModel" close-on-change />
            </EDialog>
            <e-row>
              <e-col class="d-flex justify-center">
                <ETextField :modelValue="formatDate(integrationPickerModel)" id="event-form-date-picker" input-align="end"
                  label="birth date" :append-icon="$icon.calendar" input-readonly
                  @click="integrationDialogModel = true" />
              </e-col>
              <e-col class="d-flex justify-center">
                <EMenu origin="bottom right">
                  <template #activator="attrs">
                    <ETextField :modelValue="formatDate(integrationMenuPickerModel)" id="event-form-date-picker"
                      input-align="end" label="Deadline" :append-icon="$icon.calendar" input-readonly v-bind="attrs" />
                  </template>
                  <EDatePicker v-model="integrationMenuPickerModel" close-on-change />
                </EMenu>
              </e-col>
            </e-row>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="IntegrationHtmlCode" v-prism="{ class: 'language-html' }"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Internationalization</h2>
      <p>Drocket only supports Spanish and English at the moment. Custom languages may be added in the near future.</p>
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
          <ETab value="Template">
            Template
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <e-row>
              <e-col class="d-flex justify-center">
                <ECard class="ma-1">
                  <EDatePicker v-model="esPickerModel" lng="es" />
                </ECard>
              </e-col>
              <e-col class="d-flex justify-center">
                <ECard class="ma-1">
                  <EDatePicker v-model="enPickerModel" lng="en" />
                </ECard>
              </e-col>
            </e-row>
          </EWindowItem>
          <EWindowItem value="Template">
            <div v-text="yearAndMonthPickerTemplate" v-prism="{ class: 'language-html' }"></div>
          </EWindowItem>
        </template>
      </BoxExample>
    </section>

  </div>
</template>
<script lang="ts" setup>
import { DatesConfiguration } from '~/components/shared/date-picker/types';
import { datePickerViewType } from '~/components/shared/date-picker/types';
import UtilDate from '@/models/date';
const example = ref();
const integrationDialogModel = ref();
const integrationPickerModel = ref();
const integrationMenuPickerModel = ref();
const disabledDatesModel = ref();
const yearPickerModel = ref();
const monthPickerModel = ref();
const esPickerModel = ref();
const enPickerModel = ref();
const landscape = ref(false)
const noTitle = ref(false)
const weekStart = ref(0)
const color = ref('primary')
const { $icon } = useNuxtApp()
const icons = [$icon.pickerIconPrev, $icon.phone, $icon.logout]
const iconNext = ref($icon.pickerIconNext)
const iconPrev = ref($icon.pickerIconPrev)
const colors = ['primary', 'secondary', 'salmon', 'carnation']
const disabledDates: DatesConfiguration = {
  daysOfMonth: [26, 29],
  days: [0, 6]
}
const highlightedDates: DatesConfiguration = {
  from: new Date(),
  to: new Date(new Date().setDate(new Date().getDate() + 10))
}
const viewMode = ref(datePickerViewType.day)
const viewModeOptions: Array<Record<string, number | string>> = [
  { text: 'day', value: datePickerViewType.day },
  { text: 'month', value: datePickerViewType.month },
  { text: 'year', value: datePickerViewType.year },
]

const weekStartOptions = [
  { text: 'sonday', value: 0 },
  { text: 'monday', value: 1 },
  { text: 'tuesday', value: 2 },
  { text: 'wednesday', value: 3 },
  { text: 'thursday', value: 4 },
  { text: 'friday', value: 5 },
  { text: 'saturday', value: 6 }]
const formatDate = (date: Date): string => {
  return new UtilDate(date).format('month-DD/month-MM/year-YYYY')
}
const DefaultCode = computed(() => `<template>
  <e-date-picker week-start
    v-model="example" ${landscape.value ? '\n    landscape' : ''} ${noTitle.value ? '\n    no-title' : ''}    
    color="${color.value}" 
    :week-start="${weekStart.value}" 
    icon-prev="${iconNext.value}" 
    icon-next="${iconPrev.value}" 
  />
</template>
`)

const DisabledDatesTemplate = computed(() => `<template>
  <div>
    <ECard>
      <EDatePicker v-model="modelForDisabledDates" :disabled="disabledDates" />
    </ECard>  
    <ECard>
      <EDatePicker v-model="modelForHighlightedDates" :highlighted="highlightedDates" />
    </ECard>  
  </div>
</template>
`)
const DisabledDatesTsCode = computed(() => `import { DatesConfiguration } from '~/drocket/date-picker/types';
const modelForDisabledDates = ref();
const modelForHighlightedDates = ref();
const disabledDates: DatesConfiguration = {
  daysOfMonth: [26,29],
  days: [0, 6]
}
const highlightedDates: DatesConfiguration = {
  from: new Date(),
  to: new Date(new Date().setDate(new Date().getDate() + 10))
}
`)
const DisabledDatesInterface = computed(() => `export interface DatesRange {
  from: Date;
  to: Date;
}
export interface DatesConfiguration {
  dates?: Array<Date>;
  from?: Date;
  to?: Date;
  daysOfMonth?: Array<number>;
  ranges?: Array<DatesRange>;
  days?: Array<number>;
  customPredictor?: (date: Date) => boolean;
}
`)
const HighlightedDatesCss = computed(() => `.date-picker-page {
  .btn-day--highlighted {
    background-color: hsl(from var(--primary) h s 90%)
  }
}`)

const IntegrationHtmlCode = computed(() => `<EDialog v-model="dialogModel" max-width="290">
  <EDatePicker v-model="birthDate" close-on-change />
</EDialog>
<e-row>
  <e-col class="d-flex justify-center">
    <ETextField :modelValue="formatDate(birthDate)" id="event-form-date-picker" input-align="end"
      label="birth date" append-icon="calendar" input-readonly
      @click="integrationDialogModel = true" />
  </e-col>
  <e-col class="d-flex justify-center">
    <EMenu origin="bottom right">
      <template #activator="attrs">
        <ETextField :modelValue="formatDate(Deadline)" id="event-form-date-picker"
          input-align="end" label="Deadline" append-icon="calendar" input-readonly v-bind="attrs" />
      </template>
      <EDatePicker v-model="Deadline" close-on-change />
    </EMenu>
  </e-col>
</e-row>`)

const yearAndMonthPickerTemplate = computed(() => `<div>
  <ECard>
    <EDatePicker v-model="yearPickerModel" only-year />
  </ECard>
  <ECard>
    <EDatePicker v-model="monthPickerModel" only-month />
  </ECard>
</div>`)

</script>
<style lang="scss">
.date-picker-page {
  .btn-day--highlighted {
    background-color: hsl(from var(--primary) h s 90%)
  }
}
</style>
