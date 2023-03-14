<template>
    <div class="ks-resort ks-block">
        <div class="ks-resort__wr">
            <div class="ks-resort__media">
                <img src="https://static.tourvisor.ru/hotel_pics/main400/1039.jpg" alt="" class="ks-resort__img" width="300" height="200">
            </div>
           <!-- <div class="ks-resort__content row"> -->
                <div class="ks-resort__main">
                    <div class="ks-resort__header ks-h2">Kolberg</div>
                    <div class="ks-resort__hotels-count">45 hotels</div>
                </div>
                <div class="ks-resort__footer">
                    <div class="ks-resort__price">
                        <span class="ks-resort__price-label">ab </span>
                        <span class="ks-resort__price-value">758 €</span>
                    </div>
                    <div class="ks-resort__perperson">(379 € pro Person)</div>
                    <button class="ks-resort__btn ks-btn ks-btn-outline-primary-accent ks-btn-sm">
                        Top Hotels
                        <SvgIcon name="chevron-down" width="16" height="16"></SvgIcon>
                    </button>
                </div>
            <!--</div>-->
        </div>

        <div class="ks-resort__hotels">
            <slot></slot>
            <div class="ks-resort__allhotels">
                alle Hotels anzeigen &gt;
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/icons/SvgIcon.vue';
</script>

<style scoped>
.ks-resort {
    background-color: #fff;
    margin-bottom: 20px;
    overflow: hidden;
}
.ks-resort__wr {
}
.ks-resort__media {
    flex: 0 0 250px;
    /* flex: 1 1 32%;
    max-width: 32%; */
    height: 165px;
}

.ks-resort__img {
    /* border-radius: 5px 0 0 5px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* .ks-resort__content {
    flex: 1 0 0%;
    padding: 20px 40px 20px 20px;
    display: flex;
} */

.ks-resort__main {
    flex: 1 0 0%;
    padding: 20px 20px 20px 20px;
}

.ks-resort__header {
    margin-bottom: 30px;
    color: var(--ks-color-primary);
}

.ks-resort__hotels-count {

}

.ks-resort__footer {
    flex: 0 0 250px;
    padding: 20px 40px 20px 40px;
    text-align: right;
    
    position: relative;
}
.ks-resort__footer:before {
    content: '';
    display: block;
    position: absolute;
    border-top: solid 1px var(--ks-color-border-control);
    top: 0;
    left: 20px;
    right: 20px;
}

.ks-resort__price {
    font-size: 30px;
    line-height: 1.25;
    font-weight: 700;
    color: var(--ks-color-primary);
}

.ks-resort__price-label {
    font-size: 20px;
    line-height: 1.25;
    color: inherit;
}

.ks-resort__price-value {
    color: inherit;
}

.ks-resort__perperson {
    color: #999;
    margin-bottom: 16px;
}

.ks-resort__btn {
    font-size: 18px;
    line-height: 23px;
    width: 100%;
    max-width: 172px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
}
.ks-resort__hotels {
    padding: 20px 15px;
}
.ks-resort__allhotels {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
    color: var(--ks-color-primary);
    cursor: pointer;
}

@container ks-root (min-width: 720px) {
    .ks-resort__wr {
        display: flex;
    }
    .ks-resort__footer:before {
        border-left: solid 1px var(--ks-color-border-control);
        border-top: none;
        top: 20px;
        bottom: 20px;
        left: 0;
    }

}
</style>