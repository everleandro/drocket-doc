
import { iconFactory as $icon } from "@/plugins/icons"
import User from "./User"
export interface Role {
    text: string, value: string | number, icon: string
}

export const roleList: Array<Role> = [
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

export default interface Employee extends User {
    roles: Array<Role>
}