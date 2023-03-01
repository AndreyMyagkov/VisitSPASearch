<template>
    <div class="ks-room-card ks-card">
        <div class="ks-room-card__top">
            <img src="https://placehold.jp/40703d/ffffff/330x290.png" alt="" class="ks-room-card__img" loading="lazy">
        </div>
        <div class="ks-room-card__main">
            <div class="ks-room-card__header ks-h2">Doppelzimmer Economy</div>
            <div class="ks-room-card__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.</div>
        </div>
        <div class="ks-room-card__footer">
            <div class="ks-room-card__properties">
                <SvgIcon class="ks-room-card__property" name="snowflake" width="32" height="32"></SvgIcon>
                <SvgIcon class="ks-room-card__property" name="lounge" width="32" height="32"></SvgIcon>
                <SvgIcon class="ks-room-card__property" name="baby-stroller" width="32" height="32"></SvgIcon>
            </div>

            <div class="ks-room-card__actions">
                <button class="ks-room-card__button ks-btn ks-btn-secondary ks-btn-sm">Button</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ks-room-card {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 384px 1fr;
    grid-template-rows: auto 50px;
    min-height: 274px;
    grid-template-areas: 
    "top main"
    "top footer";
}

.ks-room-card__top {
    grid-area: top;
}

.ks-room-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
}

.ks-room-card__main {
    grid-area: main;
    padding: 10px 20px;
}

.ks-room-card__header {
    margin-bottom: 30px;
}

.ks-room-card__descr {}

.ks-room-card__footer {
    grid-area: footer;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    padding-left: 20px;
}

.ks-room-card__properties {}

.ks-room-card__property {
    color: var(--ks-color-primary);
    margin-right: 30px;
}

.ks-room-card__actions {
    margin-left: auto;
}

.ks-room-card__button {
    border-radius: 0 0 5px 0;
    height: 50px;
    margin: 0;
}

</style>

<script setup>
    import SvgIcon from '@/components/icons/SvgIcon.vue'
</script>