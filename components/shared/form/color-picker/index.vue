<template>
    <div :class="colorPickerClass">
        <div class="e-field__control" v-click-outside="handleOutsideMenu">
            <div role="button" aria-expanded="false" class="e-field__slot">
                <div v-if="prependIcon" class="e-field__prepend-inner" @click="handleClickPrependIcon">
                    <div class="e-field__icon e-field__icon--prepend-inner">
                        <EIcon :name="prependIcon" />
                    </div>
                </div>
                <div class="e-field__overlay"></div>
                <div class="e-select__slot e-field__field" @click="openMenu" @mouseenter="handleHover(true)"
                    @mouseleave="handleHover(false)">
                    <label :for="id" :class="[textColor, 'e-label']" :style="labelStyle">
                        <slot name="label"> {{ label }} </slot>
                    </label>
                    <div :class="['e-select__selections', textColor]">
                        <div v-if="showPlaceholder" class="e-select__selection" :style="selectionStyle">
                            <span class="e-select__selection-placeholder">
                                {{ placeholder }}
                            </span>
                        </div>

                        <div v-else class="e-select__selection" :style="selectionStyle">
                            <div class="color-container"></div>
                        </div>
                    </div>
                    <input :id="id" readonly type="text" aria-readonly="false" autocomplete="off" @blur="handleBlur"
                        @focus="handlePickerFocus" />

                    <div class="e-field__append-inner">
                        <div class="e-field__icon e-field__icon--append">
                            <EIcon :name="arrowDown || $icon?.arrowDown" class="flip-icon"></EIcon>
                        </div>
                    </div>
                </div>

                <div v-if="appendIcon" class="e-field__append-inner" @click="handleClickAppendIcon">
                    <div class="e-field__icon e-field__icon--append">
                        <EIcon :name="appendIcon" />
                    </div>
                </div>
                <div v-if="!outlined" class="e-field__line"></div>
                <div class="e-menu">
                    <transition name="fade">
                        <div v-show="opened" class="e-menu__content">
                            <e-list :color="color">
                                <e-list-item v-for="(item, index) in items" :key="index" :color="item"
                                    :class="{ 'e-list-item--active': item === modelValue }" @click="handleClickItem(item)">
                                    <slot name="item" :item="item">
                                        <div class="color-container"></div>
                                    </slot>
                                </e-list-item>
                            </e-list>
                        </div>
                    </transition>
                </div>
            </div>
            <EDetails :details="details" :textColorClass="textColor" :showDetails="showDetails"></EDetails>
        </div>
    </div>
</template>
<script lang="ts">
import { colors } from "./constants"
export default { name: "ColorPicker" }
</script>
<script lang="ts" setup>
export interface Props {
    items?: Array<string>; arrowDown?: string; multiple?: boolean, inputAlign?: string
    disabled?: boolean; dense?: boolean; readonly?: boolean; retainColor?: boolean;
    labelInline?: boolean; detail?: string; outlined?: boolean; label?: string | number;
    modelValue: string; placeholder?: string; color?: string;
    detailErrors?: Array<string>; detailsOnMessageOnly?: boolean; appendIcon?: string;
    labelMinWidth?: string; prependIcon?: string; rules?: Array<(param: any) => string | boolean>;
    cols?: string | number; xs?: string | number; sm?: string | number; md?: string | number;
    lg?: string | number; xl?: string | number;
}

const props = withDefaults(defineProps<Props>(), { items: () => colors, inputAlign: 'start' })
const { $icon } = useNuxtApp() || {}
const emit = defineEmits<{
    (e: 'click:prepend'): void,
    (e: 'focus', value: FocusEvent): void,
    (e: 'click:append'): void, (e: 'blur', value: Event): void,
    (e: 'update:modelValue', value: string): void
}>()
const opened = ref<boolean>(false)
const { fieldClass, dirty, id, focused, showDetails, textColor, color,
    details, labelStyle, handleHover, handleBlur, handleClickPrependIcon,
    handleClickAppendIcon, handleFocus, setInputFocus } = useField()
const { gridClass } = useGrid('e-field')


const colorPickerClass = computed(() => {
    const result = [...fieldClass.value, 'e-color-picker e-select', ...gridClass.value]
    opened.value && result.push('e-select--is-open')
    return result
})


const handleOutsideMenu = (): void => {
    dirty.value = true;
    closeMenu()
}
const handleClickItem = (item: string) => {
    changeValue(item)
    closeMenu()
}

const closeMenu = (): void => {
    opened.value = false;
    focused.value = false;
}

const openMenu = (): void => {
    opened.value = true;
}

const handlePickerFocus = (event: FocusEvent): void => {
    opened.value = true;
    handleFocus(event)
}
const showPlaceholder = computed((): boolean => props.modelValue === undefined || props.modelValue === null)

const selectionStyle = computed((): Record<string, string> => {
    return { textAlign: props.inputAlign }
})

watch(() => opened.value, (val: boolean) => {
    if (val) {
        document.addEventListener("keydown", handleExcListener);
        setInputFocus()
    }
    else
        document.removeEventListener("keydown", handleExcListener);

})

const handleExcListener = ({ key }: KeyboardEvent): void => {
    if (key === "Escape") {
        closeMenu()
    }
}

const changeValue = (value: string) => {
    emit('update:modelValue', value)
}


</script>
<style lang="scss" src="./style.scss"></style>