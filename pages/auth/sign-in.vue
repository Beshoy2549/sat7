
<template>
    <div>
      <!-- Include the Header component -->
      <SignIn />
    </div>
  </template>
<script>
import SignIn from '@/components/modules/auth/SignIn.vue'; 

export default {
  components: {
      SignIn,
  },
};
</script>
