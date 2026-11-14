<script setup lang="ts">
import { computed } from 'vue'
import { campaignPath } from '../lib/campaign'

const props = defineProps<{
  ct: string
}>()

const appleHref = computed(() => campaignPath(props.ct, 'ios'))
const playHref = computed(() => campaignPath(props.ct, 'android'))
</script>

<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-3">
    <a
      :href="appleHref"
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
      :href="playHref"
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
