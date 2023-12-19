<template>
    <client-only>
        <i ref="iconElement" v-cloak aria-hidden="true" :class="iconClass">
            <slot>
                <svg v-if="path" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" role="img" aria-hidden="true"
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

export interface Props {
    color?: string
    disabled?: boolean
    preffix?: string
    name?: string
    viewBox?: string,
    path?: Array<IconPath> | IconPath
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
    if (!props.path) {
        return []
    } else if (isObject(props.path)) {
        return [props.path as IconPath]
    } else return props.path as Array<IconPath>
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

const iconClass: ComputedRef<Array<string>> = computed((): Array<string> => {
    const rootVar = window.getComputedStyle(document.documentElement);
    const iconClass = rootVar.getPropertyValue('--icon-class');
    const iconPreffix = rootVar.getPropertyValue('--icon-prefix');
    let classes = ['e-icon', iconClass];
    const defaultSize = !(props.small || props.xSmall || props.large || props.xLarge);
    defaultSize && classes.push("e-icon--size-default")
    props.name && classes.push(`${(props.preffix || iconPreffix).trim()}${props.name.trim()}`);
    props.color && (classes.push(`${props.color}--text`));

    const availableRootClassKeys = Object.keys(availableRootClasses) as Array<IconClassKeys>
    const classes2 = availableRootClassKeys.filter(
        (key) => !!props[key]
    ).map(key => availableRootClasses[key]);
    return [...classes, ...classes2]
})

</script>
<style lang="scss" src="./style.scss"></style>
  