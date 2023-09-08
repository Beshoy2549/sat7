// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@pinia/nuxt" , '@nuxtjs/tailwindcss' , '@vee-validate/nuxt' , 'nuxt-icon' , 'nuxt-swiper'],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css' ], // Create this file if it doesn't exist

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vee-validate.ts', mode: 'client' },

  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_varabiles.scss" as *;'
        }
      }
    }
  },

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
