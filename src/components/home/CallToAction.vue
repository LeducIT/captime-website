<script setup lang="ts">
import StoreBadges from '../StoreBadges.vue'

const slides = [
  {
    title: 'Smash every workout.',
    content: "It's time to smash your workout goals and achieve the maximum results using this professional timer app.",
    image: '/hero_1.webp',
  },
  {
    title: 'Home or gym, same timer.',
    content: 'It makes no difference if you workout at home or in the gym.',
    image: '/hero_3.webp',
  },
  {
    title: 'Train anywhere.',
    content: 'Captime ensures that your workouts are effective regardless of where you train.',
    image: '/hero_2.webp',
  },
]
</script>

<template>
  <section v-for="(slide, i) in slides" :key="i" class="relative pb-20">
    <img
      class="w-full h-[120vh] sm:h-auto opacity-50 object-cover"
      :src="slide.image"
      height="1200px"
      width="1920px"
      loading="lazy"
      :alt="`Illustration ${slide.content}`"
      :title="`Illustration ${slide.content}`"
    />
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/75" />
    <div class="absolute inset-0 flex items-center justify-center px-6">
      <div class="text-center max-w-2xl rounded-2xl px-5 py-8 bg-gradient-to-b from-black/70 via-black/50 to-transparent">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl xl:text-5xl">
          {{ slide.title }}
        </h2>
        <p class="mt-3 text-base leading-relaxed text-gray-300 sm:text-lg max-w-[28ch] sm:max-w-xl mx-auto">
          {{ slide.content }}
        </p>
        <div class="mt-6">
          <StoreBadges />
        </div>
      </div>
    </div>
  </section>
</template>
