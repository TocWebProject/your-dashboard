<template>
    <main class="min-w-full flex flex-col">
        <h1 
            class="text-5xl text-blue-900 m-20 mx-auto"
            v-gsap.fromTo="[
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0 }
            ]"
        >
            Calendrier
        </h1>
        <NuxtLink class="text-2xl font-semibold text-blue-800 hover:text-blue-600 mb-20 mx-auto" to="/">Your Dashboard</NuxtLink>
        <div class="scroll-animate h-96 bg-blue-200"></div>
        <div class="scroll-animate h-96 bg-blue-300"></div>
        <div class="scroll-animate h-96 bg-blue-400"></div>
        <div class="scroll-animate h-96 bg-blue-500"></div>
        <div class="scroll-animate h-96 bg-blue-600"></div>
        <div class="scroll-animate h-96 bg-blue-800"></div>
        <div class="scroll-animate h-96 bg-blue-900"></div>
        <div class="scroll-animate h-96 bg-blue-800"></div>
        <div class="scroll-animate h-96 bg-blue-700"></div>
        <div class="scroll-animate h-96 bg-blue-600"></div>
        <div class="scroll-animate h-96 bg-blue-500"></div>
        <div class="scroll-animate h-96 bg-blue-400"></div>
        <div class="scroll-animate h-96 bg-blue-300"></div>
        <div class="scroll-animate h-96 bg-blue-200"></div>
        <div class="h-96 bg-blue-100"></div>
    </main>
</template>

<script>
export default {
  name: 'calendrier',
  transitions: 'page',

  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
    //   this.$gsap.to(window, { duration: 5, scrollTo: 5400 })

      // this.$gsap.from('.scroll-animate', {
      //   ease: 'Power1.easeInOut',
      //   scrollTrigger: {
      //     trigger: '.scroll-animate',
      //     scrub: 2,
      //     start: 'top bottom',
      //     end: 'top 60%'
      //     },
      //     opacity: 0,
      // })

      const gsap = this.$gsap
      let boxes = document.querySelectorAll('.scroll-animate');

      boxes.forEach( function( elem ) {
          gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 30%',
                end: 'top 60%',
                toggleActions: "play none none reverse"
            },
            rotation: 180,
            duration: 0.6
          })
      })
    }
  }
}
</script>
