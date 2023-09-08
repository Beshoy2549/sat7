<script>
export default {
  name: 'Header',
  data() {
    return {
      navLinks: [
        { name: 'Home', path: '/' },
      ]
    };
  }
};
</script>

<template>
  <header class="main-header p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-white text-2xl font-logo">
        <img src="~/assets/images/logo.png" alt="Logo" class=" h-12 mr-2 inline" />
      </div>
      <nav>
        <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
          class="text-white hover:text-gray-200 mr-4">
          {{ link.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  background: $main-color;
}

/* Add any custom styles here */
</style>
