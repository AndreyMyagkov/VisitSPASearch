<script setup lang="ts">
    import SvgIcon from '@/components/icons/SvgIcon.vue';
</script>
<template>
    <div class="ui">
    
        <input type="text" class="ks-form-input" placeholder="Placeholder">
        <br>
        <input type="text" disabled class="ks-form-input" placeholder="Placeholder disabled">
        <br>
        <select name="" id="" class="ks-form-select">
            <option value="1">BooBar</option>
            <option value="2">BooBarBiz</option>
        </select>
        <br>
    
    
        <div class="ks-form-check">
            <input class="ks-form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" checked>
            <label class="ks-form-check-label" for="flexRadioDefault1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur culpa quo, quaerat laborum facere! Commodi dignissimos incidunt ducimus voluptates enim, et ex sint distinctio magni deserunt delectus? Fugiat harum nulla earum voluptates ullam, nam quas laudantium quos delectus dicta nemo at et iure necessitatibus sit minus error enim. Ab quam rem voluptatum eos eum soluta id assumenda eius obcaecati iusto provident quis neque autem exercitationem nam corporis mollitia quod pariatur rerum, commodi, non sunt quibusdam fuga et! Sit in mollitia doloremque assumenda, soluta voluptas. Reprehenderit minima nobis quaerat, accusantium molestiae impedit doloremque temporibus repellendus? Saepe repellendus quibusdam officia illum.
            </label>
        </div>
    
        <div class="ks-form-check">
            <input class="ks-form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault3">
            <label class="ks-form-check-label" for="flexRadioDefault3">
                Lorem ipsum dolor sit amet consectetur
            </label>
        </div>
    
        <div class="ks-form-check">
            <input class="ks-form-check-input" type="checkbox" name="flexRadioDefault3" id="flexRadioDefault4" checked>
            <label class="ks-form-check-label" for="flexRadioDefault4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur culpa quo, quaerat laborum facere! Commodi dignissimos incidunt ducimus
            </label>
        </div>
    
        <div class="ks-form-check">
            <input class="ks-form-check-input" type="checkbox" name="flexRadioDefault2" id="flexRadioDefault2">
            <label class="ks-form-check-label" for="flexRadioDefault2">
                Lorem ipsum dolor sit amet consectetur
            </label>
        </div>
    
    
        <button class="ks-btn ks-btn-primary">Button</button>
        <br>
        <button class="ks-btn ks-btn-secondary">Button</button>
        <br>
        <button class="ks-btn ks-btn-outline">Button</button>
        <br>
        <button class="ks-btn ks-btn-primary ks-btn-sm">Button small</button>
        <br>
        <button class="ks-btn ks-btn-primary" disabled>Button</button>
    
        <div class="ks-alert ks-alert-success">Alert</div>
        <br>
        <div class="ks-alert ks-alert-info">Alert</div>
        <br>
        <div class="ks-alert ks-alert-danger">Alert</div>
    
        <SvgIcon class="ks-icon ks-color-primary" name="star"></SvgIcon>
        <SvgIcon class="ks-icon ks-color-primary icon-s" name="star"></SvgIcon>
        <SvgIcon class="ks-icon ks-color-secondary icon-l" name="star"></SvgIcon>
    
    
    </div>
</template>
