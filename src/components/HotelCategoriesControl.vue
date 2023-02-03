<script setup lang="ts">
import SvgIcon from '@/components/icons/SvgIcon.vue'

const props = defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

const minus = () => {
  if (props.modelValue > 1) {
    setValue(props.modelValue - 1)
  }
}
const plus = () => {
  if (props.modelValue < 5) {
    setValue(props.modelValue + 1)
  }
}

const setValue = (value: number) => {
  emit('update:modelValue', value)
}

</script>

<template>
  <div class="stars-control">
    <button class="stars-control__button" @click="minus">
      <SvgIcon name="minus" width="20" height="20" class="stars-control__minus"></SvgIcon>
    </button>
    <div class="stars-control__content">
      <SvgIcon 
        class="stars-control__star" 
        name="star" 
        :class="{ 'stars-control__star_active': i <= modelValue }"
        width="20"
        height="20"
        v-for="i in 5"
        :key="i"
        @click="setValue(i)"
      ></SvgIcon>
    </div>
    <button class="stars-control__button" @click="plus">
      <SvgIcon name="plus" width="20" height="20" class="stars-control__plus"></SvgIcon>
    </button>
  </div>
</template>

<style scoped>
.stars-control {
  border: solid 1px var(--ks-control-border-color);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  min-width: 200px;
}
.stars-control__button {
  flex: 0 0 40px;
  fill: #444;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stars-control__minus,
.stars-control__plus {

}
.stars-control__content {
  display: flex;
  gap: 0 5px;
}
.stars-control__star {
  fill: #999;
  cursor: pointer;
}
.stars-control__star_active {
  fill: #FDBF00;
}
</style>
