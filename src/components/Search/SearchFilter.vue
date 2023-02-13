<script setup lang="ts">
import { ref, reactive } from 'vue';
import HotelCategoriesControl from '@/components/HotelCategoriesControl.vue';
import SvgIcon from '@/components/icons/SvgIcon.vue'

// TODO: to props
const hotelCategory = ref(3);

const hotelAttribute = reactive([
    {
        id: 1,
        title: 'Behandlungen',
        icon: 'leaf'
    },
    {
        id: 2,
        title: 'Kuranwendungen',
        icon: 'spa'
    },
    {
        id: 3,
        title: 'Wellness',
        icon: 'exercise'
    },
    {
        id: 4,
        title: 'Stand',
        icon: 'lounge'
    },
    {
        id: 5,
        title: 'Familie',
        icon: 'family'
    },
    {
        id: 6,
        title: 'Erwachsene',
        icon: 'couple'
    },
    {
        id: 7,
        title: 'Body & Soul',
        icon: 'yin-yang'
    },
    {
        id: 8,
        title: 'Sport',
        icon: 'football'
    },
]);
</script>
<template>
    <div class="ks-filter ks-block ks-p-20">

        <div class="ks-filter__block">
            <div class="ks-filter__header ks-h2">Ergebnisse filtern</div>

            <div class="ks-control-category">
                <label for="" class="ks-filter__label ks-h3 ks-d-block">Hotelkategorie (mind. 3)</label>
                <HotelCategoriesControl v-model="hotelCategory"></HotelCategoriesControl>
            </div>

            <div class="ks-control-meal">
                <label for="" class="ks-filter__label ks-h3 ks-d-block">Verpflegung (mind.)</label>
                <div class="ks-input-icon-wrapper">
                    <select name="" id="" class="ks-form-select ks-form-select-sm">
                        <option value="1">BooBar</option>
                        <option value="2">BooBarBiz</option>
                    </select>
                    <SvgIcon name="meal" class="ks-select__icon" width="20" height="20"></SvgIcon>
                </div>
            </div>

            <button class="ks-btn ks-btn-secondary ks-btn-sm ks-filter__btn-apply">Ergebnisse filtern &gt;</button>

        </div>


        <div class="ks-filter__block">
            <div class="ks-filter__header ks-h2">Weitere Suchoptionen</div>
        
            <div class="ks-control-type">
                <div class="ks-filter__label ks-h3">
                    <label for="" class="ks-filter__label ks-h3">
                        Zimmertyp
                    </label>
                    <div class="ks-control-seaside ks-form-check">
                        <input class="ks-form-check-input" type="checkbox" name="flexRadioDefault3" id="flexRadioDefault3">
                        <label class="ks-form-check-label" for="flexRadioDefault3">
                            Meerblick
                        </label>
                    </div>
                </div>

                <div class="ks-input-icon-wrapper">
                    <select name="" id="" class="ks-form-select ks-form-select-sm">
                        <option value="1">BooBar</option>
                        <option value="2">BooBarBiz</option>
                    </select>
                    <SvgIcon name="bed" class="ks-select__icon" width="20" height="20"></SvgIcon>
                </div>
            </div>
        
        
        </div>


        <div class="ks-filter__block">
            <div class="ks-filter__header ks-h2">Besondere Vorlieben</div>
        
            <div class="ks-control-attribute">
                <div class="ks-row">
                    <div class="ks-col-6" v-for="item in hotelAttribute" :key="item.id">
                        <div class="ks-control-attribute__item">
                            <SvgIcon :name="item.icon" class="ks-attribute__icon icon-xl" width="40" height="40"></SvgIcon>
                            <span class="ks-attribute__title">{{ item.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <button class="ks-btn ks-btn-secondary ks-btn-sm ks-filter__btn-apply">Ergebnisse filtern &gt;</button>
        
        </div>


    </div>
</template>

<style scoped>
.ks-filter__block:not(:last-child) {
        margin-bottom: 30px;
    }
    .ks-filter__header {
        color: var(--ks-color-primary);
        margin-bottom: 24px;
    }
    .ks-filter__label {
        color: var(--ks-color-base);
        margin-bottom: 5px;
        position: relative;
    }
    .ks-control-category,
    .ks-control-meal {
        margin-bottom: 20px;
    }
    .ks-filter__btn-apply {
        display: block;
        width: 100%;
    }
    .ks-control-seaside {
        float: right
    }
    .ks-control-attribute {
        margin-bottom: 15px;
    }
    .ks-control-attribute__item {
        text-align: center;
        border-radius: 3px;
        padding: 5px;
        margin: 4px 0;
        cursor: pointer;
    }
    .ks-attribute__icon {
        fill: var(--ks-color-primary);
    }
    .ks-attribute__title {
        display: block;
        text-align: center;
        color: var(--ks-color-base);
        font-size: 0.8em;
        line-height: 1.25;
    }
    .ks-control-attribute__item:hover,
    .ks-control-attribute__item_checked {
        background-color: var(--ks-color-primary);
        fill: #fff;
        color: #fff;
    }

    .ks-control-attribute__item:hover .ks-attribute__icon,
    .ks-control-attribute__item_checked .ks-attribute__icon {
        fill: #fff;
    }

    .ks-control-attribute__item:hover .ks-attribute__title,
    .ks-control-attribute__item_checked .ks-attribute__title {
        color: #fff;
    }
    .ks-control-type {
        margin-bottom: 30px;
    }
</style>