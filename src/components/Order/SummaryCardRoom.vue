<template>
    <div class="summary-card-room__h2 ks-h2 ks-color-primary ks-mb-20">Zimmer &nbsp;|&nbsp; <span class="summary-card__change">Ändern</span></div>
    <div class="summary-card-room__type">Doppelzimmer Economy, inkl. Vollpension</div>

    <div class="summary-card-room__h2 ks-h2 ks-color-primary ks-mb-10">Personen &nbsp;|&nbsp; <span class="summary-card__change">Ändern</span></div>

    <div class="summary-card-personen">
        <div class="summary-card-personen__item">
            <div class="summary-card-personen__name">Herr Muster, Mustermann (22.05.1956)</div>
            <div class="summary-card-personen__price">824 €</div>
        </div>
        <div class="summary-card-personen__item">
            <div class="summary-card-personen__name">Frau Martina, Mustermann (15.05.1958)</div>
            <div class="summary-card-personen__price">1 824 €</div>
        </div>
    </div>

</template>

<style scoped>
.summary-card-room__type {
    margin-bottom: 50px;
}

.summary-card-personen {}

.summary-card-personen__item {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr minmax(60px, auto);
    grid-template-rows: auto;
    padding: 7px 0;
}
.summary-card-personen__item + .summary-card-personen__item {
    border-top: solid 1px #d3d3d3;
}

.summary-card-personen__name {}

.summary-card-personen__price {
    text-align: right;
}
</style>