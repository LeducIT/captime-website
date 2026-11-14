<script setup lang="ts">
import { computed } from 'vue'
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
  <aside class="not-prose my-10 rounded-2xl ring-1 ring-white/10 bg-[#151515] px-6 py-8 text-center">
    <p class="font-handel text-2xl text-white sm:text-3xl">
      {{ copy }}
    </p>
    <p class="mt-3 text-sm text-gray-400">
      Start the timer on iPhone or Android and smash the clock.
    </p>
    <div class="mt-6">
      <StoreBadges ct="blog_cta" />
    </div>
  </aside>
</template>
