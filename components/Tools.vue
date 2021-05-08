<template>
    <div class="flex lg:space-x-10">
        <!-- Search Form visible in desktop mode / hidden for mobile, moveed to the menu configuration with image profile-->
        <div class="hidden lg:w-1/2 lg:block">
            <SearchForm />
        </div>
        <div class="w-full lg:w-1/2">
            <div class="flex justify-between">
                <!-- Logo of the brand visible in mobile/tablet only -->
                <div class="lg:hidden">
                    <NuxtLink 
                        to="/"
                        aria-label="Back home"
                        class="flex justify-center items-center w-14 h-14 rounded-xl bg-gray-50 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>   
                    </NuxtLink>
                </div>
                <!-- Quick menu visible for desktop / hidden for mobile, moved to the menu configuration with image profile -->
                <div class="h-10 hidden lg:flex items-center space-x-5 font-semibold">
                    <a href="#" class="hover:text-blue-800">Cours</a>
                    <a href="#" class="hover:text-blue-800">Contacts</a>
                    <a href="#" class="hover:text-blue-800">Aides</a>
                </div>
                <!-- notification & menu configuration -->
                <div class="flex items-center space-x-4">
                    <!-- Notifications -->
                    <a href="#" class="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-700 relative" aria-label="Notifications">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        <div class="notification w-2 h-2 bg-red-600 rounded-full absolute top-2 right-2"></div>
                    </a>
                    <!-- Image profile with menu configuration -->
                    <div class="lg:relative">
                        <!-- Modal button -->
                        <button @click="isOpen = !isOpen" class="w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 focus:ring-offset-white">
                            <img src="~assets/img/portrait-notion-yann-rioual.png" alt="portrait" class="h-10 w-10 object-cover">
                        </button>
                        <!-- Trick to close modal when clicking button into the layout  -->
                        <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 w-full h-full z-20 cursor-default" tabindex="-1"></button>
                        <!-- Smooth transition for opening modal  -->
                        <transition
                            enter-active-class="transition ease-out duration-100 transform"
                            enter-from-class="opacity-0 scale-90"
                            enter-to-class="opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75 transform"
                            leave-from-class="opacity-100 scale-100"
                            leave-to-class="opacity-0 scale-95"
                        >    
                            <!-- Modal menu -->
                            <div v-if="isOpen" class="absolute right-0 mt-2 w-full lg:w-48 z-30">
                                <div class="bg-white mx-4 lg:mx-0 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 ">
                                    <div class="lg:hidden p-3">
                                        <SearchForm />
                                    </div>
                                    <!-- Quick Menu only for mobile -->
                                    <div class="lg:hidden border-b border-blue-50">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Cours</a>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Contact</a>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Aides</a>
                                    </div>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Profile</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Options</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Se déconnecter</a>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import { Linear } from "gsap";
export default {
    name: 'Tools',
    data(){
        return {
            isOpen: false,
        }
    },
    methods: {
        notificationLoopAnimation() {
           const gsap = this.$gsap
           let loopNotification = new gsap.timeline({repeat: 10})
            .from('.notification', 1.2, { backgroundColor: '#991b1b', ease:Linear.easeIn})
            .from('.notification', 1.2, { backgroundColor: '#f87171', ease:Linear.easeOut})
            .repeat(-1)
        }
    },
    mounted(){
        this.notificationLoopAnimation();
    }
}
</script>