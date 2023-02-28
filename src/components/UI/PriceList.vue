<template>
    <div class="price-list">
        <div class="price-list__item">
            <div class="price-list__content">
                <div class="price-list__header">Kurpaket Midi</div>
                <div class="price-list__descr">ab 7 Nächte</div>
            </div>
            <div class="price-list__price">
                <div class="price-list__value-old">3.892 €</div>
                <div class="price-list__value-current">2.556 €</div>
            </div>
        </div>

        <div class="price-list__item">
            <div class="price-list__content">
                <div class="price-list__header">Massagen von vier Kontinenten</div>
                <div class="price-list__descr">ab 7 Nächte</div>
            </div>
            <div class="price-list__price">
                <div class="price-list__value-old">3.892 €</div>
                <div class="price-list__value-current">2.556 €</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.price-list {}

.price-list__item {
    display: flex;
    align-items: center;
    border-bottom: solid 1px var(--ks-color-primary);
    margin-bottom: 2px;
}

.price-list__content {
    padding: 1px 20px 5px 20px;
    flex: 1;
}

.price-list__header {
    font-size: 18px;
    line-height: 1.25;
    color: var(--ks-color-primary);
    margin-bottom: 1px;
}

.price-list__descr {
    font-size: 24px;
    line-height: 1.25;
    color: var(--ks-color-base);
}

.price-list__price {
    background-color: var(--ks-color-primary-accent);
    color: #fff;
    text-align: right;
    padding: 2px 16px;
    min-width: 120px;
}

.price-list__value-old {
    font-size: 20px;
    line-height: 1.25;
    text-decoration-line: line-through;
}

.price-list__value-current {
    font-weight: 700;
    font-size: 28px;
    line-height: 1.25;
    margin-top: -5px;
}
</style>