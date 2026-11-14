<script setup lang="ts">
import { computed } from 'vue'
import { getWhiteboard, type ModeName } from '../services/modes'

const props = defineProps<{
  mode: ModeName
}>()

const board = computed(() => getWhiteboard(props.mode))
</script>

<template>
  <aside class="my-8 border border-white bg-black px-6 py-8 text-center" aria-label="WOD whiteboard">
    <p class="font-handel text-3xl tracking-wide text-ruby-500 sm:text-4xl">
      {{ mode }}
    </p>
    <p class="mt-4 font-alarm text-5xl text-stoplight-500 sm:text-6xl">
      {{ board.time }}
    </p>
    <p class="mt-5 font-handel text-sm tracking-[0.2em] text-white sm:text-base">
      {{ board.cue }}
    </p>
  </aside>
</template>
