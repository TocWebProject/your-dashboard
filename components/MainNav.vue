<template>
    <!-- Main NavBar -->
    <nav class="fixed bottom-0 w-full lg:w-20 lg:h-full z-10">
        <div class="w-full lg:w-20 h-full bg-blue-900 relative">
            <NuxtLink 
            to="/"
            class="hidden absolute top-10 left-1/2 transform -translate-x-1/2 lg:flex lg:justify-center lg:items-center w-14 h-14 rounded-xl hover:bg-white hover:bg-opacity-20"
            aria-label="Back to Dashboard"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>   
            </NuxtLink>
            <div class="flex lg:flex-col items-center justify-center h-full space-x-8 lg:space-x-0 lg:space-y-4 py-2 lg:py-4">
                <div class="group">
                    <NuxtLink to="/" :class="isActive01 ? 'nav-link-active' : 'nav-link'" aria-label="Dashboard">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg> 
                    </NuxtLink>
                </div>
                <div class="group">
                    <NuxtLink to="messagerie" :class="isActive02 ? 'nav-link-active' : 'nav-link'" aria-label="Messagerie">
                        <div >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        </div>
                    </NuxtLink>
                </div>
                <div class="group">
                    <NuxtLink to="/statistiques" :class="isActive03 ? 'nav-link-active' : 'nav-link'" aria-label="Statistiques">
                        <div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                        </div>
                    </NuxtLink>
                </div>
                <div class="group">
                    <NuxtLink to="/calendrier" :class="isActive04 ? 'nav-link-active' : 'nav-link'" aria-label="Calendrier">
                        <div>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div> 
    </nav>
</template>

<script>
export default {
    name:'MainNav',
    data() {
        return {
            isActive01: false,
            isActive02:false,
            isActive03: false,
            isActive04: false,
        }
    },
    methods: {
        findActivelink() {
            if (this.$route.path === "/") {
                this.isActive01 = true;
                this.isActive02 = false;
                this.isActive03 = false;
                this.isActive04 = false;
            } else if (this.$route.path === '/messagerie') {
                this.isActive02 = true;
                this.isActive01 = false;
                this.isActive03 = false;
                this.isActive04 = false;
            } else if (this.$route.path === '/statistiques') {
                this.isActive03 = true;
                this.isActive01 = false;
                this.isActive02 = false;
                this.isActive04 = false;
            } else if (this.$route.path === '/calendrier') {
                this.isActive04 = true;
                this.isActive03 = false;
                this.isActive02 = false;
                this.isActive01 = false;
            }
        }
    },

    watch:{
    $route (to, from){
        this.findActivelink();
        }
    },

    mounted() {
        this.findActivelink();
    }
}
</script>
