
import { ScheduleEvent } from "~~/components/shared/schedule/types";
export default class Event implements ScheduleEvent {
    name: string
    color: string = 'primary'
    user: string | number | null
    roles: Array<string | number> = []
    start: Date | string
    end: Date | string
    entityId: number | string
    spaceId: string | number
    id: number | string | null
    footer?: string | number | null;
    subtitle?: string | number | null;
    activityId?: number | string
    target: number | string | null
    rotating: boolean
    dateChange: Date | string

    constructor(props?: Partial<Event>) {
        this.start = new Date(props?.start || new Date());
        this.end = new Date(props?.end || new Date());
        this.name = props?.name || ''
        this.entityId = props?.entityId || props?.spaceId || ''
        this.spaceId = props?.spaceId || props?.entityId || ''
        this.id = props?.id || 'new'
        this.color = props?.color || 'primary'
        this.roles = props?.roles || []
        this.user = props?.user || null
        this.target = props?.target || null
        this.rotating = !!props?.rotating
        this.activityId = props?.activityId
        this.dateChange = props?.dateChange || new Date()
    }
}