/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    __dirname + '/components/**/*.{js,vue,ts}',
    __dirname + '/layouts/**/*.vue',
    __dirname + '/pages/**/*.vue',
    __dirname + '/plugins/**/*.{js,ts}',
    __dirname + '/nuxt.config.{js,ts}',
    __dirname + '/app.vue',
  ],
  theme: {
    extend: {},
  }
}
