<template>
    <div :class="chipClass" draggable="false">
        <div v-if="hasPrepend" class="e-chip__prepend">
            <slot name="prepend">
                <EIcon v-if="prependIcon" :name="prependIcon" />
                <EAvatar v-if="prependAvatar" :size="avatarSize" :src="prependAvatar" />
            </slot>
        </div>
        <div class="e-chip__underlay"></div>
        <slot></slot>

        <div class="e-chip__append">
            <slot name="append">
                <EIcon v-if="appendIcon" :name="appendIcon" />
                <EAvatar v-if="appendAvatar" :size="32" :src="appendAvatar" />
            </slot>
        </div>
        <div v-if="closable" class="e-chip__close" aria-label="Close">
            <button v-ripple="{ center: true }" type="button" class="e-btn e-btn--icon" @click="handleClickClose">
                <EIcon name="close" />
            </button>
        </div>
    </div>
</template>
<script lang="ts">
export default { name: "Chip" }
</script>
<script lang="ts" setup>
export interface Props {
    closable?: boolean
    color?: string
    text?: boolean
    prependAvatar?: string
    avatarSize?: string | number
    appendAvatar?: string
    appendIcon?: string
    prependIcon?: string
}

const props = withDefaults(defineProps<Props>(), { avatarSize: 27 })
const slots = useSlots()
const chipClass = computed(() => {
    const classes = ['e-chip e-chip--size-default']
    props.text && classes.push('e-chip--text')
    props.color && classes.push(`${props.color}--text`)
    return classes
})
const emit = defineEmits<{
    (e: 'click:close', value: Event): void
}>()

const handleClickClose = (evt: Event) => {
    emit('click:close', evt)
}

const hasPrepend = computed((): boolean => {
    return !!slots.prepend || !!props.prependAvatar || !!props.prependIcon;
})

</script>
<style lang="scss" src="./style.scss"></style>