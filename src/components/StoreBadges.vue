<script setup lang="ts">
import { appStoreUrl, playStoreUrl } from '../constants'
</script>

<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-3">
    <a
      :href="appStoreUrl"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Captime on the App Store"
      class="store-badge-box"
    >
      <img
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width="160"
        height="48"
        class="store-badge"
        loading="eager"
        decoding="async"
      >
    </a>
    <a
      :href="playStoreUrl"
      target="_blank"
      rel="noopener noreferrer"
      title="Download Captime on Google Play"
      class="store-badge-box"
    >
      <img
        src="/play-store-badge.png"
        alt="Get it on Google Play"
        width="160"
        height="48"
        class="store-badge"
        loading="eager"
        decoding="async"
      >
    </a>
  </div>
</template>
