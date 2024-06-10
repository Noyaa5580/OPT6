// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    'nuxt-primevue',
    'notivue/nuxt'
  ],
  css: [
    'notivue/notification.css', // Only needed if using built-in <Notification />
    'notivue/animations.css', // Only needed if using default animations
    'notivue/notification-progress.css'
  ],

  notivue: {
    position: 'top-right',
    notifications: {
      global: {
        duration: 3000
      },
    },
  },

  primevue: {
    usePrimeVue: true
  }
})