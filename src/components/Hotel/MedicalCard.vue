
<template>
    <div class="ks-medical-card ks-card">
        <div class="ks-medical-card__main ks-row">
            <div class="ks-medical-card__top ks-col-lg-2">
                <img src="https://placehold.jp/40703d/ffffff/330x290.png" alt="" class="ks-medical-card__img" width="" height="" loading="lazy">
            </div>

            <div class="ks-medical-card__body ks-col-lg-8">
                <div class="ks-medical-card__header ks-h2">Kurpaket MINI</div>
                <div class="ks-medical-card__descr">1 Ärztliche Untersuchung, 3 Kuranwendungen, Trinkkur</div>
            </div>

            <div class="ks-medical-card__footer ks-col-lg-2">
                <button class="ks-medical-card__button-details ks-btn ks-btn-outline-primary-accent ks-btn-sm">
                    Details
                    <SvgIcon name="chevron-down" width="16" height="16"></SvgIcon>
                </button>
            </div>
        </div>

        <div class="ks-medical-card__cut">
            <div class="ks-medical-card-item ks-row">
                <div class="ks-medical-card-item__top ks-col-lg-6">
                    <img src="https://placehold.jp/40703d/ffffff/330x290.png" alt="" class="ks-medical-card-item__img" width="" height="" loading="lazy">
                </div>
                <div class="ks-medical-card-item__body ks-col-lg-6">
                    <div class="ks-medical-card-item__header ks-h2">Mineralbad</div>
                    <div class="ks-medical-card-item__descr">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.</p></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import SvgIcon from '@/components/icons/SvgIcon.vue';

</script>

<style scoped>
.ks-medical-card {
    margin-bottom: 20px;
}

.ks-medical-card__main {

}

.ks-medical-card__top {

}

.ks-medical-card__img {
    border-radius: 5px 0 0 5px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 130px;
}

.ks-medical-card__body {
    padding: 10px 0;
}

.ks-medical-card__header {
    margin-bottom: 9px;
}

.ks-medical-card__descr {
    font-size: 16px;
    line-height: 1.25;  
}

.ks-medical-card__footer {
    padding: 10px 20px 10px 0;
    align-self: flex-end;
}

.ks-medical-card__button-details {
    margin: 0;
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 200px;
}


.ks-medical-card__cut {
    padding: 30px 20px 20px 20px;
}

.ks-medical-card-item {
    display: flex;
}

.ks-medical-card-item__top {

}

.ks-medical-card-item__img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    border-radius: var(--ks-border-radius);
}

.ks-medical-card-item__body {}

.ks-medical-card-item__header {
    margin-bottom: 28px;
    color: var(--ks-color-primary);
}

.ks-medical-card-item__descr {
    font-size: 16px;
    line-height: 1.25;
}
</style>
