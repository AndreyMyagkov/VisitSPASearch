<template>
    <div class="ks-summary-card-flight__h2 ks-h2 ks-color-primary ks-mb-10">HINFLUG &nbsp;|&nbsp; <span class="ks-summary-card__change">Ändern</span></div>
    <div class="ks-summary-card-flight-card ks-card">
        <div class="ks-summary-card-flight-card__title">Flugzeiten finden Sie in den Reiseunterlagen</div>

        <div class="ks-summary-card-flight-card__info">
            <div class="ks-summary-card-flight-card__part-from">
                <div class="ks-summary-card-flight-card__subtitle">Abflug - 06.02.2022</div>
                <div class="ks-summary-card-flight-card__city">Hamburg</div>
            </div>
            <div class="ks-summary-card-flight-card__icon-col">
                <SvgIcon name="plane" class="ks-summary-card-flight-card__icon" width="25" height="25"></SvgIcon>
            </div>
            <div class="ks-summary-card-flight-card__part-to">
                <div class="ks-summary-card-flight-card__subtitle">Ankunft - 06.02.2022</div>
                <div class="ks-summary-card-flight-card__city">Las Palmas</div>
            </div>
        </div>
    </div>

    <div class="ks-summary-card-flight__h2 ks-h2 ks-color-primary ks-mb-10">HINFLUG &nbsp;|&nbsp; <span class="ks-summary-card__change">Ändern</span></div>
    <div class="ks-summary-card-flight-card ks-card">
        <div class="ks-summary-card-flight-card__title">Flugzeiten finden Sie in den Reiseunterlagen</div>
    
        <div class="ks-summary-card-flight-card__info">
            <div class="ks-summary-card-flight-card__part-from">
                <div class="ks-summary-card-flight-card__subtitle">Abflug - 06.02.2022</div>
                <div class="ks-summary-card-flight-card__city">Hamburg</div>
            </div>
            <div class="ks-summary-card-flight-card__icon-col">
                <SvgIcon name="plane" class="ks-summary-card-flight-card__icon" width="25" height="25"></SvgIcon>
            </div>
            <div class="ks-summary-card-flight-card__part-to">
                <div class="ks-summary-card-flight-card__subtitle">Ankunft - 06.02.2022</div>
                <div class="ks-summary-card-flight-card__city">Las Palmas</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import SvgIcon from '@/components/icons/SvgIcon.vue';
</script>

<style scoped>
.ks-summary-card-flight-card {
    margin-bottom: 10px;
    padding: 6px 20px 13px 20px;
}

.ks-summary-card-flight-card__title {
    text-align: center;
    margin-bottom: 6px;
}

.ks-summary-card-flight-card__info {
    display: grid;
    grid-template-columns: 1fr 25px 1fr;
    grid-template-rows: auto;
    gap: 20px;
}

.ks-summary-card-flight-card__part-from {}
.ks-summary-card-flight-card__part-to * {
    text-align: right;
}

.ks-summary-card-flight-card__subtitle {
    font-size: 16px;
    line-height: 1.25;
}

.ks-summary-card-flight-card__city {
    font-weight: 700;
}

.ks-summary-card-flight-card__icon-col {}

.ks-summary-card-flight-card__icon {
    font-size: 25px;
    color: var(--ks-color-primary);
}
</style>