<template>
    <div class="ks-summary-card-room__h2 ks-h2 ks-color-primary ks-mb-20">ZIMMER &nbsp;|&nbsp; <span class="ks-summary-card__change">Ändern</span></div>
    <div class="ks-summary-card-room__type">Doppelzimmer Economy, inkl. Vollpension</div>

    <div class="ks-summary-card-room__h2 ks-h2 ks-color-primary ks-mb-10">PERSONEN &nbsp;|&nbsp; <span class="summary-card__change">Ändern</span></div>

    <div class="ks-summary-card-person">
        <div class="ks-summary-card-person__item">
            <div class="ks-summary-card-person__name">Herr Muster, Mustermann (22.05.1956)</div>
            <div class="ks-summary-card-person__price">824 €</div>
        </div>
        <div class="ks-summary-card-person__item">
            <div class="ks-summary-card-person__name">Frau Martina, Mustermann (15.05.1958)</div>
            <div class="ks-summary-card-person__price">1 824 €</div>
        </div>
    </div>

</template>

<style scoped>
.ks-summary-card-room__type {
    margin-bottom: 50px;
}

.ks-summary-card-person {}

.ks-summary-card-person__item {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr minmax(60px, auto);
    grid-template-rows: auto;
    padding: 7px 0;
}
.ks-summary-card-person__item + .ks-summary-card-person__item {
    border-top: solid 1px #d3d3d3;
}

.ks-summary-card-person__name {}

.ks-summary-card-person__price {
    text-align: right;
}
</style>