<template>
  <div class="container">
    <div class="min-w-full  flex flex-col">
      <h1 
        class="text-5xl text-blue-900 m-20"
        v-gsap.fromTo="[
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 }
        ]"
      >
        Your Dashboard
      </h1>
      <NuxtLink class="text-2xl font-semibold text-blue-800 hover:text-blue-600" to="/sport">Sport</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  transitions: 'page',
}  
</script>

