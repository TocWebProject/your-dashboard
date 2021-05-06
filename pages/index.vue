<template>
    <!-- Content  -->
    <main class="w-full p-4 lg:p-10 lg:ml-24">
      <!-- Tools -->
      <Tools />

      <!-- Toggle SideBar only on mobile -->
      <div class="bg-blue-100 rounded-xl mt-4 lg:hidden p-2">
        <button class="block w-48 h-10 text-white font-semibold bg-blue-800 rounded-lg mx-auto" @click="showSideBar = !showSideBar">
          Informations Séance
        </button>
      </div>

      <!-- Center content with sidebar toggle -->
      <div class="overflow-hidden">
        <div class="transform lg:transform-none transition-all duration-200" :class="showSideBar ? '-translate-x-full' : ''">
          <div class="flex mt-4 lg:mt-10 lg:space-x-10">
            <!-- Center content -->
            <div class="w-full flex-shrink-0 lg:w-3/4 lg:flex-shrink rounded-xl">

              <div class="flex space-x-4 lg:space-x-6">
                <div class="w-1/3 bg-white shadow-lg border border-blue-100 rounded-xl flex flex-col lg:flex-row items-center p-3 lg:p-5 space-x-0 lg:space-x-3">
                  <div class="bg-blue-50 text-blue-800 p-2 rounded-lg w-2/3 lg:w-auto">
                    <svg class="w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div class="text-center lg:text-left">
                    <span class="block uppercase text-xs text-gray-600 tracking-wider font-semibold mt-2 lg:mt-0">Objectifs</span>
                    <span class="text-lg font-semibold mx-auto">30min/Jour</span>
                  </div>
                </div>
                <div class="w-1/3 bg-white shadow-lg border border-blue-100 rounded-xl flex flex-col lg:flex-row items-center p-3 lg:p-5 space-x-0 lg:space-x-3">
                  <div class="bg-blue-50 text-blue-800 p-2 rounded-lg w-2/3 lg:w-auto">
                    <svg class="w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                  <div class="text-center lg:text-left">
                    <span class="block uppercase text-xs text-gray-600 tracking-wider font-semibold mt-2 lg:mt-0">Focus</span>
                    <span class="text-lg font-semibold mx-auto">Exercices étirement</span>
                  </div>
                </div>
                <div class="w-1/3 bg-blue-600 shadow-lg border border-blue-900 rounded-xl flex flex-col lg:flex-row items-center p-3 lg:p-5 space-x-0 lg:space-x-3">
                  <div class="bg-blue-900 text-white p-2 rounded-lg w-2/3 lg:w-auto">
                    <svg class="w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div class="text-center lg:text-left">
                    <span class="block uppercase text-xs text-white tracking-wider font-semibold mt-2 lg:mt-0">Prochain Rdv</span>
                    <span class="text-lg font-semibold mx-auto text-blue-50">07/05/21</span>
                  </div>
                </div>
              </div>
            
              <div class="bg-blue-100 rounded-xl h-64 mt-4 lg:mt-10 w-full"></div>

              <div class="flex space-x-4 lgspace-x-10 mt-4 lg:mt-10">
                <div class="bg-blue-200 rounded-xl h-28 w-full"></div>
                <div class="bg-blue-200 rounded-xl h-28 w-full"></div>
              </div>
            </div>
            <!-- Sidebar -->
            <div class="w-full flex-shrink-0 lg:w-1/4 lg:flex-shrink bg-gray-50 rounded-xl h-64">
              <p class="text-center text-lg font-semibold p-4 text-blue-800 tracking-wider uppercase mt-2">Informations sur votre prochaine séance :</p>
            </div>
          </div>  
        </div> 
      </div>   
    </main>
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

