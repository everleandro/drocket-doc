<template>
    <div class="white">
        <div class="d-flex px-3">
            <div>
                <h3 :class="['dialog-title', `${state.form.color}--text`]" v-html="modalTitle"></h3>
                <p>Rellena los campos necesarios para crear una nueva jornada:</p>
            </div>
            <ESpacer />
            <!-- <EButton :icon="$icon.clear" @click="closeMenu" /> -->
        </div>

        <EDialog v-model="state.dialogDatePicker" absolute max-width="290">
            <EDatePicker :model-value="state.form.start" :icon-next="$icon.pickerIconeNext" :color="state.form.color"
                :icon-prev="$icon.pickerIconPrev" @update:model-value="datePickerChange($event)" />
        </EDialog>

        <EForm ref="formComponent" v-model="state.formValid" class="ma-0" :color="state.form.color" @submit="submit">
            <ETextField v-model="state.form.name" :rules="[_required]" :readonly="state.loading" placeholder="Titulo"
                cols="14" sm="16" />
            <EColorPicker v-model="state.form.color" :rules="[_required]" label="Color" cols="10" sm="8" retain-color />
            <ESelect v-model="state.form.user" :rules="[_required]" label="Usuario" chip placeholder="Selecciona 1 usuario"
                :item-col="viewport.xs ? 1 : 2" :items="availableUsers" cols="24">
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
            <ESelect v-model="state.form.roles" label="Rol" :disabled="!state.form.user" :rules="[_required]" multiple
                :items="availableRole" cols="24" :detail="roleDetail" :item-col="viewport.xs ? 1 : 2">
                <template #selection="{ selection, attrs }">
                    <EChip :prepend-icon="selection?.icon" v-bind="attrs">
                        {{ selection.text }}
                    </EChip>
                </template>
                <template #item="{ attrs, item }">
                    <e-list-item v-bind="attrs" :prepend-icon="item.icon">
                        {{ item.text }}
                    </e-list-item>
                </template>
            </ESelect>
            <ETimePicker v-model="state.form.start" :rules="[_required]" />
            <ETimePicker v-model="state.form.end" :rules="[_required]" />

            <ETextField :modelValue="formattedDate" :rules="[_required]" :append-icon="$icon.calendar" cols="24" sm="10"
                input-readonly @click="state.dialogDatePicker = true" />

            <EFormColumn cols="24" class="pa-0 mt-4">
                <EButton :color="state.form.color" block depressed type="submit" :disabled="!state.formValid"
                    :loading="state.loading">
                    Aceptar</EButton>
            </EFormColumn>

        </EForm>
    </div>
</template>

<script lang="ts" setup>
import Workday from '@/models/Workday';
import UtilDate from '@/models/date';
import { Form } from '~~/components/shared/form/types';
import { EDIalog as DialogIterface } from '~~/components/shared/dialog/index.vue';
import { ContainerMenuInterface } from '~~/components/shared/menu/types';

export interface Props {
    workday?: Workday,
    date: Date | string,
}
const { $icon } = useNuxtApp()
const { viewport } = useBreakpoint()
const { _required } = useRules()
const formComponent = ref<Form>()

const state = reactive({
    formValid: true,
    loading: false,
    dialogDatePicker: false,
    form: new Workday()
})

const props = defineProps<Props>()

const dialog = inject<DialogIterface | undefined>("EDialog", undefined);
const menuContainer = inject<ContainerMenuInterface | undefined>("EMenuContainer", undefined);


const availableRole = [
    { text: 'instructor', value: 1, icon: $icon.roles.instructor },
    { text: 'monitor de sala', value: 2, icon: $icon.roles.roomInstructor },
    { text: 'entrenador personal', value: 3, icon: $icon.roles.personalTrainer },
    { text: 'servicio al cliente', value: 4, icon: $icon.roles.customerService },
    { text: 'Coordinador', value: 5, icon: $icon.roles.coordination },
    { text: 'Administracion', value: 6, icon: $icon.roles.administration },
    { text: 'Direccion', value: 7, icon: $icon.roles.directorate },
    { text: 'Limpieza', value: 8, icon: $icon.roles.cleaning },
    { text: 'Mantenimiento', value: 9, icon: $icon.roles.maintenance },
    { text: 'Operaciones', value: 10, icon: $icon.roles.operations },
    { text: 'Recepcion', value: 11, icon: $icon.roles.reception },
    { text: 'Recursos Humanos', value: 12, icon: $icon.roles.humanResources },
    { text: 'Supervisor', value: 13, icon: $icon.roles.supervisor },
]

const availableUsers = [
    { text: 'User 1', value: 1, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { text: 'User 2', value: 2, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { text: 'User 3', value: 3, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { text: 'User 4', value: 4, icon: 'customer', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
]

const formattedDate = computed(() => new UtilDate(state.form.start).format('month-DD/month-MM, week-dddd '))
const roleDetail = computed(() => state.form.user ? '' : 'Seleccione primero un usuario')
watch(() => props.workday, (value: Workday | undefined) => {
    reset()
    if (value) {
        state.form = value
    }
})

const emit = defineEmits<{
    (e: 'click:close', value: boolean): void,
    (e: 'submit', value: Workday): void,
    (e: 'update:date', value: string | Date): void,
}>()


const modalTitle = computed((): string => {
    const day = new UtilDate(state.form.start).format('week-dddd')
    return `Crear jornada &#x2022; ${day}`
})

const datePickerChange = (value: Date | string) => {
    const newDay = new Date(value).getDate()
    if (new Date(props.date).getDate() !== newDay)
        emit('update:date', value)
    state.dialogDatePicker = false;
    state.form.start = new UtilDate(state.form.start).set(newDay, 'days').date
}
const closeMenu = () => {
    emit('click:close', true)
}

const reset = (): void => {
    state.form = new Workday()
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