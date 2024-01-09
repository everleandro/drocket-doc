<template>
  <div class="date-picker-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Date Picker
      </h1>
      <p>
        The component offers an intuitive way for users to select dates
        from a calendar, users can easily navigate through months and years to pick specific dates.
      </p>
    </div>
    <section class="mb-12">
      <BoxExample :color="color" :github="githubRepo.datePicker">
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
                  v-model:view="viewMode" :week-start="weekStart" :icon-prev="(iconPrev?.icon as IconPath)"
                  :icon-next="(iconNext?.icon as IconPath)" />
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
            <ESelect v-model="iconPrev" cols="24" placeholder="default" :items="arrowLeft" return-object label="icon-prev"
              clearable>
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                  {{ item.text }}
                </e-list-item>
              </template>
            </ESelect>
            <ESelect v-model="iconNext" cols="24" placeholder="default" :items="arrowRight" return-object
              label="icon-next" clearable>
              <template #item="{ attrs, item }">
                <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                  {{ item.text }}
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
          class="primary-darken-1--text mx2 code ">DatesConfiguration </code>interface</p>
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
                <ETextfield :modelValue="formatDate(integrationPickerModel)" input-align="end" label="birth date"
                  :append-icon="$icon.calendar" input-readonly @click="integrationDialogModel = true" />
              </e-col>
              <e-col class="d-flex justify-center">
                <EMenu origin="bottom right">
                  <template #activator="attrs">
                    <ETextfield :modelValue="formatDate(integrationMenuPickerModel)" input-align="end" label="Deadline"
                      :append-icon="$icon.calendar" input-readonly v-bind="attrs" />
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
    <div class="mb-12 pt-12">
      <h1 class="text-h3 my-2">
        API Reference
      </h1>
    </div>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Props</h2>
      <p>Explore the available props for the date picker component</p>
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
            <tr>
              <td>landscape</td>
              <td> specifies the orientation of the component</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>color</td>
              <td>Applies specified color to the component - supports only utility colors (for example <code
                  class="boolean">primary</code>
                or <code class="boolean">secondary</code>)
              </td>
              <td class="string">string</td>
              <td class="string">primary</td>
            </tr>
            <tr>
              <td>no-title</td>
              <td>hide or show the header</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>only-year</td>
              <td>changes the behavior of the component to one of year selection</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>only-month</td>
              <td>changes the behavior of the component to one of month selection</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>close-on-change</td>
              <td>If the component is used within a dialog or menu, this property can be used to indicate that it
                automatically closes the window as soon as a date is selected.</td>
              <td class="string">boolean</td>
              <td class="boolean">false</td>
            </tr>
            <tr>
              <td>model-value</td>
              <td>The v-model value of the component. </td>
              <td class="string">Date|string</td>
              <td class="undefined">undefined</td>
            </tr>
            <tr>
              <td>week-start</td>
              <td>day on which you want the week to start</td>
              <td class="string">number {0...6}</td>
              <td class="string">0</td>
            </tr>
            <tr>
              <td>lng</td>
              <td>component language</td>
              <td class="string">en | es</td>
              <td class="string">'en'</td>
            </tr>
            <tr>
              <td>icon-prev</td>
              <td>Sets the icon for previous month/year button.</td>
              <td class="string">Array&lt;IconPath>
                <e-divider class="my-2" /> IconPath <e-divider class="my-2" /> string
              </td>
              <td class="string">-</td>
            </tr>
            <tr>
              <td>icon-next</td>
              <td>Sets the icon for next month/year button.</td>
              <td class="string">Array&lt;IconPath>
                <e-divider class="my-2" /> IconPath <e-divider class="my-2" /> string
              </td>
              <td class="string">-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>is used to disable the desired dates using the <code class="boolean">DatesConfiguration</code> interface
              </td>
              <td class="string">DatesConfiguration</td>
              <td class="object">{}</td>
            </tr>
            <tr>
              <td>highlighted</td>
              <td>is used to highlight the desired dates using the <code class="boolean">DatesConfiguration</code>
                interface
              </td>
              <td class="string">DatesConfiguration</td>
              <td class="object">{}</td>
            </tr>
            <tr>
              <td>view</td>
              <td>specifies the initial mode of the calendar: day month or year</td>
              <td class="string">datePickerViewType</td>
              <td class="string">day -> 0</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Events</h2>
      <div class="responsive-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>update:modelValue</td>
              <td class="string">Date | string</td>
            </tr>
            <tr>
              <td>update:view</td>
              <td class="string">datePickerViewType</td>
            </tr>
            <tr>
              <td>click:day</td>
              <td class="string">Day</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Slots</h2>
      <div class="responsive-table">
        <table>
          <tbody>
            <tr>
              <td>title</td>
              <td>Slot for the component’s title content.</td>
            </tr>
            <tr>
              <td>header</td>
              <td>Slot for the component’s header content.</td>
            </tr>
          </tbody>
        </table>
      </div>
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
import type { DatesConfiguration, IconPath } from 'drocket';
import { default as githubRepo } from '@/external-links/github'
import { datePickerViewType } from 'drocket';
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
const iconPrev: Ref<Record<string, string | number | IconPath> | undefined> = ref()
const iconNext: Ref<Record<string, string | number | IconPath> | undefined> = ref()
const { $icon } = useNuxtApp()

