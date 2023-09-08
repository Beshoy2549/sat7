import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // Define your store state properties here
    authUser: useCookie('authUser') || {},
  }),
  getters: {
    // Define your getters here
    getAuthUser(): any {
      return this.authUser
    },
    isAuthenticated(): any {
      return this.authUser?.auth_token
    },
  },
  actions: {
    // Define your actions here
    setAuthUser(user: any) {
      this.authUser = user
      const authUser = useCookie('authUser')
      authUser.value = user
    }
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
