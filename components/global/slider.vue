<template>
    <Swiper :autoplay="true" :breakpoints="breakpoints" :space-between="50" :modules="modules"
        :pagination="{ clickable: true }">
        <swiper-slide class="swiper-slide pb-12" v-for="item in items" :key="item.id">
            <!-- Display project details here -->
            <Card :project="item" />
        </swiper-slide>
    </Swiper>
</template>
  
<script setup>
import Card from '@/components/shared/Card.vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const breakpoints = ref({
    "@0.50": {
        slidesPerView: 1.25
    },
    "@1.00": {
        slidesPerView: 2.25
    },
    "@1.50": {
        slidesPerView: 3
    },
    "@1.80": {
        slidesPerView: 4
    },

});

const modules = [Navigation, Pagination, Scrollbar, A11y]
const props = defineProps({
    items: Array, // Define the 'project' prop of type Object
});
</script>
  
<style lang="scss" >
.swiper-pagination-bullet {
    opacity: 1;
    background-color: #fff;
    color: #fff;
}

.swiper-pagination-bullet-active {
    background-color: #007aff;
}

/* Add any custom styles here */
</style>
  