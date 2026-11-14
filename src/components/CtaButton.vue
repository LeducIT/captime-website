<script setup lang="ts">
import { computed } from 'vue'
import { downloadPath } from '../constants'

const props = withDefaults(defineProps<{
  href?: string
  size?: 'sm' | 'md'
  title?: string
}>(), {
  href: downloadPath,
  size: 'md',
  title: 'Download Captime',
})

const isExternal = computed(() => /^https?:\/\//.test(props.href))
</script>

<template>
  <a
    :href="href"
    :title="title"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="size === 'sm' ? 'btn-cta-sm' : 'btn-cta-md'"
  >
    <slot />
  </a>
</template>
