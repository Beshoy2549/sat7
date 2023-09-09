
<script setup lang="ts">
import FavoritesServices from "@/services/favorites/favorites"
import FavsSlider from '@/components/global/slider.vue';
import Loader from '@/components/global/Loader.vue';

const projects = ref([]) as any
const isLoading = ref(false)
definePageMeta({
    middleware: [
        'auth',
    ],
});
const getFavoriteList = async () => {
    isLoading.value = true
    await FavoritesServices.favoriteListService().then((res: any) => {
        projects.value = res.blocks[0].projects
        isLoading.value = false
    }).catch((err: any) => {
        console.log("error", err);
        isLoading.value = false
    })
}

const { data, refresh } = await useAsyncData(
    '',
    () => getFavoriteList(),
)

</script>

<template>
    <section class="favorites">
        <div class=" min-h-screen container mx-auto px-5 py-24  ">
            <h1 class="text-2xl font-bold mb-4">Favorites List</h1>
            <template v-if="projects && !isLoading">
                <FavsSlider :items="projects">
                    <template v-slot:default="slotProps">
                        <!-- Here, you can access slotProps.item which is each item of your items array -->
                        <Card :project="slotProps.item" />
                    </template>
                </FavsSlider>
            </template>
            <template v-else>
                <Loader :loading="isLoading" />
            </template>
        </div>
    </section>
</template>



<style lang="scss" scoped>
.favorites {
    background-color: $background-color;
    color: #fff;
}
</style>