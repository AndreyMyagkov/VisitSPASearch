<template>
    <div class="ks-order">
        <div class="ks-order__header ks-h1 ks-color-primary">ZIMMER</div>
        <div class="ks-order__descr ks-u-content">
            Bitte wählen Sie einen Zimmertyp
        </div>

        <RoomControl></RoomControl>

        <div class="ks-order__header ks-h1 ks-color-primary">Weitere Programme</div>
        <div class="ks-order__descr ks-u-content">
            Bitte wählen Sie ein Kurpaket
        </div>

        <div class="ks-row">
            <div class="ks-col-lg-4">
                <ServicesControl></ServicesControl>
            </div>
            <div class="ks-col-lg-4">
                <ServicesControl></ServicesControl>
            </div>
            <div class="ks-col-lg-4">
                <ServicesControl></ServicesControl>
            </div>
        </div>

        <div class="ks-order__header ks-h1 ks-color-primary">ZUSAMMENFASSUNG</div>
        <div class="ks-order__descr ks-u-content">
            Bitte überprüfen Sie Ihre Angaben
        </div>

        <SummaryCard>
            <SumaryCardHotel></SumaryCardHotel>
        </SummaryCard>

        <SummaryCard>
            <SummaryCardPackage></SummaryCardPackage>
        </SummaryCard>

        <SummaryCard>
            <SummaryCardRoom></SummaryCardRoom>
        </SummaryCard>

    </div>
</template>

<script setup>
import RoomControl from './RoomControl.vue';
import ServicesControl from './ServicesControl.vue';
import SummaryCard from './SummaryCard.vue';
import SumaryCardHotel from './SummaryCardHotel.vue';
import SummaryCardPackage from './SummaryCardPackage.vue';
import SummaryCardRoom from './SummaryCardRoom.vue';
</script>

<style scoped>
.ks-order {}

.ks-order__descr {
    margin-bottom: 30px;
}

</style>