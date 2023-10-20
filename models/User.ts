export interface UserInterface {
    name: string,
    phone?: string,
    email: string,
    address?: string,
    lastName?: string,
    avatar?: string,
    id: string | number | null
}

export default class User implements UserInterface {
    name: string
    phone?: string
    email: string
    id: string | number | null
    address?: string
    lastName?: string
    avatar?: string

    constructor(props?: Partial<User>) {
        this.name = props?.name || ''
        this.email = props?.email || ''
        this.lastName = props?.lastName || ''
        this.address = props?.address || ''
        this.phone = props?.phone
        this.id = props?.id || null
        this.avatar = props?.avatar || ''
    }
}