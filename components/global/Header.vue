<template>
  <header class="main-header p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-white text-2xl font-logo">
        <img src="~/assets/images/logo.png" alt="Logo" class="h-12 mr-2 inline" />
      </div>
      <nav>
        <router-link v-for="link in navLinks" :key="link.name" :to="link.path"
          class="text-white hover:text-gray-200 mr-4">
          {{ link.name }}
        </router-link>
        <router-link class="sign-in" :to="'/auth/sign-in'" v-if="!isAuthenticated">
          Sign In
        </router-link>
        <button class="log-out" @click="logout()" v-else>
          Log Out
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useRouter } from 'vue-router';

const store = useAuthStore();
const router = useRouter();

const navLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'Favorites', path: '/favorites' },
]);

const isAuthenticated = computed(() => store.isAuthenticated);
// Define the logout method
const logout = () => {
  store.authUser = {}
  const authUser = useCookie('authUser')
  authUser.value = ""
  router.push('/');
};
</script>

<style lang="scss" scoped>
.main-header {
  background: $main-color;

  .sign-in,
  .log-out {
    background: $secondary-color;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
  }
}

/* Add any custom styles here */
</style>
