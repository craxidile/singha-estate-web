// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildDir: process.env.NODE_ENV === 'production' ? 'dist' : undefined,
  css: [
    '~/assets/scss/styles.scss',
  ],
  modules: [
    // '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
