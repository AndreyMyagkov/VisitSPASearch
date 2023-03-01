<template>
    <div class="ks-hotel">

        <div class="ks-hotel-summary">
            <div class="ks-hotel-summary__main">
                <div class="ks-hotel-summary__header">
                    <h1 class="ks-hotel-summary__h1 ks-h1">Spa Resort Sanssouci</h1>
                    <div class="ks-hotel-summary__stars">
                        <SvgIcon name="star" width="20" height="20" class="ks-hotel-summary__stars"></SvgIcon>
                        <SvgIcon name="star" width="20" height="20" class="ks-hotel-summary__stars"></SvgIcon>
                        <SvgIcon name="star" width="20" height="20" class="ks-hotel-summary__stars"></SvgIcon>
                        <SvgIcon name="star" width="20" height="20" class="ks-hotel-summary__stars"></SvgIcon>
                        <SvgIcon name="star" width="20" height="20" class="ks-hotel-summary__stars"></SvgIcon>
                    </div>
                </div>
                <div class="ks-hotel-summary__resort">
                    <SvgIcon name="pin" width="24" height="24" class="ks-hotel-summary__resort-icon"></SvgIcon>
                    <span class="ks-hotel-summary__resort-content">Karlovy Vary (Zentrum: 1,2 km)</span>
                </div>

                <div class="ks-hotel-summary__descr">
                    <span class="ks-hotel-summary__label">Top Lage!</span>
                    <span class="ks-hotel-summary__descr-text">Dieses Hotel zeichnet sich durch eine sehr gute Lage aus</span>
                </div>
            </div>
            <div class="ks-hotel-summary__footer">
                <div class="ks-hotel-summary__durations">Gesamtpreis für 14 Tage</div>

                <div class="ks-hotel-summary__price">
                    <span class="ks-hotel-summary__price-label">ab</span>
                    <span class="ks-hotel-summary__price-value"> 2.556 €</span>
                </div>

                <div class="ks-hotel-summary__actions">
                    <button class="ks-hotel-summary__action">
                        <SvgIcon name="email" width="30" height="30"></SvgIcon>
                    </button>
                    <button class="ks-hotel-summary__action">
                        <SvgIcon name="heart" width="30" height="30"></SvgIcon>
                    </button>
                </div>
            </div>
        </div>



        <div class="ks-hotel-gallery">Галерея</div>

        <Tabs></Tabs>
        <div class="ks-hotel__tabs-content">

            <div class="ks-hotel-info">
                <div class="ks-hotel-info__header ks-h2">Das Erwartet Sie</div>
                <div class="ks-hotel-info__content ks-u-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quam dolor. Ut velit at excepturi non eum vitae optio laboriosam, facere quidem nulla rem natus voluptatem iste perferendis ullam a?
                </div>

                <div class="ks-hotel-info__header ks-h2">Hotelausstattung</div>

                <div class="ks-facilities">
                    <div class="ks-facilities-card">
                        <div class="ks-facilities-card__header">
                            <div class="ks-facilities-card__icon">
                                <SvgIcon name="lounge" width="30" height="30"></SvgIcon>
                            </div>
                            <div class="ks-facilities-card__text">Stand</div>
                        </div>
                        <div class="ks-facilities-card__main">
                            <div class="ks-facilities-card__item">
                                <div class="ks-facilities-card__item-icon-wr">
                                    
                                </div>
                                <div class="ks-facilities-card__item-text">Direkte Strandlage</div>
                            </div>
                            <div class="ks-facilities-card__item ks-facilities-card__item_positive">
                                <div class="ks-facilities-card__item-icon-wr">
                                    <SvgIcon name="check" width="20" height="20"></SvgIcon>
                                </div>
                                <div class="ks-facilities-card__item-text">Standstrand</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="ks-hotel-info__header ks-h2">Hotelausstattung</div>
                
                <div class="ks-hotel-environment">
                    <div class="ks-hotel-environment__filter">
                        <button class="ks-hotel-environment__filter-button ks-btn ks-btn-primary-accent ks-btn-sm">Strand</button>
                        <button class="ks-hotel-environment__filter-button ks-btn ks-btn-outline-primary-accent ks-btn-sm">Strand</button>
                        <button class="ks-hotel-environment__filter-button ks-btn ks-btn-outline-primary-accent ks-btn-sm">Landschaft</button>
                    </div>

                    <div class="ks-hotel-environments">
                        <div class="ks-environment-card">
                            <div class="ks-environment-card__top">
                                <img src="https://placehold.jp/40703d/ffffff/330x290.png" alt="" class="ks-environment-card__img" loading="lazy">
                            </div>
                            <div class="ks-environment-card__main">
                                <div class="ks-environment-card__header">Punta de la Ballena</div>
                                <div class="ks-environment-card__dist">5 - 10 km</div>
                                <div class="ks-environment-card__descr">El Cotillo (Kanaren) </div>
                            </div>
                            <div class="ks-environment-card__footer">
                                <button class="ks-environment-card__button ks-btn ks-btn-secondary ks-btn-sm">Button</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <!-- Zimmer Tab -->
            <div class="ks-hotel-info">

                <div class="ks-hotel-info__header ks-h2">Zimmer</div>
                <div class="ks-hotel-info__content ks-u-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quam dolor. Ut velit at excepturi non eum vitae optio laboriosam, facere quidem nulla rem natus voluptatem iste perferendis ullam a?
                </div>
                <RoomCard></RoomCard>
                <RoomCard></RoomCard>
            </div>

            <!-- Medical procedures Tab -->
            <div class="ks-hotel-info">
            
                <div class="ks-hotel-info__header ks-h2">Wellness- und Gesundheitpakete</div>
                <div class="ks-hotel-info__content ks-u-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quam dolor. Ut velit at excepturi non eum vitae optio laboriosam, facere quidem nulla rem natus voluptatem iste perferendis ullam a?
                </div>
                <MedicalCard></MedicalCard>
            </div>

        </div>

    </div>

