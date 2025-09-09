export default defineNuxtConfig({
  // Get all the pages, components, composables and plugins from the parent theme
  extends: ['./woonuxt_base'],

  components: [{ path: './components', pathPrefix: false }],

  // Add the image configuration here
  image: {
    provider: 'cloudflare',
    cloudflare: {
      baseURL: 'https://shop.naturenutricia.com'
    },
    presets: {
      default: {
        quality: 80,
        format: 'webp'
      }
    }
  },

  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
    },
    minify: true
  },
});
