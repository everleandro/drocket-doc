<template>
    <span ref="root">
        <transition name="slide-fade">
            <e-button v-show="visible" :icon="$icon.contentCopy" @click="copy" text small color="white"
                class="copy-button-activator ma-1" />
        </transition>
    </span>
</template> 
<script lang="ts" setup>
const visible = ref(true)
const root = ref<HTMLElement>()
const props = defineProps({
    onlyVisible: {
        type: Boolean,
        default: false
    }
})
const copy = async () => {
    let code = root.value?.parentElement?.querySelector('code')
    if (props.onlyVisible) {
        code = root.value?.parentElement?.querySelector(':scope > div:not([style*="display:none"]):not([style*="display: none"]) code')
    }

    if (code) {
        await navigator.clipboard.writeText(code.innerText);
        setTimeout(() => {
            visible.value = false
        }, 300);
        setTimeout(() => {
            visible.value = true
        }, 3000);
    }
}
</script>   
<style lang="scss">
.copy-button-activator {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;

}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

// .slide-fade-leave-active {
//     transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .slide-fade-leave-to {
//     transform: translateX(-20px);
//     opacity: 0;
// }

.slide-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}
</style>