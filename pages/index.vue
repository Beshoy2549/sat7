<script setup lang="ts">
import HomeServices from "@/services/home/home"
import Slider from '@/components/global/slider.vue';
import Loader from '@/components/global/Loader.vue';
import Card from '@/components/shared/Card.vue';


const projects = ref([]) as any
const isLoading = ref(false)

const getHomeProjects = async () => {
    isLoading.value = true;
    await HomeServices.projectsService().then((res: any) => {
        projects.value = res.blocks[4].projects
        isLoading.value = false
    }).catch((err: any) => {
        console.log("error", err);
        isLoading.value = false
    })
}

getHomeProjects()
</script>
<template>
    <section class="home">
        <div class=" min-h-screen container mx-auto px-5 py-24 ">
            <h1 class="text-2xl font-bold mb-4">Home</h1>
            <template v-if="projects && !isLoading">

                <Slider :items="projects">
                    <template v-slot:default="slotProps">
                        <!-- Here, you can access slotProps.item which is each item of your items array -->
                        <Card :project="slotProps.item" />
                    </template>
                </Slider>

            </template>
            <template v-else>
                <Loader :loading="isLoading" />
            </template>
        </div>
    </section>
</template>




<style lang="scss" scoped>
.home {
    background-color: $background-color;
    color: #fff;
}
</style>