<script setup lang="ts">
import { ref } from 'vue'
import { downloadUrl } from '../constants'
import StoreBadges from './StoreBadges.vue'

const expanded = ref(false)
</script>

<template>
  <header class="py-2 bg-black sm:py-4">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="shrink-0">
          <a href="/" title="Captime home" aria-label="Captime home" class="flex items-center space-x-4">
            <img class="w-auto h-14 border-2 border-white" height="56" width="56" loading="eager" alt="Captime Logo" title="Captime Logo" src="/icon.webp" />
            <span class="font-handel text-white text-3xl">Captime</span>
          </a>
        </div>

        <div class="flex md:hidden">
          <button type="button" title="Expand menu" class="text-white" @click="expanded = !expanded">
            <span :hidden="expanded">
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>

            <span :hidden="!expanded">
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <nav class="hidden ml-auto mr-10 space-x-10 md:flex md:items-center md:justify-end lg:space-x-12">
          <a href="/blog/" title="" class="text-lg font-normal text-white transition-all duration-200 hover:text-white"> Blog </a>
        </nav>

        <div class="relative hidden md:flex md:flex-col md:items-end md:gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="downloadUrl"
            title="Download"
            class="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white border border-white rounded-none hover:bg-white hover:text-black transition ease-in-out"
            role="button"
          >
            Try for free
          </a>
          <StoreBadges size="sm" />
        </div>
      </div>

      <nav :hidden="!expanded" class="md:hidden">
        <div class="flex flex-col pt-8 pb-4 space-y-6">
          <a href="/blog/" title="Blog" class="relative inline-flex items-center justify-center w-full text-lg font-normal text-white transition-all duration-200 hover:text-white">
            Blog
          </a>

          <div class="relative flex flex-col items-center justify-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="downloadUrl"
              title="Download"
              class="relative inline-flex items-center justify-center w-full px-6 py-2 text-lg font-normal text-white border border-white hover:text-black hover:bg-white rounded-none"
              role="button"
            >
              Try for free
            </a>
            <StoreBadges size="sm" />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
