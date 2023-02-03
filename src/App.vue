<script setup lang="ts">
import Steps from './components/Steps.vue'
import SvgIcon from './components/icons/SvgIcon.vue'

import { ref, reactive } from 'vue';

const currentStep = ref(1);


const steps = reactive([
  { id: 1, slug: 'search', title: 'Suche' },
  { id: 2, slug: 'regions', title: 'Reiseziel' },
  { id: 3, slug: 'hotels', title: 'Hotels' },
  { id: 4, slug: 'offer', title: 'Angebote' },
  { id: 5, slug: 'booking', title: 'Buchung' },
]);

const setCurrentStep = (step: number) => {
  currentStep.value = step
}
</script>

<template>
  <Steps :steps= "steps" :current="currentStep" @change="setCurrentStep"></Steps>

  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
