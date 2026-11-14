<script setup lang="ts">
import { downloadPath } from '../constants'
</script>

<template>
  <figure class="flex flex-col items-center gap-2">
    <a
      :href="downloadPath"
      title="Scan to get Captime on your phone"
      class="rounded-xl bg-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <img
        src="/download-qr.svg"
        alt="QR code linking to captime.app/download"
        width="120"
        height="120"
        class="h-[120px] w-[120px]"
        loading="lazy"
      >
    </a>
    <figcaption class="text-sm text-gray-400">
      Scan to get Captime on your phone
    </figcaption>
  </figure>
</template>
