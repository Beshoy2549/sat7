<template>
  <div>
    <!-- Include the Header component -->
    <Header />

    <!-- Content of your page goes here -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
import Header from '~/components/global/Header.vue'; // Adjust the import path as needed

export default {
  components: {
    Header,
  },
};
</script>
