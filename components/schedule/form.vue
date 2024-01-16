<template>
    <e-dialog v-model="modelDialog" max-width="500">
        <div class="white">
            <div class="d-flex justify-flex-end px-3">
                <div>
                    <h3 :class="['dialog-title', `${modelValue.color}--text`]" v-html="modalTitle"></h3>
                    <p>Fill in the necessary fields to create a new event:</p>
                </div>
                <ESpacer />
                <EButton :icon="$icon.clear" text @click="close" />
            </div>
            <EForm ref="formComponent" v-model="state.formValid" class="ma-0" :color="loclalForm?.color" @submit="submit">
                <ESelect v-model="loclalForm.entityId" v-model:search="state.searchSpace" :rules="[_required]" clearable
                    autocomplete :items="availableSpaces" item-text="label" item-value="id" :loading="state.loadingActivity"
                    retain-color cols="24" line-width="5">
                </ESelect>
                <ETextfield v-model="loclalForm.name" :rules="[_required]" label="Name" cols="24" />
                <ETimePicker v-model="loclalForm.start" label="start" :rules="[_required]" />
                <ETimePicker v-model="loclalForm.end" label="end" :rules="[_required]" />
                <EFormColumn cols="24" class="pa-0 mt-4">
                    <EButton :color="modelValue.color" block depressed type="submit" :disabled="!state.formValid"
                        :loading="state.loading">
                        Aceptar
                    </EButton>
                </EFormColumn>
            </EForm>
        </div>
    </e-dialog>
</template>

<script lang="ts" setup>
import type { ScheduleEvent, EForm, ScheduleSpace } from 'drocket';

export interface Props {
    event?: ScheduleEvent,
    active: boolean,
    spaces: Array<ScheduleSpace>,
    modelValue: Partial<ScheduleEvent>,
}
const props = defineProps<Props>()

type Form = typeof EForm;

const { $icon } = useNuxtApp()
const { _required } = useRules()
const formComponent = ref<Form>()

const state = reactive({
    formValid: true,
    activity: "",
    dialogDatePicker: false,
    loading: false,
    searchSpace: "",
    searchSpaceTimer: 0,
    loadingActivity: false,
})

const modelDialog = computed({
    get: (): boolean => props.active,
    set: (value: boolean): void => {
        emit('update:active', value)
    }
})

const loclalForm: Ref<Partial<ScheduleEvent>> = ref({
    id: 'new',
    start: new Date(),
    end: new Date(),
    color: 'primary',
})



const availableSpaces = ref([...props.spaces])

watch(() => state.searchSpace, (value: string) => {
    if (value) {
        if (state.searchSpaceTimer) clearTimeout(state.searchSpaceTimer)
        state.loadingActivity = true;
        state.searchSpaceTimer = window?.setTimeout(() => {
            availableSpaces.value = availableSpaces.value.filter(
                ({ label }) => { return label.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1 }
            )
            state.loadingActivity = false;
        }, 1000)
    } else {
        availableSpaces.value = [...props.spaces]
    }
})


watch(() => props.modelValue, (value: Partial<ScheduleEvent>) => {
    if (value) {
        loclalForm.value = { ...value }
    }
})

watch(() => modelDialog.value, (value: boolean) => {
    if (value) {
        reset()
    }
})

const emit = defineEmits<{
    (e: 'click:close', value: boolean): void,
    (e: 'submit', value: ScheduleEvent): void,
    (e: 'update:active', value: Boolean): void,
}>()

const modalTitle = computed((): string => {
    return `New Event`
})

const close = () => {
    emit('update:active', false)
}

const reset = (): void => {

    nextTick(() => {
        formComponent.value?.reset()
    })
}
const submit = async () => {
    const valid = await formComponent.value?.validate()
    if (valid) {
        emit('submit', loclalForm.value as ScheduleEvent)
    }

}   
</script>
<style lang="scss">
.e-menu-container[data-session-form-date-picker] {
    z-index: 10;
}
</style>