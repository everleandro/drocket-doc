<template>
    <ClientOnly>
        <ECard :class="cardClass">
            <EAvatar v-bind="avatarAttrs" />
            <ECardContainer>
                <h3 class="title">{{ modelValue.name }}</h3>
                <p>
                    <EIcon :name="$icon.phone" class="mr-4" /> <span>{{ modelValue.phone || '' }}</span>
                </p>
            </ECardContainer>
            <EMenu width="200" origin="right bottom" transition="scale">
                <template #activator="attrs">
                    <EButton v-bind="attrs" :icon="$icon.dotsVertical" />
                </template>
                <e-list color="primary" dense>
                    <e-list-item :prepend-icon="$icon.accountEdit" @click="goToDetails()">
                        editar
                    </e-list-item>
                    <e-list-item :prepend-icon="$icon.accountCancel">
                        Desactivar
                    </e-list-item>
                </e-list>
            </EMenu>
            <template v-if="cardType === type.employee" #footer>
                <div class="pa-1 user-card__footer">
                    <EDivider v-if="employeeValue.roles.length > 0" class="mt-n1 mb-1" />
                    <EChip v-for="(role, index) in employeeValue.roles" class="ma-1" :key="index" :prepend-icon="role.icon">
                        {{ role.text }}
                    </EChip>
                </div>
            </template>
        </ECard>
    </ClientOnly>
</template>
<script lang="ts">
export enum type { admin, customer, employee }
export enum mode { list, grid }
import Employee from "@/models/employee"
import Customer from "@/models/customer"
</script>
<script lang="ts" setup>
export interface Props {
    cardType?: type
    gridMode?: boolean
    color?: string,
    modelValue: Partial<Employee> | Partial<Customer>
}
const router = useRouter()
const route = useRoute()

const { $icon } = useNuxtApp()
const props = withDefaults(defineProps<Props>(), { color: 'primary', type: type.customer, mode: mode.list })

const avatarAttrs = computed(() => {
    return props.modelValue.avatar ? { src: props.modelValue.avatar } : { color: props.color, icon: $icon.roles.directorate }
})

const cardClass = computed(() => {
    const classes = ['user-card']
    if (props.gridMode) classes.push('user-card--grid-mode')
    return classes
})

const goToDetails = () => {
    router.push({
        path: `${route.path}/${props.modelValue.id}`
    })
}

const employeeValue = computed(() => props.modelValue as Employee)
</script>
<style lang="scss" >
.user-card {
    height: 100%;

    &__footer {
        flex: 1 1 100%;
    }

    &--grid-mode {
        flex-direction: column;

        .user-card {
            &__footer {
                flex: unset;
            }


        }

        button[aria-hasmenu] {
            position: absolute;
            top: 0;
            right: 0;
        }

        .e-card {
            &__container {

                h3,
                p {
                    text-align: center;
                }
            }
        }

        .e-avatar {
            &__wrapper {
                margin: auto;
            }
        }

    }


}
</style>