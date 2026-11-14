<script setup lang="ts">
import { computed } from 'vue'
import { formatTime } from '../config/app'
import { getPostMode } from '../services/modes'
import ModeChip from './ModeChip.vue'

const props = defineProps<{
  link: string
  title: string
  image: string
  description: string
  date: string
  tag?: string
}>()

const cannLink = computed(() => `/blog/${props.link}/`)
const mode = computed(() => getPostMode({ slug: props.link, title: props.title, tag: props.tag }))
const chip = computed(() => mode.value || (props.tag || '').trim())
const imageSrc = computed(() => props.image || '/blog_meta.webp')
</script>

<template>
  <div class="p-6 transition-all duration-200 group border border-2 border-white hover:-translate-y-1">
    <a :href="cannLink" :title="title" :aria-label="title" class="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
      <img
        class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
        loading="lazy"
        decoding="async"
        height="232"
        width="378"
        :alt="description || `blog illustration ${title}`"
        :title="title"
        :src="imageSrc"
      />
    </a>

    <div class="flex items-center justify-between mt-6 gap-3">
      <ModeChip :label="chip" />

      <p class="text-sm font-medium text-gray-400">
        {{ formatTime(date) }}
      </p>
    </div>

    <hr class="my-5 border-gray-700" />

    <h3 class="text-lg font-semibold text-white xl:text-xl group-hover:text-gray-200">
      <a :href="cannLink" :title="title" :aria-label="title" class="">
        {{ title }}
      </a>
    </h3>
  </div>
</template>
