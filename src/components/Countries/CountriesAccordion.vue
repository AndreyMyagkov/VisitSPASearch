<template>
    <details class="ks-accordion">
        <summary class="ks-accordion__summary">
            <div class="ks-accordion__header">
                <slot name="header"></slot>
            </div>
            <SvgIcon name="chevron-down" class="ks-accordion__icon" width="30" height="30"></SvgIcon>
        </summary>
        <div class="ks-accordion__content">
            <slot></slot>
            <div class="ks-accordion__allresorts">
                mehr anzeigen &gt;
            </div>
        </div>
    </details>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/icons/SvgIcon.vue'
</script>

<style scoped>
.ks-accordion {
    border-bottom: solid 1px var(--ks-color-border-block);
}

.ks-accordion__summary {
    background-color: #fff;
    position: relative;
    padding: 10px 20px 9px;
    cursor: pointer;
    list-style: none;
}

.ks-accordion__header {
    padding-right: 70px;
    font-size: 30px;
    line-height: 1.333;
    color: var(--ks-color-primary);
}

.ks-accordion__icon {
    fill: var(--ks-color-primary);
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 30px;
}

.ks-accordion__content {}


details[open]>summary .ks-accordion__icon {
    transform: rotate(180deg);
}

details[open]>summary .ks-accordion__header {
    font-size: 34px;
    line-height: 1.333;
    font-weight: 700;
}
.ks-accordion__allresorts {
    padding: 0 0 20px 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
    color: var(--ks-color-primary);
    cursor: pointer;
}
</style>