import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/Favicon.png' }
      ],
      title: 'AboutMe',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'AboutMe' }
      ]
    }
  },
  googleFonts: {
    display: 'Montserrat',
    prefetch: true,
    preconnect: true,
    download: false,
    preload: true,
    families: {
      Montserrat: [400, 500, 700]
    }
  }
})
