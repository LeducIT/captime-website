<script setup lang="ts">
import { downloadUrl } from '../constants'

withDefaults(defineProps<{
  size?: 'sm' | 'md'
}>(), {
  size: 'md',
})
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a
      :href="downloadUrl"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Captime on the App Store"
    >
      <img
        src="/app-store-button.webp"
        alt="Download on the App Store"
        width="120"
        height="40"
        :class="size === 'sm' ? 'h-8 w-auto' : 'h-10 w-auto'"
        loading="lazy"
      >
    </a>
    <a
      :href="downloadUrl"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Captime on Google Play"
    >
      <img
        src="/play-store-button.webp"
        alt="Get it on Google Play"
        width="135"
        height="40"
        :class="size === 'sm' ? 'h-8 w-auto' : 'h-10 w-auto'"
        loading="lazy"
      >
    </a>
  </div>
</template>
