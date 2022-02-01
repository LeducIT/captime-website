<script setup lang="ts">
const expanded = ref(false)
</script>
<template>
  <header class="py-4 bg-black">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="flex-shrink-0">
          <a href="/" title="" class="flex items-center text-xl text-white font-handel">
            <img class="w-auto mr-3 bg-white h-14" src="/icon.png" alt="Captime Logo">Captime
          </a>
        </div>

        <div class="flex lg:hidden text-white">
          <button type="button" class="text-gray-100" :aria-expanded="expanded" @click="expanded = !expanded">
            <span :class="{'hidden': expanded}" aria-hidden="true">
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>

            <span :class="{'hidden': !expanded}" aria-hidden="true">
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <nav class="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
          <a href="/blogs" title="" class="text-base text-white transition-all duration-200 hover:text-opacity-80"> Resources </a>

          <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

          <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

          <a href="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Support </a>
        </nav>

        <nav class="hidden lg:flex">
          <a
            href="http://onelink.to/captime"
            target="_blank"
            title="Try Captime for free"
            class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white border-2 border-white hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
            role="button"
          >
            Try for free
          </a>
        </nav>
      </div>

      <nav :class="{'hidden': !expanded}">
        <div class="px-1 py-8">
          <div class="grid gap-y-7">
            <a href="#" title="" class="flex items-center p-3 -m-3 text-base font-medium text-white transition-all duration-200 rounded hover:bg-gray-500 focus:outline-none font-pj focus:ring-1 focus:ring-gray-300 focus:ring-offset-2"> Resources </a>

            <a
              href="#"
              title=""
              class="inline-flex items-center justify-center px-6 py-2 text-base font-bold leading-7 text-white transition-all border-2 border-white duration-200 bg-gray-900 rounded hover:bg-gray-500 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Try for free
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
