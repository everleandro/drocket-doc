<template>
  <div class="schedule-page">
    <div class="mb-12">
      <h1 class="text-h3 mb-2">
        Helper Classes
      </h1>
      <p>
        <code class="green--text mx-2 title">Drocket</code> provides different classes that make developing your website
        easier and faster.
      </p>
    </div>
    <section class="mb-12">
      <h2 class="text-h4 mb-2">Spacing</h2>
      <p>
        The spacing classes are used to add margins and paddings to the elements.
        Use the playground to get a feel for what the different helper classes can do.
      </p>
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="d-flex align-center ">
              <div class="margin" style="flex-grow: 1;">
                <div :class="[marginClass]">
                  <div :class="['padding', paddingClass]">
                    <div class="white pa-4">margin class: <code> {{ marginClass }}</code><span class="ml-4">padding class:
                      </span>
                      <code> {{ paddingClass }}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </EWindowItem>
        </template>
        <template #form>
          <EForm>
            <e-form-column cols="4" class="d-flex align-center">Padding</e-form-column>
            <ESelect v-model="paddingDirection" cols="12" :items="directions" />
            <ESelect v-model="paddingSize" cols="8" :items="sizes" />
            <e-form-column cols="4" class="d-flex align-center">Margin</e-form-column>
            <ESelect v-model="marginDirection" cols="12" :items="directions" />
            <ESelect v-model="marginSize" cols="8" :items="sizes" />
          </EForm>
        </template>
      </BoxExample>
    </section>

    <section class="mb-12">
      <h2 class="text-h4 mb-2">Display</h2>
      <p>
        The display classes are used to hide or show elements depending on the screen size and change the display type of
        the elements in the page using the different breakpoints. The mode of use is as
        <code>d-{display-property}-{breackpoint}</code>
        where display-property can be: <b>flex</b>, <b>inline-flex</b>, <b>block</b>, <b>inline-block</b>, etc. and,
        breackpoint can be: <b>xs</b>, <b>sm</b>, <b>md</b>, <b>lg</b>, <b>xl</b>.
      </p>
      <BoxExample>
        <template #tabs>
          <ETab value="design">
            Design
          </ETab>
        </template>
        <template #window-item>
          <EWindowItem value="design">
            <div class="pa-4">
              <div class="">
                <div class="d-flex outlined pa-4 ma-4"> <code>d-flex</code></div>
                <div class="d-block outlined pa-4 ma-4"> <code>d-block</code></div>
                <div class="d-none d-md-flex outlined pa-4 ma-4"> <code>d-none d-md-flex</code></div>
              </div>
            </div>
          </EWindowItem>
        </template>

      </BoxExample>
    </section>
  </div>
</template>
<script lang="ts" setup>
const paddingDirection = ref('a')
const paddingSize = ref(1)
const marginDirection = ref('a')
const marginSize = ref(1)
const directions = [
  { text: 'Top', value: 't' },
  { text: 'Right', value: 'r' },
  { text: 'Bottom', value: 'b' },
  { text: 'Left', value: 'l' },
  { text: 'Vertical', value: 'y' },
  { text: 'Horizontal', value: 'x' },
  { text: 'All', value: 'a' },
]
const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 18, 19, 20, 21, 22, 23, 24]
const marginClass = computed(() => {
  return `m${marginDirection.value}-${marginSize.value}`
})
const paddingClass = computed(() => {
  return `p${paddingDirection.value}-${paddingSize.value}`
})
</script>
<style lang="scss">
b {
  font-weight: 500;
}
</style>