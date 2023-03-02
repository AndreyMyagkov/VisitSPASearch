<template>
    <div class="ks-room-control ks-block">
        <div class="ks-row">
            <div class="ks-room-control__top ks-col-lg-4">
                <img src="https://placehold.jp/40703d/ffffff/330x290.png" alt="" class="ks-room-control__img" loading="lazy" width="404" height="384">
            </div>
            <div class="ks-room-control__body ks-col-lg-8">
                <div class="ks-room-control__header ks-h2 ks-color-primary">Doppelzimmer Economy</div>
                <div class="ks-room-control__descr">
                    <SvgIcon name="information" width="20" height="20" class="ks-room-control__icon-info"></SvgIcon>
                    <div class="ks-room-control__descr-text">
                        <div>ca. 35 mq</div>
                        <div>Südbalkon</div>
                        <div>Dusche/WC</div>
                    </div>
                </div>
                <PriceList></PriceList>
            </div>
        </div>
    </div>
</template>

<script setup>
import SvgIcon from '@/components/icons/SvgIcon.vue';
import PriceList from '@/components/UI/PriceList.vue';
</script>
 
<style scoped>
.ks-room-control {
    margin-bottom: 30px;
}

.ks-room-control__top {}

.ks-room-control__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
}

.ks-room-control__body {
    padding: 10px 20px;
}

.ks-room-control__header {
    margin-bottom: 9px;
}

.ks-room-control__descr {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.ks-room-control__icon-info {
    flex: 0 0 20px;
    font-size: 20px;
    color: var(--ks-color-tertiary);
}

.ks-room-control__descr-text {
    line-height: 1.25;
}
</style>