<script setup lang="ts">
import { computed, ref } from 'vue'
import CtaButton from './CtaButton.vue'

const props = defineProps<{
  blog?: boolean
}>()

const expanded = ref(false)
const wordmark = computed(() => props.blog ? 'Captime Blog' : 'Captime')
const wordmarkHref = computed(() => props.blog ? '/blog/' : '/')
</script>

<template>
  <header class="py-2 bg-black sm:py-4">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="flex shrink-0 items-center space-x-4">
          <a href="/" title="Captime home" aria-label="Captime home" class="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            <img class="w-auto h-14 border-2 border-white" height="56" width="56" loading="eager" decoding="async" alt="Captime Logo" title="Captime Logo" src="/icon.webp" />
          </a>
          <a :href="wordmarkHref" :title="wordmark" :aria-label="wordmark" class="font-handel leading-none text-white whitespace-nowrap rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black" :class="blog ? 'text-2xl sm:text-3xl' : 'text-3xl'">
            {{ wordmark }}
          </a>
        </div>

        <div class="flex md:hidden">
          <button type="button" title="Expand menu" class="text-white rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black" @click="expanded = !expanded">
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

        <nav class="hidden ml-auto mr-6 space-x-10 md:flex md:items-center md:justify-end lg:space-x-12">
          <a v-if="blog" href="/" title="Home" class="text-lg font-normal text-white transition-colors duration-200 hover:text-gray-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"> Home </a>
          <a v-else href="/blog/" title="Blog" class="text-lg font-normal text-white transition-colors duration-200 hover:text-gray-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"> Blog </a>
        </nav>

        <div class="relative hidden md:block">
          <CtaButton size="sm" ct="nav">
            Try for free
          </CtaButton>
        </div>
      </div>

      <nav :hidden="!expanded" class="md:hidden">
        <div class="flex flex-col items-center pt-8 pb-4 space-y-6">
          <a v-if="blog" href="/" title="Home" class="text-lg font-normal text-white transition-colors duration-200 hover:text-gray-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            Home
          </a>
          <a v-else href="/blog/" title="Blog" class="text-lg font-normal text-white transition-colors duration-200 hover:text-gray-300 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            Blog
          </a>

          <CtaButton size="sm" ct="nav">
            Try for free
          </CtaButton>
        </div>
      </nav>
    </div>
  </header>
</template>
