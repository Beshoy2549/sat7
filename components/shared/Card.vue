<template>
    <div class="card overflow-hidden border border-gray-300 rounded-lg shadow-lg p-4">
        <!-- New card design -->
        <div class="relative">
            <img :src="project.image" class="w-full rounded-lg h-48 object-cover">
            <!-- Favorite button in the top-right corner -->
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
  
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useFavoritesStore } from '~/stores/favorites';

// Define props received from the parent component
const props = defineProps({
    project: Object, // Define the 'project' prop of type Object
});
const favoritesStore = useFavoritesStore();

// Check if a project is a favorite using Composition API
const isFavorite = ref(favoritesStore.isFavorite(props.project.id));

// Toggle favorite status
const toggleFavorite = () => {
    if (isFavorite.value) {
        favoritesStore.removeFavorite(props.project.id);
    } else {
        favoritesStore.addFavorite(props.project);
    }
    isFavorite.value = !isFavorite.value; // Toggle isFavorite
};
</script>
  
<style lang="scss" scoped>
.card {
    .description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* For Webkit-based browsers */
        -webkit-line-clamp: 3;
        /* Standard property */
        line-clamp: 3;
    }
}

/* Add any additional styling here */
</style>
  