<script setup lang="ts">
import { computed } from 'vue'
import { downloadUrl } from '../constants'
import StoreBadges from './StoreBadges.vue'

const props = defineProps<{
  mode?: string
}>()

const copy = computed(() => {
  if (props.mode)
    return `Run this ${props.mode} in Captime.`
  return 'Run this WOD in Captime.'
})
</script>

<template>
  <aside class="not-prose my-10 border border-white bg-black px-6 py-8 text-center">
    <p class="font-handel text-2xl text-white sm:text-3xl">
      {{ copy }}
    </p>
    <p class="mt-3 text-sm text-gray-300">
      Start the timer on iPhone or Android and smash the clock.
    </p>
    <a
      :href="downloadUrl"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Captime"
      class="mt-6 inline-flex items-center justify-center border border-white px-6 py-2 text-lg font-bold text-white rounded-none hover:bg-white hover:text-black transition ease-in-out"
    >
      Try for free
    </a>
    <div class="mt-5">
      <StoreBadges />
    </div>
  </aside>
</template>