</template>

<script setup>
import SvgIcon from '@/components/icons/SvgIcon.vue'
import Tabs from '@/components/UI/Tabs.vue'
import RoomCard from '@/components/Hotel/RoomCard.vue'
import MedicalCard from '@/components/Hotel/MedicalCard.vue'

</script>

<style scoped>
.ks-hotel {}

.ks-hotel-summary {
    margin-bottom: 60px;
    display: flex;
    gap: 30px;
}

.ks-hotel-summary__main {
     
}

.ks-hotel-summary__header {
    margin-bottom: 13px;
    display: flex;
    align-items: center;
}

.ks-hotel-summary__h1 {
    color: var(--ks-color-primary);
    margin-right: 20px;

}

.ks-hotel-summary__stars {
    font-size: 20px;
    color: var(--ks-color-secondary-accent);
    display: flex;
    gap: 2px;
}

.ks-hotel-summary__resort {
    display: grid;
    gap: 10px;
    grid-template-columns: 24px 1fr;
    align-items: center;
    margin-bottom: 22px;
}

.ks-hotel-summary__resort-icon {
    color: var(--ks-color-primary);
    font-size: 24px;
}

.ks-hotel-summary__resort-content {
    color: var(--ks-color-tertiary);
    font-size: 20px;
    line-height: 1.25;
}

.ks-hotel-summary__descr {
    font-size: 20px;
    line-height: 1.25;
}

.ks-hotel-summary__label {
    font-weight: 700;
    padding: 2px 15px;
    background-color: var(--ks-color-primary-accent);
    color: #fff;
    margin-right: 11px;
}

.ks-hotel-summary__descr-text {
    color: var(--ks-color-primary-accent);
}

.ks-hotel-summary__footer {
    text-align: right;
    margin-left: auto;
}

.ks-hotel-summary__durations {
    line-height: 1.25;
    margin-bottom: 12px;
}

.ks-hotel-summary__price {
    margin-bottom: 16px;
    color: var(--ks-color-primary);
    line-height: 1.25;
}
.ks-hotel-summary__price-label {

}
.ks-hotel-summary__price-value {
    color: var(--ks-color-danger);
    font-size: 30px;
    font-weight: 700;
}

.ks-hotel-summary__actions {
    display: flex;
    justify-content: flex-end;
    gap: 20px;    
}

.ks-hotel-summary__action {
    border: none;
    background-color: transparent;
    margin: 0;
    font-size: 30px;
    cursor: pointer;
}

.ks-hotel-gallery {
    height: 400px;
    background-color: #f0f0f0;
    border-radius: 6px;
    margin-bottom: 50px;
}


.ks-hotel :deep(.ks-tabs) {

}

.ks-hotel :deep(.ks-tabs__tab) {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.25;
    text-align: center;
    flex: 1;
    min-width: 164px;
    height: 60px;
    padding: 5px 1em;
    background-color: var(--ks-color-primary);
    color: #fff;
    border: solid 1px var(--ks-color-primary);
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ks-hotel :deep(.ks-tabs__tab_active) {
    color: var(--ks-color-primary);
    background-color: #fff;
}


.ks-hotel__tabs-content {
    border-radius: 0 0 var(--ks-border-radius);
    border: solid 1px var(--ks-color-primary);
    padding: 30px 20px;
    background-color: #fff;
}

.ks-hotel-info {
    
}

.ks-hotel-info__header {
    margin-bottom: 30px;
    color: var(--ks-color-primary);
}

.ks-hotel-info__content {
    margin-bottom: 30px;
}


.ks-facilities {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
}

.ks-facilities-card {
    border-radius: var(--ks-border-radius);
    border: solid 1px var(--ks-color-border-control);
    padding: 0 20px;
}

.ks-facilities-card__header {
    padding: 10px 0;
    display: flex;
    align-items: center;
    gap: 15px;
    border-bottom: solid 1px var(--ks-color-border-control);
}

.ks-facilities-card__icon {
    font-size: 30px;
    color: var(--ks-color-primary);
}

.ks-facilities-card__text {
    font-weight: 700;
}

.ks-facilities-card__main {

}

.ks-facilities-card__item {
    padding: 5px 0;
    display: grid;
    gap: 10px;
    grid-template-columns: 20px 1fr;
    color: #999;
}

.ks-facilities-card__item-icon-wr {
    color: var(--ks-color-primary-accent);
    font-size: 20px;
    padding-top: 2px;
}

.ks-facilities-card__item-text {

}

.ks-facilities-card__item_positive {
    color: #444;
    font-weight: 700;
}

.ks-hotel-environment {

}

.ks-hotel-environment__filter {}

.ks-hotel-environment__filter-button {
    margin: 0 20px 30px 0;
}


.ks-hotel-environments {}

.ks-environment-card {
    display: flex;
    border: solid 1px var(--ks-color-border-control);
    border-radius: var(--ks-border-radius);
}

.ks-environment-card__top {
    flex: 0 0 172px;
}

.ks-environment-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
}

.ks-environment-card__main {
    padding: 10px 20px;
    font-size: 16px;
    flex: 1;
}

.ks-environment-card__header {
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 20px;
}

.ks-environment-card__dist {
    line-height: 20px;
    margin-bottom: 15px;
}

.ks-environment-card__descr {
    line-height: 20px;
}

.ks-environment-card__footer {
    padding: 20px;
    align-self: flex-end;
}

.ks-environment-card__button {}
</style>