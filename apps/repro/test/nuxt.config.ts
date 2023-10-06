export default defineNuxtConfig({
  // ssr: false,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {
        config: `${__dirname}/tailwind.config.js`,
      },
      autoprefixer: {},
    },
  },
})
