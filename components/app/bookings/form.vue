<template>
    <div class="white">
        <div class="d-flex justify-flex-end px-3">
            <div>
                <h3 :class="['dialog-title', `${state.form.color}--text`]" v-html="modalTitle"></h3>
                <p v-html="modalSubtitle" style="text-transform: capitalize;"></p>
            </div>
            <ESpacer />
            <EButton :icon="$icon.clear" @click="closeMenu" />
        </div>
        <EForm ref="formComponent" v-model="state.formValid" class="ma-0" :color="state.form.color" @submit="submit">
            <ESelect v-model="state.form.user" v-model:search="state.searchUser" :loading="state.loadingUser" return-object
                :rules="[_required]" placeholder="Cliente" autocomplete chip clearable :items="availableUsers" cols="24"
                item-text="name" item-value="id">
                <template #selection="{ selection, attrs }">
                    <EChip :prepend-avatar="selection?.avatar" v-bind="attrs" text avatar-size="32">
                        {{ selection?.name }}
                    </EChip>
                </template>
                <template #item="{ attrs, item }">
                    <e-list-item v-bind="attrs" :prepend-avatar="item.avatar">
                        {{ item.name }}
                    </e-list-item>
                </template>
            </ESelect>

            <ESelect v-model="state.form.product" v-model:search="state.searchProduct" placeholder="Actividad"
                :rules="[_required]" clearable autocomplete :items="availableProducts" item-text="name" item-value="id"
                :loading="state.loadingProduct" retain-color cols="24" return-object>
            </ESelect>

            <ESelect v-model="state.form.employee" v-model:search="state.searchEmployee" :loading="state.loadingEmployee"
                return-object :rules="[_required]" placeholder="Empleado" autocomplete chip clearable item-text="name"
                item-value="id" :items="availableUsers" cols="24">
                <template #selection="{ selection, attrs }">
                    <EChip :prepend-avatar="selection?.avatar" v-bind="attrs" text avatar-size="32">
                        {{ selection?.name }}
                    </EChip>
                </template>
                <template #item="{ attrs, item }">
                    <e-list-item v-bind="attrs" :prepend-avatar="item.avatar">
                        {{ item.name }}
                    </e-list-item>
                </template>
            </ESelect>
            <ETimePicker v-model="state.form.start" label="Inicio" :rules="[_required]" cols="12" />
            <ETimePicker v-model="state.form.end" label="Fin" :rules="[_required]" cols="12" />
        </EForm>
        <EForm no-gutters outlined label-min-width="60" class="pa-4">
            <ETextField :model-value="state.form.user?.email" label="Email" readonly cols="24" />
            <ETextField :model-value="state.form.user?.phone" label="Teléfono" readonly cols="24" />
        </EForm>
        <EButton :color="state.form.color" block depressed type="submit" :disabled="!state.formValid" @click="submit"
            :loading="state.loading">
            Aceptar</EButton>
    </div>
</template>

<script lang="ts" setup>
import Booking from '~~/models/Booking';
import { Form } from '~~/components/shared/form/types';
import { EDIalog } from '~~/components/shared/dialog/index.vue';
import UtilDate from '~~/models/date'
import { ContainerMenuInterface } from '~~/components/shared/menu/types';

export interface Props {
    booking?: Booking,
}

const { $icon } = useNuxtApp()
const { _required } = useRules()
const formComponent = ref<Form>()

const state = reactive({
    formValid: true,
    dialogDatePicker: false,
    loading: false,
    searchProduct: "",
    searchUser: "",
    searchEmployee: "",
    searchTimer: 0,
    loadingProduct: false,
    loadingEmployee: false,
    loadingUser: false,
    form: new Booking()
})

const props = defineProps<Props>()

const dialog = inject<EDIalog | undefined>("EDialog", undefined);
const menuContainer = inject<ContainerMenuInterface | undefined>("EMenuContainer", undefined);

const users = [
    { name: 'User 1', id: 1, email: 'as1@asd.com', phone: '123 345 678', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { name: 'User 2', id: 2, email: 'as2@asd.com', phone: '999 567 234', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { name: 'User 3', id: 3, email: 'as3@asd.com', phone: '876 234 567', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
    { name: 'User 4', id: 4, email: 'as4@asd.com', phone: '876 895 234', avatar: "https://cdn.vuetifyjs.com/images/john.png" },
]

const availableUsers = ref([...users])

const products = [
    { name: '108 horas bajo el sol', id: 1, color: 'primary' },
    { name: 'Afrodance', id: 2, color: 'carnation' },
    { name: 'Bachata', id: 3, color: 'biloba-flower' },
    { name: 'Americano Padel', id: 4, color: 'carnation' },
    { name: 'Bailamos por sevillanas', id: 5, color: 'salmon' },
    { name: 'Body Art', id: 6, color: 'carnation' },
    { name: 'Dana Oriental', id: 7, color: 'danube' },
    { name: 'Dance', id: 8, color: 'danube' },
    { name: 'Calistena', id: 9, color: 'cape-palliser' },
    { name: 'Body n', id: 10, color: 'primary' },
    { name: 'Body combar', id: 11, color: 'salmon' },
    { name: 'Boxeo', id: 12, color: 'primary' },
]

const availableProducts = ref([...products])


watch(() => state.searchProduct, (value: string) => {
    if (value) {
        if (state.searchTimer) clearTimeout(state.searchTimer)
        state.loadingProduct = true;
        state.searchTimer = window?.setTimeout(() => {
            availableProducts.value = [...products].filter(
                ({ name }) => { return name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1 }
            )
            state.loadingProduct = false;
        }, 1000)
    } else {
        availableProducts.value = [...products]
    }
})

watch(() => state.searchUser, (value: string) => {
    if (value) {
        if (state.searchTimer) clearTimeout(state.searchTimer)
        state.loadingUser = true;
        state.searchTimer = window?.setTimeout(() => {
            availableUsers.value = [...users].filter(
                ({ name }) => { return name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1 }
            )
            state.loadingUser = false;
        }, 1000)
    } else {
        availableUsers.value = [...users]
    }
})

watch(() => state.searchEmployee, (value: string) => {
    if (value) {
        if (state.searchTimer) clearTimeout(state.searchTimer)
        state.loadingEmployee = true;
        state.searchTimer = window?.setTimeout(() => {
            availableUsers.value = [...users].filter(
                ({ name }) => { return name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1 }
            )
            state.loadingEmployee = false;
        }, 1000)
    } else {
        availableUsers.value = [...users]
    }
})

watch(() => props.booking, (value: Booking | undefined) => {
    reset()
    if (value) {
        state.form = value
    }
})

const emit = defineEmits<{
    (e: 'click:close', value: boolean): void,
    (e: 'submit', value: Booking): void,
    (e: 'update:date', value: string | Date): void,
}>()

const modalTitle = computed((): string => {
    return `Crear reserva`
})

const modalSubtitle = computed((): string => {
    const day = new UtilDate(state.form.start).format('week-dddd month-DD/month-MM/year-YY')
    return `${day} &#x2022; Nombre`
})

const closeMenu = () => {
    emit('click:close', true)
}

const reset = (): void => {
    state.form = new Booking()
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