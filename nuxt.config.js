export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.
  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'your-dashboard',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor diam, ullamcorper et sem laoreet, molestie accumsan lorem. Nullam vehicula, sapien vel fermentum' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Tailwind Just in time
  tailwindcss: {
    jit: true
  },

  //GSAP Config
  gsap: {
    extraPlugins: {
      /**
       * After activation, plugins are automatically
       * registered and available globally
       */
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },

  // PWA
  pwa: {
    manifest: {
      name: 'Your Dashboard',
      lang: 'fr',
      description: 'Dashboard Sportif',
      background_color: '#2563eb',

    },
    meta: {
      name:'Dashboard Sportif',
      author: 'Yann',
      lang: 'fr',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor diam, ullamcorper et sem laoreet, molestie accumsan lorem. Nullam vehicula, sapien vel fermentum porttitor, eros eros porttitor turpis, et eleifend elit purus vitae lectus. Nunc ac metus facilisis nisl convallis.',
      theme_color: '#2563eb',
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      babelrc: true,
    }
  }
}
