import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' },
      ]
    },
  },

  components: {
    dirs: [
      'components/content',
      'components/layouts',
      'components/logos'
    ]
  },

  imports: {
    dirs: [
      'composables',
      'composables/**/*.{ts,js,mjs,mts}',
      'composables/**',
      'utils',
      'utils/**/*.{ts,js,mjs,mts}',
      'utils/**'
    ]
  },

  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore'
        ]
      }
    ]
  ],

  content: {
    highlight: {
      theme: 'dark-plus',
      preload: ['html', 'css', 'ts', 'js', 'vue','r', 'cmd']
    }
  },

  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
})
