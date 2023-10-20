
import { ScheduleEvent } from "~~/components/shared/schedule/types";
export default class Session implements ScheduleEvent {
    name: string
    entityId: number | string
    start: Date | string
    end: Date | string
    color: string = 'primary'
    id: number | string | null
    roles: Array<string | number> = []
    activityId: number | string | null
    user: Array<string | number | null>
    footer?: string | number | null;
    subtitle?: string | number | null;
    target: number | string | null

    constructor(props?: Partial<Session>) {
        this.start = new Date(props?.start || new Date());
        this.end = new Date(props?.end || new Date());
        this.name = props?.name || ''
        this.entityId = props?.entityId || ''
        this.id = props?.id || 'new'
        this.color = props?.color || 'primary'
        this.roles = props?.roles || []
        this.user = props?.user || []
        this.activityId = props?.activityId || null
        this.target = props?.target || null
    }

}