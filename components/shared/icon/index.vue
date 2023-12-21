<template>
    <client-only>
        <i ref="iconElement" v-cloak aria-hidden="true" :class="iconClass">
            <slot>
                <svg v-if="isPath" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" role="img" aria-hidden="true"
                    class="e-icon__svg">
                    <path v-for="(line, i) in paths" v-bind="(bindPathAttributes(line) as Object)" :key="i"></path>
                </svg>

            </slot>
        </i>
    </client-only>
</template>
<script lang="ts" setup>

export type IconPath = { d: string, fill?: string, class?: string }
export type IconClassKeys = 'xSmall' | 'small' | 'large' | 'xLarge' | 'disabled'
const { isObject } = useUtils()
export interface IconItem {
    name: string
    description?: string
    useLocation?: string
}
const attrs = useAttrs()
export interface Props {
    color?: string
    disabled?: boolean
    preffix?: string
    viewBox?: string,
    icon?: Array<IconPath> | IconPath | string
    small?: boolean
    xSmall?: boolean
    large?: boolean
    xLarge?: boolean
}

const props = withDefaults(defineProps<Props>(), { viewBox: '0 0 24 24' })

const availableRootClasses = {
    xSmall: 'e-icon--size-x-small',
    small: 'e-icon--size-small',
    disabled: 'e-icon--disabled',
    large: 'e-icon--size-large',
    xLarge: 'e-icon--size-x-large'
};
const paths = computed((): Array<IconPath> => {
    if (!isPath) {
        return []
    } else if (isObject(props.icon)) {
        return [props.icon as IconPath]
    } else return props.icon as Array<IconPath>
})

const iconElement = ref(null)

const bindPathAttributes = (
    path: IconPath
): Object => {
    const d = typeof path === 'string' ? path : path?.d;
    let result: IconPath = { d };
    if (typeof path === 'object' && path?.fill) {
        result.class = `${path.fill}--text`;
    }
    return result;
}
const isPath = computed(() => {
    return typeof props.icon !== 'string'
})

const iconClass: ComputedRef<Array<string>> = computed((): Array<string> => {
    const rootVar = window.getComputedStyle(document.documentElement);
    const iconClass = rootVar.getPropertyValue('--icon-class');
    const iconPreffix = rootVar.getPropertyValue('--icon-prefix');
    const defaultClass = attrs.class ? `${attrs.class}` : ''
    let classes = ['e-icon', iconClass, defaultClass];
    const defaultSize = !(props.small || props.xSmall || props.large || props.xLarge);
    defaultSize && classes.push("e-icon--size-default")
    !isPath && classes.push(`${(props.preffix || iconPreffix).trim()}${(props.icon as string).trim()}`);
    props.color && (classes.push(`${props.color}--text`));

    const availableRootClassKeys = Object.keys(availableRootClasses) as Array<IconClassKeys>
    const classes2 = availableRootClassKeys.filter(
        (key) => !!props[key]
    ).map(key => availableRootClasses[key]);
    return [...classes, ...classes2]
})

</script>
<style lang="scss" src="./style.scss"></style>
  