<script setup lang="ts">
import SvgIcon from '@/components/icons/SvgIcon.vue'
</script>

<template>
    <div class="ks-search-form">
        <div class="ks-row">
            <div class="ks-col-12 ks-col-md-2 ks-col-lg-3">

                <label for="" class="ks-search-form__label ks-h3 ks-d-block">Reiseziel</label>
                <div class="ks-control-geo">
                    <div class="ks-input-icon-wrapper">
                        <select name="" id="" class="ks-form-select">
                            <option value="1">Чехия</option>
                            <option value="2">Польша</option>
                        </select>
                        <SvgIcon name="pin" class="ks-select__icon" width="20" height="20"></SvgIcon>
                    </div>
                </div>

            </div>

            <div class="ks-col-12 ks-col-md-2 ks-col-lg-3">
                <label for="" class="ks-search-form__label ks-h3 ks-d-block">Reisezeitraum/-dauer</label>
                <div class="ks-input-icon-wrapper">
                    <input type="date" class="ks-form-input">
                    <SvgIcon name="calendar" class="ks-select__icon" width="20" height="20"></SvgIcon>
                </div>
            </div>

            <div class="ks-col-12 ks-col-md-2 ks-col-lg-3">
                <label for="" class="ks-search-form__label ks-h3 ks-d-block">Reisende</label>
                <div class="ks-input-icon-wrapper">
                    <select  class="ks-form-select">
                        <option value="1">2 Erwachsene</option>
                        <option value="2">2 Erwachsene</option>
                        <option value="3">3 Erwachsene</option>
                        <option value="4">4 Erwachsene</option>
                    </select>
                    <SvgIcon name="employees" class="ks-select__icon" width="20" height="20"></SvgIcon>
                </div>
            </div>

            <div class="ks-col-12 ks-col-md-2 ks-col-lg-3">
                <label class="ks-search-form__label ks-h3 ks-d-block">&nbsp;</label>
                <button class="ks-btn ks-btn-secondary ks-search-form__btn-search">Suche anpassen &gt;</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ks-search-form__label {
    margin-bottom: 7px;
    color: var(--ks-color-primary);
}
.ks-search-form__control {
    border-radius: var(--ks-border-radius);
    border: solid 1px var(--ks-color-border-control);
    height: 60px;
}
.ks-search-form__btn-search {
    margin: 0;
    width: 100%;
}
.ks-search-form .ks-input-icon-wrapper select,
.ks-search-form .ks-input-icon-wrapper input {
    padding-left: 55px;
}
.ks-search-form .ks-input-icon-wrapper svg {
    left: 14px;
}
</style>