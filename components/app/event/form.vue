<template>
    <div class="white">

        <EDialog v-model="state.dialogDatePicker" max-width="290" absolute>
            <EDatePicker :model-value="state.form.dateChange" :rules="[_required]" :icon-next="$icon.pickerIconeNext"
                :color="state.form.color" :icon-prev="$icon.pickerIconPrev"
                @update:model-value="updateDateChange($event)" />
        </EDialog>

        <div class="d-flex justify-flex-end px-3">
            <div>
                <h3 :class="['dialog-title', `${state.form.color}--text`]" v-html="modalTitle"></h3>
                <p>Rellena los campos necesarios para crear un nuevo evento:</p>
            </div>
            <ESpacer />
            <EButton :icon="$icon.clear" @click="closeMenu" />
        </div>
        <EForm ref="formComponent" v-model="state.formValid" class="ma-0" :color="state.form.color" @submit="submit">
            <ESelect v-model="state.form.activityId" v-model:search="state.searchActivity" :rules="[_required]" clearable
                autocomplete :items="availableActivity" :loading="state.loadingActivity" retain-color cols="24"
                line-width="5">
            </ESelect>

            <ESelect v-model="state.form.user" :rules="[_required]" label="Monitor" chip :items="availableUsers" cols="24">
                <template #selection="{ selection }">
                    <EChip :prepend-avatar="selection?.avatar" :avatar-size="32" text>
                        {{ selection?.text }}
                    </EChip>
                </template>
                <template #item="{ attrs, item }">
                    <e-list-item v-bind="attrs" :prepend-avatar="item.avatar">
                        {{ item.text }}
                    </e-list-item>
                </template>
            </ESelect>

            <ETimePicker v-model="state.form.start" :rules="[_required]" />
            <ETimePicker v-model="state.form.end" :rules="[_required]" />

            <ECheckbox v-model="state.form.rotating" label="sesiones rotativas" cols="16" />
            <ETextField v-model="state.form.target" label="Obj." type="number" cols="8" />
            <ETextField :modelValue="formattedDate" id="event-form-date-picker" input-align="end"
                label="Aplicar Cambios desde" :append-icon="$icon.calendar" cols="24" input-readonly
                @click="state.dialogDatePicker = true" />

            <EFormColumn cols="24" class="pa-0 mt-4">
                <EButton :color="state.form.color" block depressed type="submit" :disabled="!state.formValid"
                    :loading="state.loading">
                    Aceptar</EButton>
            </EFormColumn>

        </EForm>
    </div>
</template>

<script lang="ts" setup>
import ScheduleEvent from '~~/models/Event';
import UtilDate from '@/models/date';
import { Form } from '~~/components/shared/form/types';
import { EDIalog } from '~~/components/shared/dialog/index.vue';
import { ContainerMenuInterface } from '~~/components/shared/menu/types';

export interface Props {
    event?: ScheduleEvent
}
const { $icon } = useNuxtApp()
const { _required } = useRules()
const formComponent = ref<Form>()

const state = reactive({
    formValid: true,
    dialogDatePicker: false,
    loading: false,
    searchActivity: "",
    searchActivityTimer: 0,
    loadingActivity: false,
    form: new ScheduleEvent()
})

const props = defineProps<Props>()

const dialog = inject<EDIalog | undefined>("EDialog", undefined);
const menuContainer = inject<ContainerMenuInterface | undefined>("EMenuContainer", undefined);

const availableUsers = [
    { text: 'User 1', value: 1, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { text: 'User 2', value: 2, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { text: 'User 3', value: 3, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { text: 'User 4', value: 4, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
]

const activities = [
    { text: '108 horas bajo el sol', value: 1, color: 'primary' },
    { text: 'Afrodance', value: 2, color: 'carnation' },
    { text: 'Bachata', value: 3, color: 'biloba-flower' },
    { text: 'Americano Padel', value: 4, color: 'carnation' },
    { text: 'Bailamos por sevillanas', value: 5, color: 'salmon' },
    { text: 'Body Art', value: 6, color: 'carnation' },
    { text: 'Dana Oriental', value: 7, color: 'danube' },
    { text: 'Dance', value: 8, color: 'danube' },
    { text: 'Calistena', value: 9, color: 'cape-palliser' },
    { text: 'Body n', value: 10, color: 'primary' },
    { text: 'Body combar', value: 11, color: 'salmon' },
    { text: 'Boxeo', value: 12, color: 'primary' },
]

const availableActivity = ref([...activities])

const formattedDate = computed(() => new UtilDate(state.form.dateChange).format('month-DD/month-MM/year-YYYY'))

watch(() => state.form.activityId, (activity: undefined | number | string) => {
    if (activity) {
        state.form.color = activities.find((({ value }) => `${value}` === `${activity}`))?.color || 'primary'
    }
})

watch(() => state.searchActivity, (value: string) => {
    if (value) {
        if (state.searchActivityTimer) clearTimeout(state.searchActivityTimer)
        state.loadingActivity = true;
        state.searchActivityTimer = window?.setTimeout(() => {
            availableActivity.value = availableActivity.value.filter(
                ({ text }) => { return text.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1 }
            )
            state.loadingActivity = false;
        }, 1000)
    } else {
        availableActivity.value = [...activities]
    }
})

watch(() => props.event, (value: ScheduleEvent | undefined) => {
    reset()
    if (value) {
        state.form = value
    }
})

const emit = defineEmits<{
    (e: 'click:close', value: boolean): void,
    (e: 'submit', value: ScheduleEvent): void,
    (e: 'update:date', value: string | Date): void,
}>()
const updateDateChange = (value: Date | string) => {
    state.form.dateChange = value;
    state.dialogDatePicker = false;
}

const modalTitle = computed((): string => {
    return `Crear jornada &#x2022; Horario Habitual`
})

const closeMenu = () => {
    emit('click:close', true)
}

const reset = (): void => {
    state.form = new ScheduleEvent()
    nextTick(() => {
        formComponent.value?.reset()
    })
}
const submit = async () => {
    const valid = await formComponent.value?.validate()
    if (valid) {
        state.loading = true;
        const id = state.form.id === 'new' ? Math.random() : state.form.id
        setTimeout(async () => {
            emit('submit', { ...state.form, id })
            state.loading = false;
            dialog?.close(true);
            menuContainer?.closeMenu();
            await nextTick()
            reset()
        }, 300)
    }

}
</script>
<style lang="scss">
.e-menu-container[data-session-form-date-picker] {
    z-index: 10;
}
</style>