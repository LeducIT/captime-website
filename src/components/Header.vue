<template>
  <header class="absolute inset-x-0 top-0 z-10 w-full bg-black">
    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <div class="flex-shrink-0">
          <a href="#" title="" class="flex items-center text-xl text-white font-handel">
            <img class="w-auto mr-3 bg-white h-14" src="/icon.png" alt="Captime Logo">Captime
          </a>
        </div>

        <button type="button" class="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800">
          <!-- Menu open: "hidden", Menu closed: "block" -->
          <svg class="block w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <!-- Menu open: "block", Menu closed: "hidden" -->
          <svg class="hidden w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>

          Menu
        </button>

        <div class="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
          <!-- <a href="/features" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Features </a>

          <a href="/solutions" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Solutions </a> -->

          <a href="/blogs" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Resources </a>

          <!-- <a href="/pricing" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Pricing </a> -->
        </div>

        <a href="#" title="" class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white border-2 border-white hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
      </div>
    </div>
  </header>
</template>
