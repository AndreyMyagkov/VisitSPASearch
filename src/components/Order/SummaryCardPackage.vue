
<template>
    <div class="ks-summary-card-package__h2 ks-h2 ks-color-primary ks-mb-30">KURPAKET MINI  &nbsp;|&nbsp; <span class="ks-summary-card__change">Ändern</span></div>

    <div class="ks-summary-card-package__list">
        <div class="ks-summary-card-package__item">
            <SvgIcon name="check" class="ks-summary-card-package__icon" width="25" height="25"></SvgIcon>
            1 Ärztliche Untersuchung
        </div>
        <div class="ks-summary-card-package__item">
            <SvgIcon name="check" class="ks-summary-card-package__icon" width="25" height="25"></SvgIcon>
            3 Kuranwendungen
        </div>
        <div class="ks-summary-card-package__item">
            <SvgIcon name="check" class="ks-summary-card-package__icon" width="25" height="25"></SvgIcon>
            Trinkkur
        </div>
        <div class="ks-summary-card-package__item">
            <SvgIcon name="check" class="ks-summary-card-package__icon" width="25" height="25"></SvgIcon>
            Heilgymnastik in der Gruppe
        </div>
        <div class="ks-summary-card-package__item">
            <SvgIcon name="check" class="ks-summary-card-package__icon" width="25" height="25"></SvgIcon>
            Heilbad
        </div>
        <div class="ks-summary-card-package__item">
            <SvgIcon name="check" class="ks-summary-card-package__icon" width="25" height="25"></SvgIcon>
            audiovisuelle Entspannungstherapie
        </div>
       
    </div>
</template>

<script setup>
import SvgIcon from '../icons/SvgIcon.vue';
</script>

<style scoped>

.ks-summary-card-package__item {
    margin-bottom: 10px;
    position: relative;
    padding-left: 45px;
}

.ks-summary-card-package__icon {
    font-size: 25px;
    color: var(--ks-color-primary-accent);
    position: absolute;
    top: 1px;
    left: 0;
}
</style>
