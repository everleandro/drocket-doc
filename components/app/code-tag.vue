<template>
    <code class="language-html">
        <span class="token tag">
            &lt;<template v-if="end">/</template><slot />>
        </span>
    </code>
</template>
<script setup lang="ts">

export interface Props {
    end?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    end: false
})

</script>
<style lang="scss" scoped>
code {
    width: 100%;
    display: block;

    &[class*=language-] {
        border-radius: 0;
    }
}
</style>