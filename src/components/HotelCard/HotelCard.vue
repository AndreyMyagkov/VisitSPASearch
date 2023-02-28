<template>
    <div class="ks-hotel-card ks-block">
        <div class="ks-hotel-card__wr">
            <div class="ks-hotel-card__media">
                <div class="ks-hotel-card__media-wr">
                    <img src="https://placehold.jp/40703d/ffffff/330x290.png" alt="" class="ks-hotel-card__img" width="330" height="290">

                    <div class="ks-hotel-card__label">Bestseller</div>

                    <div class="ks-hotel-card__img-extra">
                        <button class="ks-hotel-card__btn-hotel-details ks-btn ks-btn-outline-primary-accent ks-btn-sm">
                            Hotel Details
                            <SvgIcon name="chevron-down" width="20" height="20" class="ks-hotel-cards__pin"></SvgIcon>
                        </button>
                        <div class="ks-reviews-small">
                            <div class="ks-reviews-small__value-wr">
                                <div class="ks-reviews-small__value">7,3</div>
                            </div>
                            <div class="ks-reviews-small__info">
                                <div class="ks-reviews-small__estimation">Sehr gut</div>
                                <div class="ks-reviews-small__total">560 Bewertungen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ks-hotel-card__main">
                <div class="ks-hotel-card__header ks-h2">
                    <span class="ks-hotel-card__header-text">Spa Resort Sanssouci</span>
                </div>
                <div class="ks-hotel-cards__stars">
                    <SvgIcon name="star" width="20" height="20" class="ks-hotel-cards__star" v-for="i in 5"></SvgIcon>
                </div>

                <div class="ks-hotel-card__resort">
                    <SvgIcon name="pin" width="20" height="20" class="ks-hotel-card__resort-icon"></SvgIcon>
                    <span class="ks-hotel-card__resort-content">Karlovy Vary (Zentrum: 1,2 km)</span>
                </div>

                <div class="ks-hotel-cards__attributes">
                    <div class="ks-hotel-cards__attribute">
                        <div class="ks-hotel-cards__attribute-col-icon">
                            <SvgIcon name="bed" width="24" height="24" class="ks-hotel-cards__attribute-icon"></SvgIcon>
                        </div>
                        <div class="ks-hotel-cards__attribute-col-info">
                            <div class="ks-hotel-cards__attribute-title">Проживание</div>
                            <div class="ks-hotel-cards__attribute-descr">7 Ночей проживание, 3-х разовое питание</div>
                        </div>
                    </div>

                    <div class="ks-hotel-cards__attribute">
                        <div class="ks-hotel-cards__attribute-col-icon">
                            <SvgIcon name="spa" width="24" height="24" class="ks-hotel-cards__attribute-icon"></SvgIcon>
                        </div>
                        <div class="ks-hotel-cards__attribute-col-info">
                            <div class="ks-hotel-cards__attribute-title">Лечебный пакет <span class="ks-hotel-cards__change-package">Изменить пакет</span></div>
                            <div class="ks-hotel-cards__attribute-descr">1 осмотр доктора, 22 лечебных процедур</div>
                        </div>
                    </div>

                    <div class="ks-hotel-cards__attribute">
                        <div class="ks-hotel-cards__attribute-col-icon">
                            <SvgIcon name="back-and-forth" width="24" height="24" class="ks-hotel-cards__attribute-icon"></SvgIcon>
                        </div>
                        <div class="ks-hotel-cards__attribute-col-info">
                            <div class="ks-hotel-cards__attribute-title">AN- & ABREISE</div>
                            <div class="ks-hotel-cards__attribute-descr">Flug</div>
                        </div>
                        <div class="ks-hotel-cards__attribute-col-transport">
                            <button class="ks-hotel-cards__attribute-transport-btn">
                                <SvgIcon name="hiking" width="24" height="24" class="ks-hotel-cards__attribute-transport-icon"></SvgIcon>
                            </button>
                            <button class="ks-hotel-cards__attribute-transport-btn ks-hotel-cards__attribute-transport-icn_active">
                                <SvgIcon name="aeroplane" width="24" height="24" class="ks-hotel-cards__attribute-transport-icon"></SvgIcon>
                            </button>
                            <button class="ks-hotel-cards__attribute-transport-btn">
                                <SvgIcon name="public-transport" width="24" height="24" class="ks-hotel-cards__attribute-transport-icon"></SvgIcon>
                            </button>
                        </div>
                    </div>
                    
                </div>

                <button class="ks-hotel-card__btn-tarifdetails">
                    Tarifdetails
                    <SvgIcon name="chevron-down" width="20" height="20" class="ks-hotel-ks-hotel-card__btn-tarifdetails-icon"></SvgIcon>
                </button>


            </div>
            <div class="ks-hotel-card__footer">

                <div class="ks-hotel-card__actions-icons">
                    <SvgIcon name="email" width="20" height="20" class="ks-hotel-card__actions-icon"></SvgIcon>
                    <SvgIcon name="heart" width="20" height="20" class="ks-hotel-card__actions-icon"></SvgIcon>
                    <SvgIcon name="notification" width="20" height="20" class="ks-hotel-card__actions-icon"></SvgIcon>
                    <SvgIcon name="error" width="20" height="20" class="ks-hotel-card__actions-icon"></SvgIcon>
                </div>

                <div class="ks-hotel-card__dates">
                    <SvgIcon name="calendar" width="20" height="20" class="ks-hotel-card__dates-icon"></SvgIcon>
                    15.09.2021 - 30.09.2021
                </div>


                <div class="ks-hotel-card__settings">14 Tage | 2 Personen | Bus</div>

                <div class="ks-hotel-card__placement">
                    Halbpension, 1 x Doppelzimmer
                </div>
                <div class="ks-hotel-card__price">
                    <div class="ks-hotel-card__price-old">3.892 €</div>
                    <div class="ks-hotel-card__price-new">3.206 €</div>
                </div>
                
                <div class="ks-hotel-card__action">
                    <button class="ks-hotel-card__btn-order ks-btn ks-btn-secondary">
                        jetzt online Buchen
                    </button>
                </div>
            </div>
        </div>
        <div class="ks-hotel-card__inner">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/icons/SvgIcon.vue';
