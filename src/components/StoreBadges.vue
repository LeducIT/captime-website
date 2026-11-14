<script setup lang="ts">
import { computed } from 'vue'
import { appStoreCampaignUrl, campaignPath, playStoreCampaignUrl } from '../lib/campaign'

const props = withDefaults(defineProps<{
  ct: string
  direct?: boolean
}>(), {
  direct: false,
})

const appleHref = computed(() => props.direct ? appStoreCampaignUrl(props.ct) : campaignPath(props.ct))
const playHref = computed(() => props.direct ? playStoreCampaignUrl(props.ct) : campaignPath(props.ct))
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