const arrowLeft = [
  { text: 'menu-left', icon: $icon.menuLeft, value: 1 },
  { text: 'menu-left-outlined', icon: $icon.menuLeftOutlined, value: 2 },
  { text: 'arrow-left-thin', icon: $icon.arrowLeftThin, value: 3 },
]
const arrowRight = [
  { text: 'menu-right', icon: $icon.menuRight, value: 1 },
  { text: 'menu-right-outlined', icon: $icon.menuRightOutlined, value: 2 },
  { text: 'arrow-right-thin', icon: $icon.arrowRightThin, value: 3 },
]

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
const interfaces = [
  {
    title: 'Day',
    code: `export interface Day {
  date: number;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
  isHighlighted: boolean;
  isHighlightStart: boolean;
  isHighlightEnd: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isSaturday: boolean;
  isSunday: boolean;
}`},
  {
    title: 'DatesRange',
    code: `export interface DatesRange {
  from: Date;
  to: Date;
}`
  },
  {
    title: 'datePickerViewType',
    code: `export enum datePickerViewType {
  day,
  month,
  year,
}`
  },
  {
    title: 'DatesConfiguration',
    code: `export interface DatesConfiguration {
  dates?: Array<Date>;
  from?: Date;
  to?: Date;
  daysOfMonth?: Array<number>;
  ranges?: Array<DatesRange>;
  days?: Array<number>;
  customPredictor?: (date: Date) => boolean;
}`
  },
  {
    title: 'Month',
    code: `export interface Month {
  month: string;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
}`
  },
  {
    title: 'Year',
    code: `export interface Year {
  year: number;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
}`
  },
]
const DefaultCode = computed(() => `<template>
  <e-date-picker week-start
    v-model="example" ${landscape.value ? '\n    landscape' : ''} ${noTitle.value ? '\n    no-title' : ''}    
    color="${color.value}" 
    :week-start="${weekStart.value}"${iconNext.value ? '\n    icon-next:="' + iconNext.value.text + '"' : ''}${iconPrev.value ?
    '\n    icon-prev:="' + iconPrev.value.text + '"' : ''}
  />
</template>
`)
const interfaceImport = `import { ... } from ' drocket`

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
const DisabledDatesTsCode = computed(() => `import { DatesConfiguration } from 'drocket';
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
    <ETextfield :modelValue="formatDate(birthDate)" id="event-form-date-picker" input-align="end"
      label="birth date" append-icon="calendar" input-readonly
      @click="integrationDialogModel = true" />
  </e-col>
  <e-col class="d-flex justify-center">
    <EMenu origin="bottom right">
      <template #activator="attrs">
        <ETextfield :modelValue="formatDate(Deadline)" id="event-form-date-picker"
          input-align="end" label="Deadline" append-icon="calendar" input-readonly v-bind="attrs" />
      </template>
      <EDatePicker v-model="Deadline" close-on-change />
    </EMenu>
  </e-col>
</e-row>`)

const yearAndMonthPickerTemplate = computed(() => `<div>
  <ECard>
    <EDatePicker v-model="esPickerModel" lng="es" />
  </ECard>
  <ECard>
    <EDatePicker v-model="enPickerModel" lng="en" />
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
