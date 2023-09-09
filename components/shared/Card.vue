<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useFavoritesStore } from '~/stores/favorites';

const propsData = defineProps<{
    project: {
        id: string;
        image: string;
        title: string;
        description: string;
    }
}>();
// Define props received from the parent component

const favoritesStore = useFavoritesStore();

// Check if a project is a favorite using Composition API
const isFavorite = ref(favoritesStore.isFavorite(propsData.project.id));

// Toggle favorite status
const toggleFavorite = () => {
    if (isFavorite.value) {
        favoritesStore.removeFavorite(propsData.project.id);
    } else {
        favoritesStore.addFavorite(propsData.project);
    }
    isFavorite.value = !isFavorite.value; // Toggle isFavorite
};
</script>

<template>
    <div class="card overflow-hidden border border-gray-300 rounded-lg shadow-lg p-4">
        <!-- New card design -->
        <div class="relative">
            <img :src="propsData.project.image" class="w-full rounded-lg h-48 object-cover">
            <button @click="toggleFavorite" :class="isFavorite ? 'text-red-500 bg-red-700' : 'text-white bg-blue-500'"
                class="absolute top-2 right-2 p-2 rounded-full focus:outline-none">
                <Icon :name="`heroicons-solid:heart`" :class="isFavorite ? 'bg-red-700' : ''" class="w-6 h-6" />
            </button>

        </div>
        <div class="mt-4">
            <h2 class="text-lg font-semibold">{{ project.title }}</h2>
            <p class="description mt-2">{{ project.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    .description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* For Webkit-based browsers */
        -webkit-line-clamp: 4;
        /* Standard property */
        line-clamp: 4;
    }

    &:hover {
        transition: transform 0.2s ease-in-out;
    }
}

/* Add any additional styling here */
</style>