</script>

<style scoped>
.ks-hotel-card {
    background-color: #fff;
    margin-bottom: 30px;
}
.ks-hotel-card__wr {
    display: flex;
}

.ks-hotel-card__media {
    flex: 1 0 36.5%;
    max-width: 36.5%;
    max-height: 150px;
    padding: 10px 0 10px 10px;
}
.ks-hotel-card__media-wr {
    position: relative;
    line-height: 1;
}

.ks-hotel-card__img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.ks-hotel-card__label {
    font-weight: 700;
    color: #fff;
    background-color: var(--ks-color-danger);
    padding: 2px 15px 3px;
    position: absolute;
    top: 15px;
    left: -10px;
}
.ks-hotel-card__label:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 5px 0;
    border-color: transparent #850018 transparent transparent;
    left: 0;
    bottom: -5px;
    position: absolute;
}
.ks-hotel-card__img-extra {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 12px;
    display: flex;
    gap: 10px;

}
.ks-hotel-card__btn-hotel-details {
    flex: 1 1;
    background: rgba(255, 255, 255, 0.8);
    margin: 0;
    padding: 0.4em 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 40px;
}

.ks-hotel-cards__pin {}

.ks-reviews-small {
    border-radius: var(--ks-border-radius);
    background-color: #fff;
    padding: 2px 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    flex: 1 1;
}

.ks-reviews-small__value-wr {
    flex: 0 0 30px;
}

.ks-reviews-small__value {
    border-radius: 3px;
    background-color: var(--ks-color-primary-accent);
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    position: relative;
}

.ks-reviews-small__value::before {
    content: '';
    display: block;
    height: 8px;
    width: 11px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.38 7.09'%3E%3Cpath fill='%2300a958' d='M3.81 0v.26a5.69 5.69 0 0 1-3.3 5.15A.9.9 0 0 0 0 6.48a.88.88 0 0 0 1 .59c.51-.22 7.33-.36 9.33-7.07Z'/%3E%3C/svg%3E");
    position: absolute;
    left: 44%;
    bottom: -8px;
}

.ks-reviews-small__info {
    flex: auto;
}

.ks-reviews-small__estimation {
    font-size: 16px;
    line-height: 18px;
}

.ks-reviews-small__total {
    font-size: 12px;
    line-height: 13px;
    color: var(--ks-color-tertiary);
    margin-top: -1px;
}

.ks-hotel-card__content {
    flex: 1 1;
    padding: 10px 40px 10px 20px;
    display: flex;
}

.ks-hotel-card__main {
    flex: 1 1 60%;
    max-width: 60%;
    border-right: solid 1px var(--ks-color-border-control);
    padding: 15px 20px 10px 20px;
}

.ks-hotel-card__header {
    margin-bottom: 5px;
    color: var(--ks-color-primary);
}

.ks-hotel-card__header-text {
    margin-right: 20px;
}

