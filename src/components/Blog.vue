<script setup lang="ts">
import { computed } from 'vue'
import { formatTime } from '../config/app'

const props = defineProps<{
  link: string
  title: string
  image: string
  description: string
  date: string
  tag: string
}>()

const cannLink = computed(() => `/blog/${props.link}/`)
</script>

<template>
  <div class="p-6 transition-all duration-200 group border border-2 border-white hover:-translate-y-1">
    <a :href="cannLink" :title="title" :aria-label="title" class="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
      <img
        class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
        loading="lazy"
        height="232"
        width="378"
        :alt="`blog illustration ${title}`"
        :title="`blog illustration ${title}`"
        :src="image"
      />
    </a>

    <div class="flex items-center justify-between mt-6">
      <p class="text-sm font-medium text-gray-400">
        <a href="#" title="" class=""> {{ tag }} </a>
      </p>

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
