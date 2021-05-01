<template>
  <div class="container">
    <div class="flex flex-col">    
        <h1 
        class="text-5xl text-blue-900"
        v-gsap.fromTo="[
        { opacity: 0, y: -350 },
        { opacity: 1, y: 0, duration: 3 }
        ]"
        >
            Sport
        </h1>
        <NuxtLink to="/">Dashboard</NuxtLink>
        </div>
  </div>
</template>

<script>
export default {
  name: 'sport',
  transitions: 'page',
}
</script>

