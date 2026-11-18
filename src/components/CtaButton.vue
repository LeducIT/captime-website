<script setup lang="ts">
import { computed } from 'vue'
import { campaignPath } from '../lib/campaign'

const props = withDefaults(defineProps<{
  href?: string
  ct?: string
  size?: 'sm' | 'md'
  title?: string
}>(), {
  ct: 'nav',
  size: 'md',
  title: 'Download Captime',
})

const resolvedHref = computed(() => props.href || campaignPath(props.ct))
const isExternal = computed(() => /^https?:\/\//.test(resolvedHref.value))
</script>

<template>
  <a
    :href="resolvedHref"
    :title="title"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="size === 'sm' ? 'btn-cta-sm' : 'btn-cta-md'"
  >
    <slot />
  </a>
</template>
