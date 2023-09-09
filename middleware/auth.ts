import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
    const store = useAuthStore()
    const loginPath = "/auth/sign-in"
    if (to.path !== loginPath && !store.isAuthenticated) {
        return navigateTo(loginPath)
    }
})
