<script setup lang="ts">
import Steps from './components/Steps.vue'
import SvgIcon from './components/icons/SvgIcon.vue'
import HotelCategoriesControl from './components/HotelCategoriesControl.vue';
import UiKit from './components/UiKit.vue';

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

const hotelCategory = ref(3);
</script>

<template>
  <div class="ks-app" notranslate cq-min-w-991>
      <Steps :steps= "steps" :current="currentStep" @change="setCurrentStep"></Steps>
      <HotelCategoriesControl v-model="hotelCategory"></HotelCategoriesControl>

      <div class="ks-search ks-block ks-mb-50 ks-p-20">
        Форма
      </div>


      <div class="ks-result">
        <div class="ks-row">
          <div class="ks-col-12 ks-col-md-4 ks-col-lg-3">
            <div class="ks-filter ks-block ks-p-20">
              фильтр
            </div>
          </div>
        

          <div class="ks-col-12 ks-col-md-8 ks-col-lg-9">
            <div class="ks-result-content">
              результаты
              <UiKit></UiKit>
              <div class="ks-block ks-mb-30">
                Карточка
              </div>
              <div class="ks-block ks-mb-30">
                Карточка
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
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
