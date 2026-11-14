<script setup lang="ts">
import { downloadUrl } from '../constants'

withDefaults(defineProps<{
  href?: string
  size?: 'sm' | 'md'
  title?: string
}>(), {
  href: downloadUrl,
  size: 'md',
  title: 'Download Captime',
})
</script>

<template>
  <a
    :href="href"
    :title="title"
    target="_blank"
    rel="noopener noreferrer"
    :class="size === 'sm' ? 'btn-cta-sm' : 'btn-cta-md'"
  >
    <slot />
  </a>
</template>
