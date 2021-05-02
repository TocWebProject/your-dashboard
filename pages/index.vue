<template>
    <!-- Content  -->
    <div class="w-full p-4 lg:p-10 lg:ml-24">
      <!-- Tools -->
      <Tools />

      <!-- Toggle SideBar only on mobile -->
      <div class="bg-gray-200 rounded-xl mt-4 lg:hidden p-2">
        <button class="block w-32 h-10 text-white font-semibold bg-blue-600 rounded-lg mx-auto" @click="showSideBar = !showSideBar">
          Toggle Sidebar
        </button>
      </div>

      <!-- Center content with sidebar toggle -->
      <div class="overflow-hidden">
        <div class="transform lg:transform-none transition-all duration-200" :class="showSideBar ? '-translate-x-full' : ''">
          <div class="flex mt-4 lg:mt-10 lg:space-x-10">
            <!-- Center content -->
            <div class="w-full flex-shrink-0 lg:w-3/4 lg:flex-shrink rounded-xl">

              <div class="flex space-x-4 lg:space-x-10">
                <div class="bg-gray-200 rounded-xl h-28 w-full"></div>
                <div class="bg-gray-200 rounded-xl h-28  w-full"></div>
                <div class="bg-gray-200 rounded-xl h-28  w-full"></div>
              </div>
            
              <div class="bg-gray-200 rounded-xl h-28 mt-4 lg:mt-10 w-full"></div>

              <div class="flex space-x-4 lgspace-x-10 mt-4 lg:mt-10">
                <div class="bg-gray-200 rounded-xl h-28 w-full"></div>
                <div class="bg-gray-200 rounded-xl h-28 w-full"></div>
              </div>

            </div>
            <!-- Sidebar -->
            <div class="w-full flex-shrink-0 lg:w-1/4 lg:flex-shrink bg-gray-50 rounded-xl h-64">
              Sidebar
            </div>

          </div>  
        </div> 
      </div>   
    </div>
</template>

<script>
export default {
  name: 'dashboard',
  transitions: 'page',
  data(){
    return {
      showSideBar: false,
    }
  }
}  
</script>

