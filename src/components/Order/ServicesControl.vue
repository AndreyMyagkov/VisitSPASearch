<template>
    <div class="ks-servive-control ks-card">
        <div class="ks-servive-control__top">
            <div class="ks-servive-control__header"><span>Massage 75 min</span></div>
            <div class="ks-servive-control__descr">Bitte wählen Sie ein Kurpaket</div>
            <div class="ks-servive-control__icon-wr">
                <SvgIcon name="massage" width="50" height="50" class="ks-servive-control__icon"></SvgIcon>
            </div>

            <div class="ks-servive-control__price">
                <div class="ks-form-check">
                    <input class="ks-form-check-input" type="checkbox" name="" id="id-1" checked="">
                    <label class="ks-form-check-label" for="id-1"> 
                        Gesamt <span class="ks-servive-control__price-value">180 €</span>
                    </label>
                </div>
                <SvgIcon name="information" width="30" height="30" class="ks-servive-control__icon-info"></SvgIcon>
            </div>
        </div>


        <div class="ks-servive-control__footer">
            <div class="ks-servive-control__item">
                <SvgIcon name="check" width="25" height="25" class="ks-servive-control__item-icon"></SvgIcon>
                1 Ärztliche Untersuchung
            </div>

            <div class="ks-servive-control__item">
                <SvgIcon name="check" width="25" height="25" class="ks-servive-control__item-icon"></SvgIcon>
                3 Kuranwendungen
            </div>

            <div class="ks-servive-control__item">
                <SvgIcon name="check" width="25" height="25" class="ks-servive-control__item-icon"></SvgIcon>
                Trinkkur
            </div>

            <div class="ks-servive-control__item">
                <SvgIcon name="check" width="25" height="25" class="ks-servive-control__item-icon"></SvgIcon>
                Heilgymnastik in der Gruppe
            </div>

            <div class="ks-servive-control__item">
                <SvgIcon name="check" width="25" height="25" class="ks-servive-control__item-icon"></SvgIcon>
                Heilbad
            </div>

            <div class="ks-servive-control__item">
                <SvgIcon name="check" width="25" height="25" class="ks-servive-control__item-icon"></SvgIcon>
                audiovisuelle Entspannungstherapie
            </div>

            <div class="ks-servive-control__info">
                Informationsblatt zum Kurpaket MIDI
            </div>
        </div>
    </div>
</template>

<script setup>
import SvgIcon from '@/components/icons/SvgIcon.vue';
</script>

<style scoped>
.ks-servive-control {
    background-color: #F4F4F4;
}
.ks-servive-control__top {
    padding: 12px 20px 22px 20px;
}
.ks-servive-control__header {
    line-height: 1.25;
    font-weight: 700;
    color: var(--ks-color-primary);
    margin-bottom: 5px;
    padding-bottom: 13px;
    text-align: center;
}
.ks-servive-control__header span {
    padding-bottom: 13px;
    border-bottom: solid 1px var(--ks-control-border-color);
}

.ks-servive-control__descr {
    margin-bottom: 20px;
    text-align: center;
}

.ks-servive-control__icon-wr {
    text-align: center;
    margin-bottom: 16px;
}

.ks-servive-control__icon {
    color: var(--ks-color-primary);
    font-size: 50px;
}

.ks-servive-control__price {
    position: relative;
    padding-right: 50px;
    color: var(--ks-color-primary)
}

.ks-servive-control__price-value {
    font-size: 24px;
    font-weight: 700;
}
.ks-form-check-label {
    display: inline-block;
    margin-bottom: 0;
}

.ks-servive-control__price .ks-form-check-input {
    margin-top: 0.35em;
}

.ks-servive-control__icon-info {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 30px;
    color: var(--ks-color-tertiary);
}

.ks-servive-control__footer {
    border-top: solid 1px var(--ks-control-border-color);
    padding: 20px;
}
.ks-servive-control__item {
    position: relative;
    padding-left: 45px;
    margin-bottom: 10px;
}
.ks-servive-control__item-icon {
    font-size: 25px;
    color: var(--ks-color-primary-accent);
    position: absolute;
    top: 0;
    left: 0;
}

.ks-servive-control__info {
    margin-top: 10px;
    text-align: center;
    color: var(--ks-color-tertiary);
    text-decoration: underline;
    font-size: 16px;
    line-height: 1.25;
}
</style>