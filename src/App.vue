<template>
  <div class="ks-app" notranslate cq-min-w-991->
    <div class="ks-container-root">
      <Steps :steps= "steps" :current="currentStep" @change="setCurrentStep"></Steps>



      <div class="ks-search ks-block ks-mb-50 ks-p-20">
        <SearchForm></SearchForm>
      </div>


      <div class="ks-result">
        <div class="ks-row">
          <div class="ks-col-12 ks-col-md-4 ks-col-lg-3" style="display: none;">
            <SearchFilter></SearchFilter>
          </div>
        

          <div class="ks-col-12 ks-col-md-8- ks-col-lg-9-">

            <div class="ks-result-content">
              
              <Manager></Manager>
              <SortControl></SortControl>

              

              <CountriesAccordion 
                :open="index <= 2" 
                v-for="(item, index) in countryList"
                :key="index"
                
              >
                <template v-slot:header>{{item}}</template>

                <CountriesResort>
                  <CountriesTopHotel></CountriesTopHotel>
                </CountriesResort>
                <CountriesResort></CountriesResort>
                <CountriesResort></CountriesResort>

              </CountriesAccordion>

              

              
             
              
            </div>
          </div>
        </div>
      </div>

      <HotelCard>
        <Tabs></Tabs>
        <PriceList></PriceList>
      </HotelCard>


      <Hotel v-if="false"></Hotel>
      <Order v-if="false"></Order>
      <UiKit v-if="false"></UiKit>

      </div>
  </div>
</template>


<script setup lang="ts">
import Steps from './components/Steps.vue'
import SvgIcon from './components/icons/SvgIcon.vue'

import UiKit from './components/UiKit.vue'

import SearchForm from '@/components/Search/SearchForm.vue'
import SearchFilter from '@/components/Search/SearchFilter.vue'
import Manager from './components/Search/Manager.vue'
import SortControl from './components/Search/SortControl.vue'

import CountriesAccordion from '@/components/Countries/CountriesAccordion.vue'

import CountriesResort from '@/components/Countries/CountriesResort.vue'
import CountriesTopHotel from '@/components/Countries/CountriesTopHotel.vue'

import HotelCard from '@/components/HotelCard/HotelCard.vue'

import Tabs from './components/UI/Tabs.vue'
import PriceList from './components/UI/PriceList.vue'

import Hotel from '@/components/Hotel/Hotel.vue'

import Order from '@/components/Order/Order.vue'

import { ref, reactive } from 'vue'


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

const countryList = reactive([
  'Tschechien', 'Polen', 'Estland', 'Litauen', 'Israel', 'Slowokei', 'Türkei', 'Ungarn'
]);

const hotelCategory = ref(3);
</script>

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
