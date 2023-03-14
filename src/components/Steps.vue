<template>
    <div class="ks-steps">
        <ul class="ks-steps__list">
            <li 
                class="ks-steps__item" 
                :class="{
                    'ks-steps__item_disabled': item.id > current,
                    'ks-steps__item_current': item.id === current,
                    'ks-steps__item_visited': item.id < current
                }"
                v-for="(item, i) in steps" 
                @click="onClick(item.id)"
                :key="i"
            >
                <div class="ks-steps__icon">
                    <SvgIcon name="check" width="20" height="20" fill="#fff"></SvgIcon>
                </div>
                <div class="ks-steps__title">{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>

import SvgIcon from './icons/SvgIcon.vue'
const emit = defineEmits(['change'])

const props = defineProps({
    current: { type: Number, required: true },
    steps: Object
})

const onClick = (id: number) => {
    if (id < props.current) {
        emit('change', id)
    }
}


</script>

<style scoped>
.ks-steps {
    margin-bottom: 50px;
    --step-disable: #999;
    --step-current: #FFD400;
    --step-visited: #00A958;
}
.ks-steps__list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    padding: 0 50px;
}
.ks-steps__list:before {
    content: '';
    display: block;
    height: 36px;
    border-radius: 20px;
    background-color: #8AD8ED;
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;

}

.ks-steps__item {
    display: flex;
    gap: 10px;
    align-items: center;
    padding-right: 10px;
    z-index: 1;
    fill: #fff;
    --step-color: var(--step-disable);
}
.ks-steps__item_visited {
    --step-color: var(--step-visited);
    cursor: pointer;
}
.ks-steps__item_current {
    --step-color: var(--step-current);
}
.ks-steps__icon {
    width: 60px;
    height: 60px;
    background-color: var(--step-color);
    border-radius: 50%;
    border: solid 5px #fff;
    flex: 0 0 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.ks-steps__title {
    line-height: 1.25;
    flex: 1 1 auto;
}
@container ks-root (max-width: 800px) {
    .ks-steps {
        display: none;
    }

}
</style>