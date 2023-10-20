
import { ScheduleEvent } from "~~/components/shared/schedule/types";
export default class Workday implements ScheduleEvent {
    name: string
    entityId: number | string
    spaceId: string | number
    start: Date | string
    end: Date | string
    color: string = 'primary'
    id: number | string | null
    roles: Array<string | number> = []
    user: string | number | null
    footer?: string | number | null;
    subtitle?: string | number | null;

    constructor(props?: Partial<Workday>) {
        this.start = new Date(props?.start || new Date());
        this.end = new Date(props?.end || new Date());
        this.name = props?.name || ''
        this.entityId = props?.entityId || props?.spaceId || ''
        this.spaceId = props?.spaceId || props?.entityId || ''
        this.id = props?.id || 'new'
        this.color = props?.color || 'primary'
        this.roles = props?.roles || []
        this.user = props?.user || null
    }

}