// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: ["ddnsgo1.intranetpenetration.us.ci"]
    }
  },
  nitro: {
    output: {
      publicDir: 'dist'
    }
  }
})
