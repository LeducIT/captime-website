<script setup lang="ts">
import { downloadUrl } from '../constants'
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <a
      :href="downloadUrl"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Captime on the App Store"
      class="rounded-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <img
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width="144"
        height="48"
        class="store-badge"
        loading="lazy"
      >
    </a>
    <a
      :href="downloadUrl"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Captime on Google Play"
      class="rounded-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <img
        src="/play-store-badge.png"
        alt="Get it on Google Play"
        width="158"
        height="48"
        class="store-badge"
        loading="lazy"
      >
    </a>
  </div>
</template>
