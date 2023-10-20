<template>
    <component v-ripple :is="tag" :class="btnClass" :style="style" @mouseover="handleHover(true)"
        @mouseleave="handleHover(false)">
        <span v-show="props.loading" class="e-btn__loader">
            <slot name="loading">
                <div role="progressbar" aria-valuemin="0" aria-valuemax="100"
                    class="e-progress-circular e-progress-circular--visible e-progress-circular--indeterminate"
                    style="height: 23px; width: 23px">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
                        style="transform: rotate(0deg)">
                        <circle fill="transparent" cx="43.80952380952381" cy="43.80952380952381" r="20"
                            stroke-width="3.8095238095238093" stroke-dasharray="125.664"
                            stroke-dashoffset="125.66370614359172px" class="e-progress-circular__overlay"></circle>
                    </svg>
                </div>
            </slot>
        </span>
        <div v-if="prependIcon" class="e-btn__prepend">
            <EIcon :name="prependIcon" />
        </div>
        <span class="e-btn__content">
            <slot name="default">
                <template v-if="icon">
                    <EIcon :name="icon" :path="path" />
                </template>
            </slot>
        </span>
        <div v-if="appendIcon" class="e-btn__append">
            <EIcon :name="appendIcon" />
        </div>
    </component>
</template>
<script lang="ts" setup>
import { IconPath } from '@/components/shared/icon/index.vue'

export type ButtonClassKeys = 'stacked' | 'disabled' | 'ripple' | 'loading' | 'fab' |
    'depressed' | 'text' | 'outlined' | 'block' | 'small' | 'xSmall' | 'large' | 'xLarge' | 'rounded' | 'icon'

export interface Props {
    disabled?: boolean
    appendIcon?: string
    prependIcon?: string
    ripple?: boolean
    loading?: boolean
    color?: string
    hoverColor?: string
    fab?: boolean
    depressed?: boolean
    text?: boolean
    outlined?: boolean
    block?: boolean
    small?: boolean
    xSmall?: boolean
    large?: boolean
    xLarge?: boolean
    rounded?: boolean
    stacked?: boolean
    icon?: string
    path?: Array<IconPath>
    height?: string
    width?: boolean
}
const configuration = reactive({
    hovered: false
})
const attrs = useAttrs()
const props = defineProps<Props>()

const availableRootClasses: Record<ButtonClassKeys, string> = {
    disabled: 'e-btn--disabled',
    icon: 'e-btn--icon',
    depressed: 'e-btn--depressed',
    text: 'e-btn--text',
    ripple: 'v-ripple-element',
    fab: 'e-btn--fab',
    block: 'e-btn--block',
    loading: 'e-btn--loading',
    outlined: 'e-btn--outlined',
    rounded: 'e-btn--rounded',
    xSmall: 'e-btn--size-x-small',
    small: 'e-btn--size-small',
    large: 'e-btn--size-large',
    stacked: 'e-btn--stacked',
    xLarge: 'e-btn--size-x-large'
};

const tag = computed(() => attrs.to ? 'RouterLink' : 'Button')

const btnClass = computed((): Array<string> => {
    const classes = ['e-btn']
    const defaultSize = !(props.small || props.xSmall || props.large || props.xLarge);
    if (configuration.hovered && props.hoverColor)
        classes.push(`e-btn--${props.hoverColor}`)
    else if (props.color)
        classes.push(`e-btn--${props.color}`)
    defaultSize && classes.push("e-btn--size-default")

    const availableRootClassKeys = Object.keys(availableRootClasses) as Array<ButtonClassKeys>
    const classes2 = availableRootClassKeys.filter(
        (key) => !!props[key]
    ).map(key => availableRootClasses[key]);

    return [...classes, ...classes2];
})
const handleHover = (value: boolean) => {
    configuration.hovered = value;
}
const style = (): Record<string, string> => {
    const _height: string = props.height ? `${props.height}px !important;` : 'unset';
    const result: Record<string, string> = {}
    props.height && (result['height'] = `${props.height}px !important;`)
    props.width && (result['width'] = `${props.width}px !important;`)
    return result
}
</script>

<style lang="scss" src="./style.scss"></style>
  