.ks-hotel-cards__stars {
    white-space: nowrap;
    margin-bottom: 5px;
}

.ks-hotel-cards__star {
    color: var(--ks-color-secondary-accent);
    margin-right: 2px;
}

.ks-hotel-card__resort {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
}
.ks-hotel-card__resort-icon {
    flex: 0 0 20px;
}
.ks-hotel-card__resort-content {
    font-size: 16px;
    line-height: 1.25;
    color: var(--ks-color-tertiary);
}


.ks-hotel-cards__attributes {}

.ks-hotel-cards__attribute {
    display: flex;
    gap: 10px;
    align-items: center;
    color: var(--ks-color-primary);
    margin-bottom: 12px;
}

.ks-hotel-cards__attribute-col-icon {
    flex: 0 0 24px;
}

.ks-hotel-cards__attribute-icon {
    font-size: 24px;
    color: var(--ks-color-primary);
    line-height: 1;
    display: block;
}

.ks-hotel-cards__attribute-col-info {

}

.ks-hotel-cards__attribute-title {
    font-size: 18px;
    font-weight: 700;
}

.ks-hotel-cards__attribute-descr {
    font-size: 14px;
    color: #666;
}
.ks-hotel-cards__change-package {
    font-size: 14px;
    line-height: 1.25;
    text-decoration-line: underline;
    color: #444444;
    font-weight: 400;
}
.ks-hotel-cards__attribute-col-transport {
    margin-left: auto;
    display: flex;
    gap: 10px;
}

.ks-hotel-cards__attribute-transport-btn {
    border: none;
    background: #F0F0F0;
    border-radius: 6px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #444;
}

.ks-hotel-cards__attribute-transport-icon {
    color: #444;
}

.ks-hotel-cards__attribute-transport-icn_active {
    font-size: 24px;
}

.ks-hotel-cards__attribute-transport-icn_active {
    background: var(--ks-color-tertiary);
}

.ks-hotel-cards__attribute-transport-icn_active .ks-hotel-cards__attribute-transport-icon {
    color: #fff;
}
.ks-hotel-card__btn-tarifdetails {
    font-size: 14px;
    line-height: 1.25;
    display: flex;
    gap: 5px;
    background-color: transparent;
    border: none;
    align-items: center;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 24px;
}
.ks-hotel-ks-hotel-card__btn-tarifdetails-icon {
    font-size: 10px;
}

.ks-hotel-card__footer {
    flex: 0 0 24.8%;
    max-width: 24.8%;
    padding: 10px;
}
.ks-hotel-card__actions-icons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    color: #444;
    margin-bottom: 25px;
}

.ks-hotel-card__actions-icon {
    cursor: pointer;
}

.ks-hotel-card__dates {
    margin-bottom: 22px;
    font-size: 16px;
    line-height: 1.25;
    padding-left: 30px;
    position: relative;
}
.ks-hotel-card__dates-icon {
    color: var(--ks-color-primary);
    font-size: 20px;
    position: absolute;
    top: 1px;
    left: 0;
}

.ks-hotel-card__settings {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.25;
    color: #444444;
    margin-bottom: 2px;
}


.ks-hotel-card__placement {
    font-size: 16px;
    line-height: 1.25;
    color: #444444;
    margin-bottom: 22px;
}

.ks-hotel-card__price {
    text-align: right;
    margin-bottom: 13px;
}

.ks-hotel-card__price-old {
    font-size: 24px;
    line-height: 1.25;
    text-align: right;
    text-decoration-line: line-through;
    color: #444444;
}

.ks-hotel-card__price-new {
    font-weight: 700;
    font-size: 30px;
    line-height: 1.25;
    color: var(--ks-color-danger);
}

.ks-hotel-card__action {
    text-align: right;
}

.ks-hotel-card__btn-order {
    margin: 0;
    font-size: 18px;

}

.ks-hotel-card__inner {
    padding-top: 30px;
}

.ks-hotel-card__inner :deep(.ks-tabs) {
    padding: 0 10px;
    border-bottom: solid 2px var(--ks-color-primary-accent);
    position: relative;
}

.ks-hotel-card__inner :deep(.ks-tabs__tab) {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    text-align: center;
    flex: 0 0 auto;
    min-width: 164px;
    height: 56px;
    padding: 5px 1em;
    background-color: #fff;
    color: #444;
    border: solid 1px var(--ks-color-primary-accent);
}

.ks-hotel-card__inner :deep(.ks-tabs__tab_active) {
    color: #fff;
    background-color: var(--ks-color-primary-accent);
}
</style>