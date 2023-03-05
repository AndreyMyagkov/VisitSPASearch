<template>
    <div class="ks-summary-card ks-card">
        <div class="ks-row">
            <div class="ks-col-lg-5">
                <img src="https://placehold.jp/40703d/ffffff/330x290.png" alt="" class="ks-summary-card__img">
            </div>
            <div class="ks-summary-card__content ks-col-lg-7">
                <slot></slot>
                <div class="ks-summary-card__footer">
                    <div class="ks-summary-card__price ks-color-primary">180 €</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ks-summary-card {

}
.ks-summary-card__img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px 0 0 5px;
    object-fit: cover;
    max-height: 384px;
}
.ks-summary-card__content {
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.ks-summary-card__footer {
    margin-top: auto;
    text-align: right;
}
.ks-summary-card__price {
    font-size: 28px;
    line-height: 1.5;
    font-weight: 700;
}
:deep(.summary-card__change) {
    font-weight: 400;
    color: var(--ks-color-tertiary);
}
</style>