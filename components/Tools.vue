<template>
    <div class="flex space-x-10">
        <div class="w-1/2">
            <SearchForm />
        </div>
        <div class="w-1/2">
            <div class="flex justify-between">
                <div class="h-10 flex items-center space-x-5 font-semibold">
                    <a href="#" class="hover:text-blue-800">Cours</a>
                    <a href="#" class="hover:text-blue-800">Contacts</a>
                    <a href="#" class="hover:text-blue-800">Aides</a>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="#" class="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-700 relative">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        <div class="notification w-2 h-2 bg-red-600 rounded-full absolute top-2 right-2"></div>
                    </a>
                    <div class="relative">
                        <button @click="isOpen = !isOpen" class="w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 focus:ring-offset-white">
                            <img src="~assets/img/portrait-notion-yann-rioual.png" alt="portrait" class="h-10 w-10 object-cover">
                        </button>
                        <button v-if="isOpen" @click="isOpen = false" class="fixed inset-0 w-full h-full z-20 cursor-default" tabindex="-1"></button>
                        <transition
                            enter-active-class="transition ease-out duration-100 transform"
                            enter-from-class="opacity-0 scale-90"
                            enter-to-class="opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75 transform"
                            leave-from-class="opacity-100 scale-100"
                            leave-to-class="opacity-0 scale-95"
                        >    
                            <div v-if="isOpen" class="absolute right-0 mt-1 bg-white w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-30">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Profile</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Profile</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Profile</a>
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