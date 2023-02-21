<template>
    <div class="ks-block ks-sort-bar">
        <div class="ks-sort-bar-bc ks-h2">
            <span class="ks-sort-bar-bc__label">Hotels </span>
            <span class="ks-sort-bar-bc__label">Kanaren</span>
            <span class="ks-sort-bar-bc__icon"> &gt; </span>
            <span class="ks-sort-bar-bc__label">Fuerteventura</span>
        </div>

        <div class="ks-row ks-d-flex ks-align-items-center">
            <div class="ks-col-xs-12 ks-col-lg-5">
                <div class="ks-input-icon-wrapper">
                    <select class="ks-form-select ks-form-select-sm">
                        <option value="1">Alle Orte</option>
                        <option value="2">BooBarBiz</option>
                    </select>
                    <svg aria-hidden="true" class="ks-select__icon" width="20" height="20">
                        <use href="#icon-pin"></use>
                    </svg>
                </div>
            </div>
            <div class="ks-col-xs-12 ks-col-lg-7">
                <div class="ks-sort-bar__sort ks-p">
                    <div class="ks-sort-bar__item">Sortiert nach</div>
                    <div class="ks-sort-bar__item ks-sort-bar__item_btn ks-sort-bar__item_active">Preis</div>
                    <div class="ks-sort-bar__item ks-sort-bar__item_btn">Bewertung</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.ks-sort-bar {
    padding: 20px;
    margin-bottom: 40px;
}

.ks-sort-bar-bc {
    margin-bottom: 20px;
}

.ks-sort-bar-bc__label {
    color: var(--ks-color-primary);
}

.ks-sort-bar-bc__icon {}

.ks-sort-bar__sort {
    display: flex;
    gap: 20px 30px;
}
.ks-sort-bar__item {
    
}
.ks-sort-bar__item_btn {
    color: var(--ks-color-primary);
    cursor: pointer;
}

.ks-sort-bar__item_active {
    font-weight: 700;
    border-bottom: solid 1px currentColor;
    cursor: default;
}
</style>
