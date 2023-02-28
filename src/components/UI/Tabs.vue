<template>
    <div class="ks-tabs">
        <div class="ks-tabs__tab">Termine</div>
        <div class="ks-tabs__tab ks-tabs__tab_active">Pakete</div>
    </div>
</template>

<style scoped>
.ks-tabs {
    display: flex;
    gap: 2px;
}
    
.ks-tabs__tab {
    font-weight: 700;
    line-height: 1.25;
    text-align: center;
    flex: 1 1 164px;
    min-width: 164px;
    height: 56px;
    padding: 5px 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 6px 0 0;
    background-color: #fff;
    color: #444;
    border: solid 1px var(--ks-color-primary-accent);
    cursor: pointer;
    position: relative;
    top: 1px;
}

.ks-tabs__tab_active {
    cursor: default;
}
</style>