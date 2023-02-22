<template>
    <div class="ks-tophotel">
        <div class="ks-tophotel__media">
            <img src="https://placehold.jp/40703d/ffffff/300x200.png" alt="" class="ks-tophotel__img" width="225" height="150">
        </div>
        <div class="ks-tophotel__content row">
            <div class="ks-tophotel__main">
                <div class="ks-tophotel__header ks-h2">
                    <span class="ks-tophotel__header-text">Spa Resort Sanssouci</span>
                    <span class="ks-tophotels__stars">
                        <SvgIcon name="star" width="20" height="20"  class="ks-tophotels__star" v-for="i in 5"></SvgIcon>
                    </span>
                </div>
                <div class="ks-tophotel__resort">Karlovy Vary</div>
                <div class="ks-tophotels__attributes">
                    <SvgIcon name="snowflake" width="30" height="30" class="ks-tophotels__attribute"></SvgIcon>
                    <SvgIcon name="lounge" width="30" height="30" class="ks-tophotels__attribute"></SvgIcon>
                    <SvgIcon name="baby-stroller" width="30" height="30" class="ks-tophotels__attribute"></SvgIcon>
                </div>
            </div>
            <div class="ks-tophotel__footer">
                <div class="ks-tophotel__settings">14 Tage | 2 Personen</div>
                <div class="ks-tophotel__price">
                    <span class="ks-tophotel__price-label">ab </span>
                    <span class="ks-tophotel__price-value">758 €</span>
                </div>
                <div class="ks-tophotel__perperson">(379 € pro Person)</div>
            </div>
        </div>
        <div class="ks-tophotel__action">
            <button class="ks-tophotel__btn">
                <SvgIcon name="chevron-right" width="20" height="20" class="ks-tophotel__btn-icon"></SvgIcon>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/icons/SvgIcon.vue';
</script>

<style scoped>
.ks-tophotel {
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: var(--ks-border-radius);
    border: solid 1px #f0f0f0;
    display: flex;
}

.ks-tophotel__media {
    flex: 1 1 26%;
    max-width: 26%;
    max-height: 150px;
    padding: 10px 0 10px 10px;
}

.ks-tophotel__img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ks-tophotel__content {
    flex: 1 1 74%;
    max-width: 74%;
    padding: 10px 40px 10px 20px;
    display: flex;
}

.ks-tophotel__main {
    flex: 1 1 60%;
    max-width: 60%;
    border-right: solid 1px var(--ks-color-border-control);
    padding: 10px 0 0 0;
}

.ks-tophotel__header {
    margin-bottom: 30px;
    color: var(--ks-color-primary);
}
.ks-tophotel__header-text {
    margin-right: 20px;
}
.ks-tophotels__stars {
    white-space: nowrap;
}
.ks-tophotels__star {
    color: var(--ks-color-secondary-accent);
    margin-right: 2px;
}
.ks-tophotel__resort {
    margin-bottom: 22px;
}
.ks-tophotels__attributes {

}
.ks-tophotels__attribute {
    font-size: 30px;
    color: var(--ks-color-primary);
    margin-right: 1em;
}
.ks-tophotel__footer {
    flex: 1 1 40%;
    max-width: 40%;
    text-align: right;
    padding: 23px 0 0 0;
}
.ks-tophotel__settings {
    margin-bottom: 16px;
}
.ks-tophotel__price {
    font-size: 30px;
    line-height: 1.25;
    font-weight: 700;
    color: var(--ks-color-primary);
}

.ks-tophotel__price-label {
    font-size: 20px;
    line-height: 1.25;
    color: inherit;
}

.ks-tophotel__price-value {
    color: inherit;
}

.ks-tophotel__perperson {
    color: #999;
    margin-bottom: 16px;
}

.ks-tophotel__action {
    flex: 0 0 40px;
    background: #F0F0F0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.ks-tophotel__btn {
    border: none;
    cursor: pointer;

}
</style>