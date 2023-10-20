<template>
  <div :class="expansionClass">
    <div class="e-expansion__header e-btn">
      <div class="e-expansion__header-content" @click="changeValue(!opened)">
        <slot name="header">
          <div>
            <h4>
              {{ headerTitle }}
            </h4>
          </div>
        </slot>
        <div class="e-expansion__header-icon">
          <EIcon :name="$icon.arrowDown"></EIcon>
        </div>
      </div>
      <div class="e-expansion__header-actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="e-expansion__body">
      <ETransitionExpand>
        <div v-show="opened" class="e-expansion__body-content">
          <slot name="default"></slot>
        </div>
      </ETransitionExpand>
    </div>
  </div>
</template>
<script lang="ts" setup>

export interface Props {
  dense?: boolean
  headerTitle?: string
  modelValue?: boolean
}

const localValue = ref(true);
const props = withDefaults(defineProps<Props>(), { modelValue: undefined })

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const rootClasses = {
  dense: "e-expansion--dense",
  opened: "e-expansion--opened",
};

const opened = computed((): boolean => props.modelValue === undefined ? localValue.value : props.modelValue)

const expansionClass = computed(() => {
  const classes = ['e-expansion']
  props.dense && classes.push(rootClasses.dense)
  opened.value && classes.push(rootClasses.opened)
  return classes
})

const changeValue = (value: boolean) => {
  if (props.modelValue === undefined) {
    localValue.value = value
  } else {
    emit("update:modelValue", value)
  }
}


</script>
<style lang="scss" src="./style.scss"></style>
  