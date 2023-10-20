
import User from './User'
import Product from './Product'
import Employee from './employee'
import { ScheduleEvent } from "~~/components/shared/schedule/types";

export default class Booking implements ScheduleEvent {
    name: string
    color: string = 'primary'
    user?: Partial<User>
    entityId: string | number
    product?: Partial<Product>
    start: Date | string
    end: Date | string
    employee?: Partial<Employee>
    spaceId?: string | number
    footer?: string | number | null;
    subtitle?: string | number | null;
    id: number | string | null

    constructor(props?: Partial<Booking>) {
        this.name = props?.name || ''
        this.color = props?.color || 'primary'
        this.user = props?.user
        this.id = props?.id || 'new'
        this.product = props?.product
        this.start = new Date(props?.start || new Date());
        this.end = new Date(props?.end || new Date());
        this.employee = props?.employee
        this.entityId = props?.entityId || props?.spaceId || ''
        this.spaceId = props?.spaceId || props?.entityId || ''
        this.subtitle = props?.subtitle
        this.subtitle = props?.footer
    }
}