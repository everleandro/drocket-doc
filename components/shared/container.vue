<template>
    <div class="e-container" id="app">
        <slot />
    </div>
</template>

<style lang="scss">
.e-container {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: $space-base;
    box-sizing: border-box;

    &--fluid {
        max-width: 100%;
    }


    @include _lg {
        max-width: 1185px;
    }

    @include _md {
        max-width: 900px;
    }

    max-width: 1185px;
}
</style>
 