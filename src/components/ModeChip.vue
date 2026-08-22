<script setup lang="ts">
import { computed } from 'vue'
import { modeChipClass } from '../services/modes'

const props = defineProps<{
  label?: string
}>()

const classes = computed(() => modeChipClass(props.label || ''))
</script>

<template>
  <span
    v-if="label"
    class="inline-flex items-center px-3 py-1 text-xs font-handel tracking-wide uppercase border"
    :class="classes"
  >
    {{ label }}
  </span>
</template>
