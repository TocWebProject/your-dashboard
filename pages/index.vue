<template>
  <div class="container">
    <div class="min-w-full  flex flex-col">
      <h1 
        class="text-5xl text-blue-900 mt-20"
        v-gsap.fromTo="[
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 }
        ]"
      >
        Your Dashboard
      </h1>
      <NuxtLink to="/sport">Sport</NuxtLink>
      <div class="h-80 bg-blue-300"></div>
      <div class="h-80 bg-blue-400"></div>
      <div class="h-80 bg-blue-500"></div>
      <div class="scroll-animate h-80 bg-blue-600">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  transitions: 'page',

  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

      this.$gsap.from('.scroll-animate', {
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.scroll-animate',
          scrub: 2,
          start: 'top bottom',
          end: 'top 60%'
          },
          opacity: 0,
      })
    }
  }
}
</script>

